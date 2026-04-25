# Accredian Enterprise — Full Stack Intern Assignment

> A production-quality clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🔗 Links

| | |
|---|---|
| 🌐 **Live Demo** | [https://accredian-topaz.vercel.app/](#) |
| 📁 **GitHub Repo** | [https://github.com/netalgupta/Accredian](#) |

---

## 📸 Screenshots

> _Hero Section_
<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/603b3b65-8e0f-413f-84c6-703bfb438af9" />



> _Programs Section with Filter_
<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/ff87836a-76fe-4f5d-b9ab-84237dbfab59" />



> _Program Example_
<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/b19856ac-8f2e-49c1-bea7-3e3f8851933e" />



> _How It Works_
<img width="1919" height="859" alt="image" src="https://github.com/user-attachments/assets/bcbb9041-aeef-4062-96b8-c8ae20ca938c" />



> _Testimonials Carousel_
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/8638d769-8e13-4b9f-94b3-2ddf91a17080" />



> _Lead Capture Form_
<img width="1918" height="853" alt="image" src="https://github.com/user-attachments/assets/f25ab9ac-03cc-4921-a89e-406e9bfab622" />



> _Mobile View_
<img width="237" height="528" alt="image" src="https://github.com/user-attachments/assets/6789bb9c-2465-48df-b4d0-dbf00ef26f50" />



---

## ✨ Features Built

### Core Pages
- **Landing Page** — All sections fully implemented and responsive
- **Admin Dashboard** (`/admin`) — View, search, and export submitted leads

### Sections (in order)
| Section | Details |
|---|---|
| Navbar | Sticky with blur backdrop, active section highlight, mobile hamburger |
| Hero | Gradient headline, animated count-up stats, dual CTA buttons |
| Trusted By | Infinite auto-scroll logo marquee |
| Why Accredian | 4 feature cards with hover effects |
| Programs | Filterable grid (All / Tech / Business / Leadership) + Know More modal |
| How It Works | 3-step horizontal timeline with connector line |
| Metrics Banner | Animated count-up stats on scroll |
| Testimonials | Auto-rotating carousel with dot indicators, pause on hover |
| Lead Form | Full validation, API integration, success toast |
| Footer | 4-column grid with social links |

### Extra Features (Beyond Requirements)
- 🌙 **Dark / Light mode toggle** with smooth transitions
- 📊 **Scroll progress bar** — gradient bar at top of page
- ⬆️ **Back to top button** — appears after scrolling 400px
- 🔢 **Count-up animations** — stats animate on scroll into view
- 💬 **Know More modal** — each program card opens a unique detail modal
- 🗂️ **Admin dashboard** — table view of all leads with search + CSV export
- 🔒 **Password-protected admin** route
- 📱 **Fully responsive** — mobile-first design
- ♿ **Accessible** — aria labels, keyboard navigation, semantic HTML
- 🔍 **SEO optimized** — meta tags, OG image, structured title

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **Next.js 14** | App Router, API routes, server components |
| **TypeScript** | Strict mode throughout |
| **Tailwind CSS** | All styling, dark mode via class strategy |
| **Framer Motion** | Page animations, modal transitions, count-up |
| **next-themes** | Dark/light mode management |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation for form + API |
| **Sonner** | Toast notifications |
| **Lucide React** | Icons |

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout + providers
│   ├── globals.css               # Global styles + CSS variables
│   ├── not-found.tsx             # 404 page
│   ├── admin/
│   │   └── page.tsx              # Lead admin dashboard
│   └── api/
│       └── leads/
│           └── route.ts          # POST + GET leads API
├── components/
│   ├── ui/                       # Reusable base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── BackToTopButton.tsx
│   │   └── ThemeToggle.tsx
│   └── sections/                 # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Partners.tsx
│       ├── WhyAccredian.tsx
│       ├── Programs.tsx
│       ├── ProgramModal.tsx
│       ├── HowItWorks.tsx
│       ├── MetricsBanner.tsx
│       ├── Testimonials.tsx
│       ├── LeadForm.tsx
│       └── Footer.tsx
├── lib/
│   ├── data.ts                   # All mock data
│   └── validations.ts            # Zod schemas
├── types/
│   └── index.ts                  # TypeScript interfaces
└── data/
    └── leads.json                # Persisted lead submissions
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/netalgupta/Accredian
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Create the leads data file
mkdir -p data
echo "[]" > data/leads.json

# 4. Run development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

### Admin Dashboard

```
URL:      http://localhost:3000/admin
Password: accredian2024
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🔌 API Reference

### `POST /api/leads`
Submit a new lead from the contact form.

**Request body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@company.com",
  "company": "Razorpay",
  "phone": "+91 98765 43210",
  "teamSize": "51-200 employees",
  "message": "Looking for AI/ML training for our team."
}
```

**Response:**
```json
{
  "success": true,
  "id": "uuid-here"
}
```

### `GET /api/leads`
Fetch all submitted leads (used by admin dashboard).

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "Priya Sharma",
    "email": "priya@company.com",
    "company": "Razorpay",
    "teamSize": "51-200 employees",
    "submittedAt": "2026-04-25T10:30:00Z"
  }
]
```

---

## 🤖 AI Usage

AI tools (Claude, Antigravity) were used during development. Here's an honest breakdown:

### What AI helped with
- **Initial scaffolding** — folder structure, boilerplate layout, section skeletons
- **Mock data generation** — programs, testimonials, partner names, feature descriptions
- **Zod schema** — form validation schema for the lead form
- **Framer Motion syntax** — animation variants for hero and card entrance effects
- **API route structure** — Next.js App Router route handler boilerplate

### What I built / modified manually
- **Color palette tuning** — matched exact gradients from the reference site (dark navy `#020817`, purple-to-pink gradient on hero text)
- **Programs filter logic** — category state management and animated filter transitions
- **Count-up animation fix** — debugged `useInView` not triggering, rewrote counter logic with `setInterval`
- **Dark mode implementation** — resolved hydration mismatch, added light mode CSS variables across all components
- **Admin dashboard** — search filtering, CSV export logic, password gate UX
- **Mobile responsiveness** — adjusted breakpoints, hamburger menu animation, form layout on small screens
- **Know More modal** — wired unique data per program card, added backdrop close, focus trap
- **Scroll progress bar** — implemented and positioned above navbar correctly
- **Performance tuning** — added `passive: true` to scroll listeners, used `once: true` on intersection observers

---

## ⚡ Performance

Lighthouse scores on deployed build:

| Metric | Score |
|---|---|
| Performance | 75 |
| Accessibility | 93 |
| Best Practices | 100 |
| SEO | 100 |

<img width="1205" height="465" alt="image" src="https://github.com/user-attachments/assets/fa1057bd-5db5-4ee1-99c3-a79e24306928" />


---

## 🔮 Improvements I'd Make With More Time

1. **Real database** — Replace `leads.json` with Supabase or Prisma + PostgreSQL for proper persistence and concurrent write safety
2. **Email notifications** — Send confirmation email to lead + internal alert to sales team using Resend or Nodemailer
3. **Analytics dashboard** — Charts showing leads over time, team size distribution, conversion by source using Recharts
4. **CMS integration** — Connect programs and testimonials to Sanity or Contentful so non-technical teams can update content
5. **Auth for admin** — Replace hardcoded password with NextAuth.js + Google OAuth
6. **A/B testing** — Test two hero CTA variants to measure conversion rate difference
7. **i18n** — Add Hindi language support since the target audience is India-based enterprises
8. **E2E tests** — Playwright tests for form submission, modal open/close, filter behavior
9. **Rate limiting** — Add IP-based rate limiting on `/api/leads` to prevent spam submissions
10. **ROI Calculator** — Interactive tool letting L&D managers estimate training ROI based on team size and role

---

## 👤 Author

**Netal Gupta**
- GitHub: [netalgupta](https://github.com/netalgupta)
- LinkedIn: [linkedin.com/in/netalgupta](#)
- Email: netal.gupta@somaiya.edu

---

_Built as part of the Accredian Full Stack Developer Intern assignment — April 2026_
