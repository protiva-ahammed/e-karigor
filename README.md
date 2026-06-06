# E-Karigor — ই-কারিগর

> Connecting skilled home service professionals with families across Bangladesh.

**Live:** [e-karigor.vercel.app](https://e-karigor.vercel.app)

---

## What is E-Karigor?

E-Karigor is a service marketplace for home and renovation professionals in Bangladesh. Skilled workers — electricians, cleaners, construction workers, carpenters, plumbers, and more — often have no digital presence and cannot represent themselves online.

E-Karigor bridges that gap. Our admin team physically vets workers, verifies their NID, creates their digital profiles, and manually connects them with clients who need services. The worker gets more work. The client gets a trusted, verified professional.

---

## Services

- 🧹 Home Cleaning — বাড়ি পরিষ্কার
- 🏗️ Construction & Renovation — নির্মাণ ও সংস্কার
- ⚡ Electrical Work — বৈদ্যুতিক কাজ
- 🔧 Plumbing — পাইপলাইন মেরামত
- 🖌️ Painting — রং করা
- ❄️ AC Repair & Service — এসি মেরামত
- 🔌 Appliance Repair — যন্ত্রপাতি মেরামত
- 📦 Moving & Shifting — মালামাল স্থানান্তর
- 🛡️ Security Guard — নিরাপত্তা প্রহরী
- 📚 Tutoring — গৃহশিক্ষক
- 🧱 Mason / Wall Repair — রাজমিস্ত্রি
- 🪟 Tiles Fixing — টাইলস মেরামত
- 🪵 Carpenter — কাঠমিস্ত্রি

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, TailwindCSS |
| Internationalisation | react-i18next (English + Bangla) |
| Build tool | Vite |
| Deployment | Vercel |
| Backend (in progress) | Java Spring Boot 3, PostgreSQL |

---

## Features

- Bilingual UI — English and Bangla language toggle
- NID verified worker profiles
- Service category browsing
- Service request form
- Mobile responsive
- Admin panel (in progress)
- bKash / Nagad / Rocket payment recording (in progress)

---

## Local Development

**Requirements:** Node.js 18+, npm

```bash
# Clone the repository
git clone https://github.com/your-username/e-karigor.git
cd e-karigor/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

**Environment variables:**
```bash
# Copy and fill in your values
cp .env.example .env
```

---

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx          # Root component — all page sections
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles + Tailwind directives
│   ├── i18n.ts          # Language configuration
│   └── locales/
│       ├── en.json      # English translations
│       └── bn.json      # Bangla translations
├── index.html           # HTML shell + meta tags
├── tailwind.config.js   # Design system + custom colours
├── vite.config.ts       # Build configuration
└── vercel.json          # Vercel deployment config
```

---

## Deployment

Frontend is deployed on Vercel with automatic deployments on every push to `main`.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Roadmap

- [x] Landing page with bilingual support
- [x] Service categories
- [x] Worker profile cards
- [x] Service request form
- [ ] Backend API (Spring Boot)
- [ ] Admin dashboard — worker management
- [ ] Client accounts — request history
- [ ] Worker ratings and reviews
- [ ] bKash payment recording
- [ ] Search and filters
- [ ] Google Maps integration

---

## Payment

E-Karigor supports Bangladeshi mobile financial services:
- **bKash**
- **Nagad**
- **Rocket**

---

## Credits

Designed and built by Protiva Ahammed
[Source on GitHub](https://github.com/protiva-ahammed/e-karigor)

---

## License

MIT License — see [LICENSE](LICENSE) for details.
