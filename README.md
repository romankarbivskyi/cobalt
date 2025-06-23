# Cobalt - Financial Technology Landing Page

A modern, animated landing page for Cobalt Financial Technologies built with React, TypeScript, and GSAP animations.

## 🚀 Live Demo

[View Live Site](https://romankarbivskyi.github.io/cobalt/)

## ✨ Features

- **Modern Design**: Clean, professional UI with dark theme and gradient accents
- **Smooth Animations**: Advanced GSAP animations including:
  - Text splitting and staggered reveals
  - Scroll-triggered animations
  - Sticky header with dynamic background
  - Smooth scrolling with ScrollSmoother
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **TypeScript**: Full type safety throughout the codebase
- **Accessible**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP 3.x with ScrollTrigger, ScrollSmoother, and SplitText
- **Build Tool**: Vite 6.x
- **Code Quality**: ESLint, Prettier
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── FeatureCard.tsx        # Reusable feature card component
│   └── ui/
│       └── Button.tsx         # Animated button component
├── sections/
│   ├── Header.tsx             # Sticky header with animations
│   ├── Hero.tsx               # Hero section with text animations
│   ├── About.tsx              # About section
│   ├── Features.tsx           # Main features showcase
│   ├── AiFeatures.tsx         # AI-specific features
│   ├── CTABlock.tsx           # Call-to-action section
│   └── Footer.tsx             # Footer section
├── lib/
│   └── utils.ts               # Utility functions (cn helper)
├── App.tsx                    # Main app component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles and theme
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/romankarbivskyi/cobalt.git
   cd cobalt
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Background**: `#09090b` (dark)
- **Text Primary**: Gradient from white to `#71717a`
- **Text Regular**: `#a1a1aa`
- **Text Link**: `#d4d4d8`
- **Accent**: `#22d3ee` (cyan)
- **Card Background**: `#141416`
- **Borders**: `#212123`

### Typography

- **Font**: Inter (Google Fonts)
- **Responsive scaling**: From mobile (text-sm) to desktop (text-7xl)

### Animations

- **Entry animations**: Fade up with stagger
- **Scroll animations**: Triggered at 80% viewport height
- **Hover effects**: Scale and brightness transforms
- **Text effects**: Word-by-word reveals using SplitText

## 🎯 Key Sections

1. **Header**: Sticky navigation with scroll effects
2. **Hero**: Main headline with animated text reveal
3. **About**: Company mission and value proposition
4. **Features**: Product capabilities showcase
5. **AI Features**: AI-specific functionality highlight
6. **CTA**: Call-to-action for waitlist signup
7. **Footer**: Company info and social links

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All animations and layouts are optimized for each breakpoint.

## 🔧 Development

### Code Style

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Automatic code formatting with Tailwind
