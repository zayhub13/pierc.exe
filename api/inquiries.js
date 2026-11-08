const fs = require('node:fs/promises');
const path = require('node:path');
const { formidable } = require('formidable');

const recipient = process.env.INQUIRY_TO_EMAIL || 'johnjairuhochoa@gmail.com';
const allowedTypes = new Set(['application/pdf', 'image/jpeg', 'image/png']);

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

function scalar(value) {
  return Array.isArray(value) ? value[0] : value;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

function validate(data, consentFile) {
  const errors = {};
  const required = ['name', 'email', 'age', 'piercing_type', 'service_type', 'location'];

  for (const field of required) {
    if (!data[field]?.trim()) errors[field] = [`The ${field.replaceAll('_', ' ')} field is required.`];
  }

  if (data.name && data.name.length > 100) errors.name = ['Name must be 100 characters or fewer.'];
  if (data.email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 150)) {
    errors.email = ['Enter a valid email address.'];
  }
  if (data.phone && data.phone.length > 30) errors.phone = ['Phone must be 30 characters or fewer.'];

  const age = Number(data.age);
  if (data.age && (!Number.isInteger(age) || age < 1 || age > 99)) {
    errors.age = ['Age must be a whole number between 1 and 99.'];
  }
  if (data.piercing_type && data.piercing_type.length > 60) errors.piercing_type = ['Choose a valid piercing type.'];
  if (!['Home service', 'Meetup'].includes(data.service_type)) {
    if (data.service_type) errors.service_type = ['Choose home service or meetup.'];
  }
  if (data.placement && data.placement.length > 120) errors.placement = ['Placement must be 120 characters or fewer.'];
  if (data.location && data.location.length > 200) errors.location = ['Location must be 200 characters or fewer.'];
  if (data.message && data.message.length > 1500) errors.message = ['Message must be 1500 characters or fewer.'];

  if (data.preferred_date) {
    const date = new Date(`${data.preferred_date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(date.getTime()) || date < today) {
      errors.preferred_date = ['Choose today or a future date.'];
    }
  }

  if (data.age && age < 18) {
    if (!data.guardian_name?.trim()) errors.guardian_name = ['Parent or guardian name is required for minors.'];
    if (!data.guardian_phone?.trim()) errors.guardian_phone = ['Parent or guardian phone is required for minors.'];
    if (!consentFile) errors.consent_letter = ['A signed parent or guardian consent letter is required for minors.'];
  }

  return errors;
}

function emailRows(data, fileName) {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Age', data.age],
    ['Piercing', data.piercing_type],
    ['Placement', data.placement],
    ['Service', data.service_type],
    ['Location', data.location],
    ['Preferred date', data.preferred_date],
    ['Message', data.message],
    ['Parent / guardian', data.guardian_name],
    ['Guardian phone', data.guardian_phone],
    ['Consent letter', fileName],
  ].filter(([, value]) => value);

  return {
    text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
    html: `<table style="border-collapse:collapse">${rows.map(([label, value]) =>
      `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value)}</td></tr>`
    ).join('')}</table>`,
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { error: 'Method not allowed.' });
  }

  let uploadedFile;
  try {
    const form = formidable({
      maxFiles: 1,
      maxFileSize: 4 * 1024 * 1024,
      maxTotalFileSize: 4 * 1024 * 1024,
      maxFields: 20,
      maxFieldsSize: 32 * 1024,
      allowEmptyFiles: false,
      filter: ({ mimetype }) => !mimetype || allowedTypes.has(mimetype),
    });
    const [fields, files] = await form.parse(req);
    uploadedFile = scalar(files.consent_letter);
    const data = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, String(scalar(value) ?? '').trim()])
    );

    if (uploadedFile && !allowedTypes.has(uploadedFile.mimetype)) {
      return sendJson(res, 422, { errors: { consent_letter: ['Upload a PDF, JPG, or PNG file.'] } });
    }

    const errors = validate(data, uploadedFile);
    if (Object.keys(errors).length) return sendJson(res, 422, { errors });

    const apiKey = process.env.RESEND_API_KEY;
    const sender = process.env.INQUIRY_FROM_EMAIL;
    if (!apiKey || !sender) {
      console.error('Inquiry email is not configured. Set RESEND_API_KEY and INQUIRY_FROM_EMAIL.');
      return sendJson(res, 503, { error: 'Inquiry email is not configured yet.' });
    }

    const attachment = uploadedFile
      ? {
          filename: path.basename(uploadedFile.originalFilename || 'consent-letter'),
          content: (await fs.readFile(uploadedFile.filepath)).toString('base64'),
        }
      : null;
    const body = emailRows(data, attachment?.filename);
    const email = {
      from: sender,
      to: [recipient],
      reply_to: data.email,
      subject: `New piercing inquiry from ${data.name}`,
      text: body.text,
      html: body.html,
      ...(attachment ? { attachments: [attachment] } : {}),
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });
    if (!response.ok) {
      const details = await response.text();
      console.error(`Resend rejected an inquiry email (${response.status}): ${details}`);
      return sendJson(res, 502, { error: 'Could not send inquiry email. Please try again later.' });
    }

    return sendJson(res, 201, { ok: true });
  } catch (error) {
    console.error('Failed to process inquiry:', error);
    return sendJson(res, 400, { error: 'Could not process inquiry. Check the form and try again.' });
  } finally {
    if (uploadedFile?.filepath) {
      await fs.unlink(uploadedFile.filepath).catch((error) => {
        console.error('Could not remove temporary consent-letter upload:', error);
      });
    }
  }
};
