import '../css/app.css';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

const SERVICES = [
  ['EAR', 'Lobe, helix, tragus, conch, daith, industrial.'],
  ['NOSE', 'Nostril, high nostril, septum.'],
  ['LIP & ORAL', 'Labret, vertical labret, medusa, monroe, snake bites, tongue.'],
  ['BROW & FACE', 'Eyebrow and cheek.'],
  ['NAVEL', 'Navel piercings, after a quick check that your anatomy suits it.'],
  ['JEWELRY', 'Implant grade titanium, steel, swaps and downsizing.'],
];
const PRICE_LIST = [
  ['Ear Piercing', [['Lobe', 200], ['Helix', 350], ['Forward helix', 350], ['Flat', 350], ['Conch', 350], ['Industrial', 600], ['Tragus', 350]]],
  ['Facial Piercing', [['Nostril', 350], ['Septum', 350], ['Eyebrow', 350]]],
  ['Body Piercing', [['Navel', 400]]],
  ['Lip Piercing', [['Labret', 350], ['Vertical labret', 350], ['Monroe', 350], ['Snake bites', 600], ['Spider bites', 600]]],
  ['Oral Piercing', [['Smiley', 400], ['Tongue', 400]]],
];
const TYPES = ['Ear', 'Nose', 'Lip / Oral', 'Brow / Face', 'Navel', 'Jewelry change', 'Not sure yet'];
const currentPath = window.location.pathname.replace(/\/+$/, '');
const APP_BASE_PATH = currentPath === '/notes' ? '' : currentPath;
const pageUrl = (path) => `${APP_BASE_PATH}${path}` || '/';

const NOTES = {
  before: ['What to do', [
    'Eat a proper meal and drink water first. Fainting on an empty stomach is the most common problem.',
    'Skip alcohol for 24 hours before and go easy on caffeine. Both make bleeding and nerves worse.',
    'Tell us about allergies (especially nickel), medications, skin conditions, and any history of fainting or bleeding easily.',
    'Shower first and keep lotion or oil off the area.',
    'Wear loose, comfy clothes. For a navel piercing, wear a loose top and stretchy or high bottoms with nothing pressing on the area.',
    'Under 18? Bring the signed parent or guardian consent letter. A parent being there is best.',
    'Home service: prep a clean, well lit table or flat surface and keep pets and kids out of the room. Meetup: choose a clean spot with enough privacy.',
  ]],
  expect: ['What to expect', [
    'We talk through placement and jewelry first. For navels we check the shape of your skin fold to see if it suits the piercing.',
    'We mark the exact spot and you approve it. You can say stop at any point.',
    'Gloves on, skin cleaned, and a brand new needle and jewelry opened in front of you. Everything is single use or sterilized.',
    'The needle goes through in a second or two. Expect a sharp pinch, pressure, maybe watery eyes or a rush of heat. Breathe out as it goes in.',
    'Starter jewelry is implant grade titanium and a little longer to leave room for swelling.',
    'Afterwards it will be tender and a bit swollen, with light bleeding for the first days. Clear or pale crust is normal.',
    'Healing is slow. Navels often take 6 to 12 months or more. Looking healed does not mean it is healed.',
  ]],
  care: ['Aftercare', [
    'Wash your hands with soap before touching the piercing, every time.',
    'Clean once or twice a day with sterile saline wound wash (0.9% sodium chloride, nothing added). Spray, then pat dry with a clean paper towel.',
    'A quick rinse in the shower is fine. Keep harsh soaps off it.',
    'Leave it alone. No twisting, spinning or picking. Soften crust with saline before it comes off.',
    'No alcohol, hydrogen peroxide, antibiotic ointment or tea tree oil. They irritate and slow healing.',
    'No pools, hot tubs, lakes or sea while it heals.',
    'Navel: wear loose clothes, keep belts and tight waistbands off it, sleep on your back or side, and protect it during workouts.',
    'Do not change the jewelry until it is fully healed, unless we have checked it.',
    'Warning signs: spreading redness, heat, throbbing pain that gets worse, thick yellow or green smelly discharge, or fever. See a doctor, and keep the jewelry in unless the doctor says otherwise.',
  ]],
};

/* same logo everywhere: footer style */
const Logo = ({ cls = 'text-3xl', style }) => <span className={`font-term tracking-wider text-white whitespace-nowrap ${cls}`} style={style}>PIERC<span className="text-blood">.EXE</span></span>;

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && ref.current.classList.add('show'), { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const H2 = ({ children }) => <Reveal><h2 className="font-metal fire text-4xl sm:text-6xl mb-8 leading-tight">{children}</h2></Reveal>;
const Zig = () => <div className="zig" />;

function Boot() {
  const [out, setOut] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => { const a = setTimeout(() => setOut(true), 1700); const b = setTimeout(() => setGone(true), 2300); return () => { clearTimeout(a); clearTimeout(b); }; }, []);
  if (gone) return null;
  return (
    <div className={`boot ${out ? 'out' : ''}`}>
      <p className="text-blood">&gt; PIERC.EXE</p><p>&gt; loading sterile gear...</p><p>&gt; tuning amps...</p>
      <div className="bar"><i /></div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [['Services', pageUrl('/#services')], ['Prices', pageUrl('/#prices')], ['Process', pageUrl('/#process')], ['Notes', pageUrl('/?page=notes')], ['Inquire', pageUrl('/#inquire')]];
  const bar = 'block w-6 h-0.5 bg-white transition-all';
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-black/90 backdrop-blur border-b-4 border-blood">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <a href={pageUrl('/')} aria-label="Home"><Logo cls="text-3xl" /></a>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          {links.map(([t, h]) => <a key={t} href={h} className="hover:text-blood transition">{t}</a>)}
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden w-11 h-11 grid place-content-center gap-1.5">
          <span className={`${bar} ${open ? 'rotate-45 translate-y-2' : ''}`} /><span className={`${bar} ${open ? 'opacity-0' : ''}`} /><span className={`${bar} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {open && <nav className="md:hidden drop border-t border-white/10 bg-black px-4 py-2 grid">
        {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)} className="font-metal text-2xl py-3 border-b border-white/10 active:text-blood">{t}</a>)}
      </nav>}
    </header>
  );
}

const Bolt = ({ c }) => <svg viewBox="0 0 40 100" className={`bolt ${c}`} aria-hidden="true"><polygon points="24,0 4,56 18,56 10,100 36,38 22,38" fill="#fff" /></svg>;

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-14 pb-32 overflow-hidden">
      <div className="beam" style={{ left: '5%' }} /><div className="beam" style={{ right: '5%', animationDelay: '-4.5s' }} />
      <Bolt c="a" /><Bolt c="b" />
      <h1 className="relative slam max-w-full px-2"><Logo cls="logo-glow" style={{ fontSize: 'clamp(2.4rem, 14vw, 10rem)', lineHeight: 1 }} /></h1>
      <p className="relative mt-6 max-w-md text-lg text-white/85">Heavy style, sterile gear. No studio, we come to you or meet you somewhere safe.</p>
      <div className="relative mt-8 w-full max-w-sm flex flex-col sm:flex-row gap-4">
        <a href="#inquire" className="btn flex-1">Send inquiry</a>
        <a href={pageUrl('/?page=notes')} className="btn-ghost flex-1">View piercing notes</a>
      </div>
    </section>
  );
}

function Tickers() {
  const a = 'NO ONLINE PAYMENT  ▲  HOME SERVICE  ▲  MEETUPS  ▲  SINGLE USE NEEDLES  ▲  IMPLANT GRADE TITANIUM  ▲  ';
  const b = 'MINORS WELCOME WITH PARENT CONSENT  ▲  KEEP IT CLEAN  ▲  ';
  return (
    <div className="py-8 overflow-hidden">
      <div className="bg-blood text-black font-metal text-xl sm:text-2xl py-2 border-y-4 border-white -rotate-2 scale-105"><div className="marquee whitespace-nowrap"><span>{a.repeat(4)}</span><span>{a.repeat(4)}</span></div></div>
      <div className="bg-white text-black font-metal text-xl sm:text-2xl py-2 border-y-4 border-blood rotate-1 scale-105 mt-4"><div className="marquee rev whitespace-nowrap"><span>{b.repeat(5)}</span><span>{b.repeat(5)}</span></div></div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <H2>WHAT WE <span className="text-blood">PIERCE</span></H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map(([title, text], i) => (
          <Reveal key={title} className="h-full"><div className="poster h-full p-6">
            <span className="font-term text-2xl text-blood">0{i + 1}</span>
            <h3 className="font-metal text-3xl mt-1">{title}</h3>
            <p className="mt-3 text-white/70">{text}</p>
          </div></Reveal>
        ))}
      </div>
    </section>
  );
}

function PriceList() {
  return (
    <section id="prices" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <H2>PIERCING <span className="text-blood">PRICE LIST</span></H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRICE_LIST.map(([category, items]) => (
          <Reveal key={category} className="h-full">
            <div className="poster h-full p-6">
              <h3 className="font-metal text-3xl text-blood mb-4">{category}</h3>
              <ul className="grid gap-3">
                {items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2">
                    <span>{name}</span>
                    <span className="font-term text-2xl whitespace-nowrap">₱{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-sm text-white/60">Prices are in Philippine pesos. Final placement is subject to an anatomy check.</p>
    </section>
  );
}

function Process() {
  const steps = ['Send an inquiry', 'We confirm a home visit or a meetup spot', 'Under 18? A signed parent or guardian consent letter is required', 'We bring sterile gear, pierce, and go over aftercare'];
  return (
    <section id="process" className="bg-blood text-black torn py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal><h2 className="font-metal text-4xl sm:text-6xl mb-10 leading-tight">HOW IT GOES DOWN</h2></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s} className="h-full"><div className="bang h-full bg-black text-white p-6 border-l-8 border-white"><span className="font-metal text-5xl text-blood">{i + 1}</span><p className="mt-2">{s}</p></div></Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm font-bold">No deposits or payments on this website. Payment is settled in person.</p>
        <a href={pageUrl('/?page=notes')} className="btn !bg-black mt-6 sm:inline-block hover:!bg-white">View piercing notes</a>
      </div>
    </section>
  );
}

function Inquire() {
  const empty = { name: '', email: '', phone: '', age: '', piercing_type: '', placement: '', service_type: '', location: '', preferred_date: '', message: '', guardian_name: '', guardian_phone: '', consent_letter: null };
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const minor = f.age !== '' && Number(f.age) < 18;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'file' ? e.target.files[0] || null : e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus('sending'); setErrors({});
    const fd = new FormData();
    Object.entries(f).forEach(([k, v]) => { if (v !== '' && v !== null) fd.append(k, v); });
    try {
      const csrfToken = document.querySelector('meta[name=csrf-token]')?.content;
      const res = await fetch(pageUrl(csrfToken ? '/inquiries' : '/api/inquiries'), {
        method: 'POST',
        headers: { Accept: 'application/json', ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {}) },
        body: fd,
      });
      if (res.status === 422) { setErrors((await res.json()).errors || {}); setStatus('idle'); return; }
      if (!res.ok) throw new Error();
      setStatus('done'); setF(empty);
    } catch { setStatus('error'); }
  }

  const input = 'w-full min-h-12 bg-black border-2 border-white/30 focus:border-blood focus:shadow-[0_0_14px_rgba(209,0,0,.6)] outline-none px-4 py-3 transition';
  const Err = ({ k }) => errors[k] ? <p className="text-blood text-sm mt-1">{errors[k][0]}</p> : null;

  return (
    <section id="inquire" className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <H2><span className="text-blood">INQUIRE</span></H2>
      <p className="text-white/70 mb-8 -mt-4">Tell us what you want and where. We reply by email or phone. No payment is taken here.</p>
      {status === 'done' ? (
        <div className="poster p-8 text-center"><p className="font-metal text-4xl text-blood">INQUIRY SENT</p><p className="mt-3">We will get back to you soon.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 underline hover:text-blood">Send another</button></div>
      ) : (
        <form onSubmit={submit} className="grid gap-4">
          <div><input className={input} placeholder="Name *" value={f.name} onChange={set('name')} /><Err k="name" /></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><input className={input} type="email" placeholder="Email *" value={f.email} onChange={set('email')} /><Err k="email" /></div>
            <div><input className={input} type="tel" placeholder="Phone (optional)" value={f.phone} onChange={set('phone')} /><Err k="phone" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><input className={input} type="number" inputMode="numeric" min="1" max="99" placeholder="Your age *" value={f.age} onChange={set('age')} /><Err k="age" /></div>
            <div><select className={input} value={f.piercing_type} onChange={set('piercing_type')}><option value="">Piercing type *</option>{TYPES.map((t) => <option key={t}>{t}</option>)}</select><Err k="piercing_type" /></div>
          </div>
          <input className={input} placeholder="Placement (e.g. navel, left helix)" value={f.placement} onChange={set('placement')} />
          <div className="grid sm:grid-cols-2 gap-4">
            <div><select className={input} value={f.service_type} onChange={set('service_type')}><option value="">Home service or meetup? *</option><option>Home service</option><option>Meetup</option></select><Err k="service_type" /></div>
            <div><input className={input} type="date" value={f.preferred_date} onChange={set('preferred_date')} /><Err k="preferred_date" /></div>
          </div>
          <div><input className={input} placeholder={f.service_type === 'Meetup' ? 'Preferred meetup spot *' : 'Your area / address for home service *'} value={f.location} onChange={set('location')} /><Err k="location" /></div>
          <textarea className={input} rows="4" placeholder="Details, jewelry ideas, questions" value={f.message} onChange={set('message')} />

          {minor && (
            <div className="border-4 border-blood bg-ink p-5 grid gap-4">
              <p className="font-metal text-2xl text-blood">UNDER 18? PARENT CONSENT NEEDED</p>
              <p className="text-sm text-white/80">Upload a letter signed by your parent or guardian. Include their full name, signature, date, contact number, your name, and the piercing they allow. We may contact them to confirm, and having them present is best.</p>
              <div><input className={input} placeholder="Parent / guardian full name *" value={f.guardian_name} onChange={set('guardian_name')} /><Err k="guardian_name" /></div>
              <div><input className={input} type="tel" placeholder="Parent / guardian phone *" value={f.guardian_phone} onChange={set('guardian_phone')} /><Err k="guardian_phone" /></div>
              <div><label className="block text-sm mb-2">Consent letter (PDF, JPG or PNG, max 4MB) *</label>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={set('consent_letter')} className="block w-full text-sm file:mr-4 file:border-0 file:bg-blood file:text-white file:px-4 file:py-2 file:cursor-pointer" /><Err k="consent_letter" /></div>
            </div>
          )}

          <button disabled={status === 'sending'} className="btn w-full">{status === 'sending' ? 'Sending...' : 'Send inquiry'}</button>
          {status === 'error' && <p className="text-blood">Something broke. Try again.</p>}
        </form>
      )}
    </section>
  );
}

function Notes() {
  const [tab, setTab] = useState('before');
  const [title, items] = NOTES[tab];
  return (
    <main className="max-w-3xl mx-auto px-4 pt-24 pb-16 min-h-screen">
      <h1 className="font-metal fire text-5xl sm:text-7xl leading-tight">PIERCING <span className="text-blood">NOTES</span></h1>
      <p className="text-white/70 mt-3 mb-8">Read this before, during and after your appointment.</p>
      <div className="flex gap-2 mb-6">
        {Object.entries(NOTES).map(([k, [label]]) => <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} className={`tab ${tab === k ? 'on' : ''}`}>{label}</button>)}
      </div>
      <div key={tab} className="poster notes-card p-6 drop">
        <h2 className="font-metal text-3xl text-blood mb-5">{title}</h2>
        <ol className="grid gap-4">
          {items.map((t, i) => <li key={i} className="flex gap-4"><span className="font-term text-3xl text-blood leading-none">{String(i + 1).padStart(2, '0')}</span><span>{t}</span></li>)}
        </ol>
      </div>
      <p className="text-xs text-white/50 mt-4">General guidance only, not medical advice.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href={pageUrl('/#inquire')} className="btn flex-1">Send inquiry</a>
        <a href={pageUrl('/')} className="btn-ghost flex-1">Back to home</a>
      </div>
    </main>
  );
}

function App() {
  const notes = window.location.search.includes('page=notes') || window.location.pathname.replace(/\/+$/, '') === '/notes';
  useEffect(() => { document.title = notes ? 'Piercing Notes | PIERC.EXE' : 'PIERC.EXE'; }, [notes]);
  return (
    <>
      {!notes && <Boot />}<div className="grain" /><div className="vignette" />
      <Nav />
      {notes ? <Notes /> : <><Hero /><Tickers /><Services /><Zig /><PriceList /><Zig /><Process /><Zig /><Inquire /></>}
      <footer className="border-t-4 border-blood bg-black py-10 text-center text-white/60 text-sm px-5">
        <Logo cls="text-4xl" />
        <p className="mt-3">Home service and meetups only. Minors need a signed parent or guardian consent letter.</p>
        <p className="font-term text-2xl text-blood mt-2">Piercing care: clean hands, sterile saline, no twisting.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
