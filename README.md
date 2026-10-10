# SkillSwap System

A peer-to-peer skill exchange platform built with **Next.js 15** and **React 19**. Connect with people who can teach what you want to learn — while sharing what you already know. AI-matched skill exchanges, beautifully designed.

![SkillSwap Landing Page](https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=350&w=940)

---

## ✨ Features

- **Smart AI Matching** — Identifies people with complementary skills and learning goals
- **Interactive Find-Match Wizard** — Multi-step onboarding flow to collect your skills, availability, and preferences
- **Skill Exchange** — Two-way knowledge exchange: you teach React, they teach UI/UX
- **Smart Scheduling** — Choose availability days, preferred times, and session durations
- **Explore Skills** — Browse 8+ skill categories with infinite-scroll marquee animations
- **Animated UI** — Framer Motion powered page transitions, floating particles, and scroll animations
- **Glassmorphism Design** — Dark theme with cyan/teal gradient accents and glass card components

---

## 🖥️ Pages

| Route | Description |
|---|---|
| `/` | Landing page — Hero, About, Features, How It Works, Explore Skills, CTA |
| `/find-match` | Multi-phase matching wizard (intro → setup → account → matching → results) |
| `/login` | Login form with animated success state |
| `/signup` | Signup form with client-side validation |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui pattern + Radix UI primitives |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Language | TypeScript 5.5 |
| Deployment | Netlify |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/prince-sinha75/Skill-Swap-System.git

# Navigate into the project
cd Skill-Swap-System/Skill-Swap

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
Skill-Swap/
├── app/
│   ├── page.tsx              # Home / Landing page
│   ├── layout.tsx            # Root layout with metadata & fonts
│   ├── globals.css           # Design tokens, custom utilities & animations
│   ├── find-match/
│   │   └── page.tsx          # Multi-phase skill matching wizard
│   ├── login/
│   │   └── page.tsx          # Login page
│   └── signup/
│       └── page.tsx          # Signup page
├── components/
│   ├── section/              # Page section components
│   │   ├── nav-bar.tsx       # Scroll-aware fixed navbar
│   │   ├── hero.tsx          # Animated hero with exchange visualization
│   │   ├── about.tsx         # About / values section
│   │   ├── features.tsx      # Feature cards with inline preview widgets
│   │   ├── how-it-works.tsx  # Step-by-step guide
│   │   ├── explore-skills.tsx# Searchable skills with marquee scroll
│   │   ├── cta-footer.tsx    # Call to action + footer
│   │   ├── scroll-progress.tsx# Fixed top scroll progress bar
│   │   └── section-heading.tsx# Reusable section heading pattern
│   └── UI/                   # 40+ shadcn/ui Radix UI components
├── lib/
│   ├── data.ts               # All static content & app data
│   └── utils.ts              # cn() utility (clsx + tailwind-merge)
├── hooks/
│   └── use-toast.tsx         # Toast hook
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── netlify.toml
```

---

## 🎨 Design System

The app uses a consistent dark design language:

- **Base:** `slate-950` backgrounds
- **Primary accent:** `cyan-400` → `teal-500` gradient (CTAs, active states, highlights)
- **Glass cards:** `backdrop-blur` + `bg-white/5` + `border-white/10`
- **Text gradient:** `from-cyan-300 via-teal-200 to-emerald-300`
- **Custom animations:** `float`, `pulse-glow`, `aurora`, `shimmer`, `marquee`
- **Background patterns:** `.bg-grid` (56px grid lines), `.bg-dots`

---

## 🧩 Skill Categories

Technology · Design · Photography · Music · Languages · Business · Writing · Personal Development

---

## 📦 Key Dependencies

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "framer-motion": "^11.3.8",
  "tailwindcss": "^3.4.7",
  "lucide-react": "^0.417.0",
  "react-hook-form": "^7.52.2",
  "zod": "^3.23.8",
  "recharts": "^2.12.7",
  "next-themes": "^0.3.0"
}
```

---

## 🚢 Deployment

The project is configured for **Netlify** deployment via `netlify.toml`. To deploy:

1. Push to GitHub
2. Connect the repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋 Author

**Prince Sinha**  
GitHub: [@prince-sinha75](https://github.com/prince-sinha75)
