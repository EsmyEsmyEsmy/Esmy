import Head from 'next/head'
import { METIERS, METIERS_LIST } from '../data/metiers'

// Génère les routes statiques à build time — ultra rapide côté Vercel + parfait pour le SEO
export async function getStaticPaths() {
  return {
    paths: METIERS_LIST.map(m => ({ params: { metier: m.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = METIERS[params.metier]
  if (!data) return { notFound: true }
  return { props: { data } }
}

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --slate:#0F172A;--slate2:#1F2937;--slate3:#374151;
  --orange:#F97316;--orange-d:#EA6C0A;--amber:#F59E0B;
  --cream:#FAFAF6;--cream2:#F4F2EC;--white:#FFFFFF;
  --g100:#F4F4F1;--g200:#E8E8E2;--g300:#D4D4CE;--g400:#9B9B8E;
  --g500:#7A7A70;--g600:#5A5A50;
  --text:#0F172A;--textsub:#5A5F6E;
  --r:14px;--rlg:22px;
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--cream);color:var(--text);line-height:1.55;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.container{max-width:1100px;margin:0 auto;padding:0 28px}

/* ───── NAV ───── */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,250,246,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(15,23,42,.05)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px;max-width:1100px;margin:0 auto;padding:0 28px}
.logo{display:flex;align-items:center;color:var(--slate);text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
.logo-dot{color:var(--orange);margin-left:-2px;letter-spacing:-.5px}
.nav-links{display:flex;align-items:center;gap:36px}
.nav-links a{color:var(--textsub);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-links a:hover{color:var(--slate)}
.nav-cta{display:flex;align-items:center;gap:16px}
.nav-cta .login{color:var(--textsub);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-cta .login:hover{color:var(--slate)}
.btn-cta{display:inline-flex;align-items:center;gap:8px;background:var(--slate);color:white;border:none;padding:11px 22px;border-radius:100px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-cta:hover{background:var(--orange)}

/* ───── HERO ───── */
.hero{min-height:80vh;padding:140px 0 80px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.hero-emoji{font-size:56px;text-align:center;margin-bottom:28px;animation:float 5s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.hero-eyebrow{font-size:12px;font-weight:600;color:var(--orange);letter-spacing:.18em;text-transform:uppercase;margin-bottom:24px;text-align:center}
.hero-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(38px,6vw,72px);font-weight:700;line-height:1.04;letter-spacing:-.03em;color:var(--slate);text-align:center;margin-bottom:28px;max-width:920px;margin-left:auto;margin-right:auto}
.hero-title em{font-style:italic;color:var(--orange);font-family:'Bricolage Grotesque',serif}
.hero-sub{font-size:18px;color:var(--textsub);line-height:1.65;text-align:center;max-width:620px;margin:0 auto 44px;font-weight:400}
.hero-actions{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap}
.btn-primary-big{display:inline-flex;align-items:center;gap:10px;background:var(--slate);color:white;border:none;padding:16px 32px;border-radius:100px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-primary-big:hover{background:var(--orange);transform:translateY(-1px)}
.btn-secondary-big{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--slate);border:1px solid rgba(15,23,42,.15);padding:16px 28px;border-radius:100px;font-size:15px;font-weight:500;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-secondary-big:hover{border-color:var(--slate);background:rgba(15,23,42,.04)}

/* ───── PAIN POINTS ───── */
.pains{padding:100px 0;border-top:1px solid rgba(15,23,42,.06)}
.pains-head{text-align:center;margin-bottom:64px;max-width:680px;margin-left:auto;margin-right:auto}
.section-eyebrow{font-size:11px;font-weight:600;color:var(--orange);letter-spacing:.22em;text-transform:uppercase;margin-bottom:16px}
.section-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,3.8vw,42px);font-weight:700;letter-spacing:-.025em;line-height:1.2;color:var(--slate);margin-bottom:14px}
.section-sub{font-size:16px;color:var(--textsub);line-height:1.65}
.pains-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.pain{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:32px 28px;transition:all .25s}
.pain:hover{border-color:rgba(15,23,42,.2);transform:translateY(-2px)}
.pain-num{font-family:'Bricolage Grotesque',sans-serif;font-size:14px;font-weight:700;color:var(--orange);margin-bottom:14px;letter-spacing:.06em}
.pain-title{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;color:var(--slate);margin-bottom:10px;letter-spacing:-.01em;line-height:1.25}
.pain-desc{font-size:14.5px;color:var(--textsub);line-height:1.65}

/* ───── LOTS EXEMPLES ───── */
.lots{padding:100px 0;background:var(--cream2);border-top:1px solid rgba(15,23,42,.06);border-bottom:1px solid rgba(15,23,42,.06)}
.lots-head{text-align:center;margin-bottom:48px;max-width:640px;margin-left:auto;margin-right:auto}
.lots-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:920px;margin:0 auto}
.lot{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:32px 22px;text-align:center;transition:all .25s}
.lot:hover{transform:translateY(-3px);border-color:var(--orange)}
.lot-ico{font-size:40px;margin-bottom:16px;display:block}
.lot-name{font-family:'Bricolage Grotesque',sans-serif;font-size:17px;font-weight:700;color:var(--slate);margin-bottom:6px;letter-spacing:-.005em}
.lot-desc{font-size:13px;color:var(--textsub);line-height:1.5}
.lots-note{text-align:center;margin-top:28px;font-size:12.5px;color:var(--g500);font-style:italic}

/* ───── FAQ ───── */
.faq{padding:100px 0;border-top:1px solid rgba(15,23,42,.06)}
.faq-head{text-align:center;margin-bottom:56px;max-width:640px;margin-left:auto;margin-right:auto}
.faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:14px}
.faq-item{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);overflow:hidden;transition:all .25s}
.faq-item:hover{border-color:rgba(15,23,42,.15)}
.faq-item.open{border-color:var(--orange);box-shadow:0 8px 32px rgba(15,23,42,.06)}
.faq-q{padding:22px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;cursor:pointer;font-family:'Bricolage Grotesque',sans-serif;font-size:17px;font-weight:600;color:var(--slate);letter-spacing:-.005em;line-height:1.35;user-select:none}
.faq-q:hover{color:var(--orange)}
.faq-chevron{flex-shrink:0;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--cream);color:var(--slate);font-size:14px;font-weight:700;transition:all .25s}
.faq-item.open .faq-chevron{background:var(--orange);color:white;transform:rotate(180deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .35s ease;padding:0 28px;font-size:15px;color:var(--textsub);line-height:1.7}
.faq-item.open .faq-a{max-height:500px;padding:0 28px 24px}

/* ───── CTA FINAL ───── */
.cta-final{padding:120px 0 100px;text-align:center;border-top:1px solid rgba(15,23,42,.06);background:linear-gradient(180deg,var(--cream) 0%,var(--cream2) 100%)}
.cta-inner{max-width:640px;margin:0 auto}
.cta-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(30px,4.2vw,48px);font-weight:700;letter-spacing:-.03em;line-height:1.1;color:var(--slate);margin-bottom:18px}
.cta-title em{font-style:italic;color:var(--orange)}
.cta-sub{font-size:17px;color:var(--textsub);line-height:1.65;margin-bottom:36px}

/* ───── OTHER METIERS ───── */
.others{padding:80px 0;border-top:1px solid rgba(15,23,42,.06);background:var(--cream2)}
.others-head{text-align:center;margin-bottom:40px}
.others-title{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:700;color:var(--slate);margin-bottom:10px;letter-spacing:-.01em}
.others-sub{font-size:14px;color:var(--textsub)}
.others-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:880px;margin:0 auto}
.other-card{display:inline-flex;align-items:center;gap:8px;background:white;border:1px solid rgba(15,23,42,.08);border-radius:100px;padding:10px 18px;text-decoration:none;color:var(--slate);font-size:14px;font-weight:500;transition:all .2s}
.other-card:hover{border-color:var(--orange);transform:translateY(-2px);color:var(--orange)}
.other-emoji{font-size:16px}

/* ───── FOOTER ───── */
footer{padding:50px 0 28px;border-top:1px solid rgba(15,23,42,.06);background:var(--cream2)}
.footer-inner{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;max-width:1100px;margin:0 auto;padding:0 28px}
.footer-brand p{font-size:13px;color:var(--textsub);line-height:1.6;margin-top:14px;max-width:260px}
.footer-col h4{font-size:12px;font-weight:700;color:var(--slate);letter-spacing:.06em;margin-bottom:14px;text-transform:uppercase}
.footer-col a{display:block;font-size:13px;color:var(--textsub);text-decoration:none;margin-bottom:9px;transition:color .15s}
.footer-col a:hover{color:var(--slate)}
.footer-bottom{border-top:1px solid rgba(15,23,42,.08);padding-top:24px;margin-top:42px;display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin-left:auto;margin-right:auto;padding-left:28px;padding-right:28px}
.footer-bottom p{font-size:12px;color:var(--g500)}
.footer-links{display:flex;gap:20px}
.footer-links a{font-size:12px;color:var(--g500);text-decoration:none;transition:color .15s}
.footer-links a:hover{color:var(--slate)}

/* ───── CONTACT MODAL ───── */
#contact-modal{display:none;position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.6);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
.modal-box{background:white;border-radius:var(--rlg);padding:40px 36px;width:100%;max-width:440px;box-shadow:0 24px 80px rgba(15,23,42,.2);position:relative}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;font-size:18px;cursor:pointer;color:var(--g500);padding:4px;line-height:1}
.modal-close:hover{color:var(--slate)}
.modal-logo{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.04em;color:var(--slate);margin-bottom:16px;display:flex;align-items:center}
.modal-logo-dot{color:var(--orange);margin-left:-2px}
.modal-title{font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:700;letter-spacing:-.02em;margin-bottom:8px}
.modal-sub{font-size:14px;color:var(--textsub);margin-bottom:24px;line-height:1.6}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.field{margin-bottom:12px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--textsub);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px}
.field input{width:100%;padding:12px 14px;border:1px solid rgba(15,23,42,.12);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;color:var(--slate);outline:none;transition:border-color .15s;background:var(--cream)}
.field input:focus{border-color:var(--orange);background:white}
.field input::placeholder{color:var(--g400)}
.field-error{display:none;background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;padding:9px 12px;font-size:13px;color:#DC2626;margin-bottom:12px}
.modal-submit{width:100%;padding:13px;background:var(--slate);color:white;border:none;border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s}
.modal-submit:hover{background:var(--orange)}
.modal-note{text-align:center;font-size:12px;color:var(--g500);margin-top:12px}
.modal-success{display:none;text-align:center;padding:16px 0}
.modal-success-ico{font-size:44px;margin-bottom:14px}
.modal-success h3{font-size:20px;font-weight:700;margin-bottom:8px;font-family:'Bricolage Grotesque',sans-serif}
.modal-success p{font-size:14px;color:var(--textsub);line-height:1.65;margin-bottom:20px}
.btn-close-modal{padding:11px 24px;background:var(--cream);border:1px solid var(--g200);border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;color:var(--slate)}

@media(max-width:900px){
  .nav-links{display:none}
  .hero{padding:110px 0 60px}
  .pains,.lots,.faq,.cta-final,.others{padding:70px 0}
  .pains-grid{grid-template-columns:1fr}
  .lots-grid{grid-template-columns:1fr;max-width:380px}
  .footer-inner{grid-template-columns:1fr 1fr;gap:30px}
  .footer-bottom{flex-direction:column;gap:12px;text-align:center}
}
@media(max-width:480px){
  .container{padding:0 20px}
  .nav-inner{padding:0 20px}
  .hero-actions{flex-direction:column;width:100%}
  .hero-actions a{text-align:center;justify-content:center;width:100%}
  .footer-inner{grid-template-columns:1fr;padding:0 20px}
  .field-row{grid-template-columns:1fr}
  .faq-q{font-size:15px;padding:18px 22px}
  .faq-item.open .faq-a{padding:0 22px 20px}
}
`

export default function MetierPage({ data }) {
  const otherMetiers = METIERS_LIST.filter(m => m.slug !== data.slug)

  // JSON-LD FAQ — excellent pour SEO Google, fait apparaître les questions en rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  }

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://esmy.ai/${data.slug}`} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">esmy<span className="logo-dot">.</span></a>
          <div className="nav-links">
            <a href="/about">À propos</a>
            <a href="/#tarifs">Tarifs</a>
            <a href="/demo">Démo API</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Contact</a>
          </div>
          <div className="nav-cta">
            <a href="/login" className="login">Connexion</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-cta">Planifiez votre démo</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-emoji">{data.emoji}</div>
          <div className="hero-eyebrow">{data.hero.eyebrow}</div>
          <h1 className="hero-title">{data.hero.title} <em>{data.hero.titleEm}</em></h1>
          <p className="hero-sub">{data.hero.sub}</p>
          <div className="hero-actions">
            <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-primary-big">Planifiez votre démo →</a>
            <a href="#faq" className="btn-secondary-big">Questions fréquentes</a>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pains">
        <div className="container">
          <div className="pains-head">
            <div className="section-eyebrow">Les défis de votre métier</div>
            <h2 className="section-title">Ce qu'Esmy résout pour {data.nomMetierPluriel === 'boulangeries' || data.nomMetierPluriel === 'pizzerias' ? 'les' : 'les'} {data.nomMetierPluriel}.</h2>
            <p className="section-sub">Un outil pensé pour votre réalité quotidienne — pas un SaaS générique.</p>
          </div>
          <div className="pains-grid">
            {data.painPoints.map((p, i) => (
              <div key={i} className="pain">
                <div className="pain-num">0{i + 1}</div>
                <div className="pain-title">{p.title}</div>
                <div className="pain-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOTS EXEMPLES */}
      <section className="lots">
        <div className="container">
          <div className="lots-head">
            <div className="section-eyebrow">Exemples de lots</div>
            <h2 className="section-title">Des lots adaptés à votre métier.</h2>
            <p className="section-sub">Personnalisables en 2 minutes depuis votre tableau de bord. Voici quelques exemples typiques.</p>
          </div>
          <div className="lots-grid">
            {data.lotsExemples.map((lot, i) => (
              <div key={i} className="lot">
                <span className="lot-ico">{lot.ico}</span>
                <div className="lot-name">{lot.name}</div>
                <div className="lot-desc">{lot.desc}</div>
              </div>
            ))}
          </div>
          <p className="lots-note">Chaque lot est offert pour remercier le client de sa visite — jamais conditionné à un avis.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq-head">
            <div className="section-eyebrow">Questions fréquentes</div>
            <h2 className="section-title">Tout ce que vous voulez savoir.</h2>
            <p className="section-sub">Les réponses aux questions qu'on nous pose le plus souvent.</p>
          </div>
          <div className="faq-list">
            {data.faq.map((item, i) => (
              <div key={i} className="faq-item" id={`faq-${i}`}>
                <div className="faq-q" onClick={() => typeof toggleFaq !== 'undefined' && toggleFaq(i)}>
                  <span>{item.q}</span>
                  <span className="faq-chevron">↓</span>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">Prêt à <em>essayer</em> Esmy ?</h2>
            <p className="cta-sub">14 jours gratuits, sans engagement. On prend 20 minutes pour comprendre votre {data.nomMetier} et voir si Esmy peut vous apporter quelque chose.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-primary-big">Planifiez votre démo →</a>
          </div>
        </div>
      </section>

      {/* OTHER METIERS */}
      <section className="others">
        <div className="container">
          <div className="others-head">
            <div className="others-title">Esmy pour d'autres métiers</div>
            <div className="others-sub">Chaque commerce a ses spécificités — découvrez comment Esmy s'adapte.</div>
          </div>
          <div className="others-grid">
            {otherMetiers.map(m => (
              <a key={m.slug} href={`/${m.slug}`} className="other-card">
                <span className="other-emoji">{m.emoji}</span>
                <span>{m.nomMetierPluriel.charAt(0).toUpperCase() + m.nomMetierPluriel.slice(1)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="/" className="logo">esmy<span className="logo-dot">.</span></a>
            <p>Plateforme pour commerçants locaux. Pensée en Provence, construite pour le terrain.</p>
          </div>
          <div className="footer-col">
            <h4>Produit</h4>
            <a href="/#tarifs">Tarifs</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Planifier une démo</a>
            <a href="/demo">API Google</a>
            <a href="/login">Connexion</a>
          </div>
          <div className="footer-col">
            <h4>Métiers</h4>
            {METIERS_LIST.slice(0, 4).map(m => (
              <a key={m.slug} href={`/${m.slug}`}>{m.nomMetierPluriel.charAt(0).toUpperCase() + m.nomMetierPluriel.slice(1)}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Légal</h4>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Esmy · contact@esmy.ai</p>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
          </div>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      <div id="contact-modal">
        <div className="modal-box">
          <button className="modal-close" onClick={() => closeModal()}>✕</button>
          <div className="modal-logo">esmy<span className="modal-logo-dot">.</span></div>
          <h2 className="modal-title">Planifions votre démo</h2>
          <p className="modal-sub">Laissez vos coordonnées — nous vous contactons sous <strong>24h</strong> pour organiser un échange de 20 minutes.</p>
          <div id="modal-form">
            <div className="field-row">
              <div className="field"><label>Prénom et nom *</label><input type="text" id="cf-name" placeholder="Marie Dupont" /></div>
              <div className="field"><label>Téléphone *</label><input type="tel" id="cf-phone" placeholder="06 12 34 56 78" /></div>
            </div>
            <div className="field"><label>Email *</label><input type="email" id="cf-email" placeholder="contact@moncommerce.fr" /></div>
            <div className="field"><label>Nom du commerce *</label><input type="text" id="cf-biz" placeholder={`Votre ${data.nomMetier}`} /></div>
            <div className="field-error" id="cf-error">Veuillez remplir tous les champs.</div>
            <button className="modal-submit" onClick={() => submitContact()}>Envoyer ma demande →</button>
            <p className="modal-note">Sans engagement · Réponse sous 24h</p>
          </div>
          <div className="modal-success" id="modal-success">
            <div className="modal-success-ico">🎉</div>
            <h3>Demande envoyée !</h3>
            <p>Merci ! Notre équipe vous contactera <strong>sous 24 heures</strong>.</p>
            <button className="btn-close-modal" onClick={() => closeModal()}>Fermer</button>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          function openModal() {
            document.getElementById('contact-modal').style.display = 'flex';
            document.getElementById('modal-form').style.display = 'block';
            document.getElementById('modal-success').style.display = 'none';
            document.getElementById('cf-error').style.display = 'none';
            document.body.style.overflow = 'hidden';
          }
          function closeModal() {
            document.getElementById('contact-modal').style.display = 'none';
            document.body.style.overflow = '';
          }
          document.getElementById('contact-modal').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
          function submitContact() {
            var name=document.getElementById('cf-name').value.trim();
            var phone=document.getElementById('cf-phone').value.trim();
            var email=document.getElementById('cf-email').value.trim();
            var biz=document.getElementById('cf-biz').value.trim();
            var err=document.getElementById('cf-error');
            if(!name||!phone||!email||!biz||!email.includes('@')){err.style.display='block';return;}
            err.style.display='none';
            document.getElementById('modal-form').style.display='none';
            document.getElementById('modal-success').style.display='block';
          }
          function toggleFaq(i) {
            var item = document.getElementById('faq-' + i);
            if (item) item.classList.toggle('open');
          }
        `
      }} />
    </>
  )
}
