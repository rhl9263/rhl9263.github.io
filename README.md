# rhl9263.github.io

Personal portfolio for **Rahul Kumar** — Senior SDET, Bangalore.
Built with **Astro**, deployed on **GitHub Pages**.

---

## 🚀 Local development

```bash
npm install
npm run dev
# → http://localhost:4321
```

Build for production:

```bash
npm run build
npm run preview   # serve the dist/ folder locally
```

---

## 📁 Structure

```
.
├── src/
│   ├── config.ts              # ⭐ All content lives here — edit this, not the components
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── public/
│   ├── favicon.svg
│   └── RahulKumar_Resume.pdf
├── astro.config.mjs
├── package.json
└── .github/workflows/deploy.yml # Auto-deploy on push
```

### Editing content

Everything customizable is in **`src/config.ts`** — bio, projects, jobs, skills, certs, education, links. Components read from it.

---

## 🐙 Deploy — GitHub Pages

The included GitHub Actions workflow at `.github/workflows/deploy.yml` builds Astro and publishes to GitHub Pages automatically. Because this is a **user site** (repo named `<user>.github.io`), the deployment target is the root of `https://rhl9263.github.io`.

### Enable GitHub Pages

1. Push this repo to GitHub.
2. Repo → **Settings** → **Pages** → **Source**: `GitHub Actions`.
3. Push a commit to `main`. The workflow builds Astro and deploys.

Site is live at `https://rhl9263.github.io`. Every push to `main` redeploys.

---

## 🎨 Theme (dark / light)

- Dark mode is the default.
- Respects `prefers-color-scheme` on first load.
- Toggle button in the nav flips between dark/light and remembers your choice in `localStorage`.

Colors are defined as CSS variables in `src/styles/global.css` under `:root` and `:root[data-theme='light']`.

---

## ✨ Animations

- **Hero staggered entrance** — each element fades in with a cascading delay.
- **Scroll-triggered reveals** — sections animate in via `IntersectionObserver` as you scroll down.
- **Staggered children** — project cards, timeline items, skill groups, and education cards animate in sequence.
- **Hover effects** — glow shadows and subtle transforms on cards, chips, and buttons.
- **Active nav highlighting** — current section's nav link highlights on scroll.
- All animations respect `prefers-reduced-motion`.

---

## 📤 Pushing to GitHub

```bash
cd rhl9263.github.io/
git init
git add .
git commit -m "portfolio: initial astro build"
git branch -M main
git remote add origin git@github.com:rhl9263/rhl9263.github.io.git
git push -u origin main --force
```

---

## 🛠️ Tech

- **[Astro 5](https://astro.build/)** — static site generator, ships zero JS by default.
- **Vanilla CSS** — custom design system with CSS variables, gradient accents, and scroll animations.
- **Google Fonts** — Inter (UI), JetBrains Mono (mono).
- **[GitHub Pages](https://pages.github.com/)** — free static host.

## 📄 License

Personal portfolio, all rights reserved. Feel free to take inspiration from structure/patterns.
