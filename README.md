# Portfolio

Personal portfolio site — React 19 + Vite 7 + Tailwind CSS v4. Dark, animated, single page.

```
portfolio/
├── index.html                  # meta tags, fonts, title
├── public/
│   ├── favicon.svg
│   └── resume.pdf              # ← apni CV yahan rakhein
└── src/
    ├── data/portfolio.js       # ★ SAARA CONTENT YAHIN HAI
    ├── components/             # Navbar, Hero, About, Skills, Projects, ...
    ├── App.jsx
    └── index.css               # theme tokens, animations, utilities
```

## Chalane ka tareeqa

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ folder banata hai
npm run preview  # build ko local test karta hai
```

## Content badalna

Sirf **`src/data/portfolio.js`** edit karein:

| Kya | Kahan |
| --- | --- |
| Naam, role, tagline, email | `profile` |
| GitHub / LinkedIn / X links | `socials` |
| Stats strip | `stats` |
| About paragraphs | `about` |
| Skills groups | `skills` |
| Projects cards | `projects` |
| Jobs timeline | `experience` |
| Nav links | `navLinks` |

Agar `profile.shortName` badlein to navbar/footer ka logo initials bhi badal jayenge.

## CV add karna

Apni PDF ko `public/resume.pdf` ke naam se save karein. Hero aur About ke "Résumé" button usi ko download karte hain.

## Contact form

By default form submit par visitor ka **mail app** khulta hai (koi backend nahi chahiye).
Agar direct email chahiye to [Formspree](https://formspree.io) pe free form banayen aur
`src/components/Contact.jsx` mein ye line bharein:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/your-id'
```

## Deploy

**Vercel** (sabse asaan)

```bash
npm i -g vercel
vercel
```

**Netlify** — build command `npm run build`, publish directory `dist`.

**GitHub Pages** — `vite.config.js` mein `base: '/repo-name/'` set karein, phir `dist/` ko `gh-pages` branch pe push karein.

## Notes

- `prefers-reduced-motion` respect hota hai — animations khud band ho jati hain.
- Keyboard focus states aur skip-link included hain.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels) — Google Fonts se.
