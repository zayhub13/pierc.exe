# pierc.exe

Static PIERC.EXE site with a Vercel serverless inquiry endpoint.

## Inquiry email setup

The `/api/inquiries` endpoint sends inquiry details through Resend. Before deploying:

1. Create a Resend account and verify a sender domain you control.
2. In Vercel, open the project settings and add these environment variables for the Production environment:
   - `RESEND_API_KEY`: an API key from Resend.
   - `INQUIRY_FROM_EMAIL`: a sender on the verified domain, such as `PIERC.EXE <inquiries@example.com>`.
   - `INQUIRY_TO_EMAIL` (optional): recipient address. Defaults to `johnjairuhochoa@gmail.com`.
3. Redeploy after saving the environment variables.

The endpoint emails consent-letter uploads as attachments and accepts PDF, JPG, or PNG files up to 4 MB. Uploaded files are removed from temporary function storage after the email attempt.
