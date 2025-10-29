# Exponential | Agentive AI

Exponential | an Agentive AI Platform by J2 DevStudio

## Overview

Exponential is a software subscription as a service platform featuring custom AI-powered software solutions for businesses and individuals. Built with Next.js, TypeScript, and Tailwind CSS. The site features an engaging hero section with orbital animations and a clean, professional design.

## 🚀 CI / CD

The project is deployed on Vercel and automatically updates with each push to the main branch.

## 🛠 Tech Stack

### Core Technologies

- **Next.js** (v14.2.12) - React framework for production
- **React** (v18.3.1) - UI library
- **TypeScript** (v5) - Type safety and enhanced developer experience
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Framer Motion** (v11.5.6) - Animation library
- **@svgr/webpack** (v8.1.0) - SVG handling and optimization

### Development Tools

- **PostCSS** (v8) - CSS transformation tool
- **Autoprefixer** (v10.4.20) - Automatic CSS prefixing
- **ESLint** (v8) - Code linting and style enforcement

## 🎨 Styling Configuration

### Tailwind CSS Setup

The project uses a custom Tailwind configuration (`tailwind.config.ts`) with:

- **Custom Breakpoints**:

  ```typescript
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1200px",
  }
  ```

- **Container Configuration**:

  ```typescript
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      md: "2rem",
    }
  }
  ```

- **Custom Animations and Keyframes**:
  - `cursor-blink`: Main Hero section for emphasis

### Global CSS Configuration

- **Themed Colors and Custom Classes**:

abstracts this common centering technique for absolutely positioned DIVs

```@layer base {
:root {
  --color-violet-400: theme("colors.violet.400");
  --color-fuchsia-400: theme("colors.fuchsia.400");
  --color-amber-300: theme("colors.amber.300");
  --color-teal-300: theme("colors.teal.300");
  --color-gray-950: theme("colors.gray.950");
}

.absolute-center {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
}
```

````

### PostCSS Configuration

The project uses a minimal PostCSS setup (`postcss.config.mjs`) with:

- Tailwind CSS processing
- Autoprefixer for cross-browser compatibility

## 🌟 Animation Strategy

## 🔧 Development

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
````

3. Run development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

### Build and Deployment

- Build the project:
  ```bash
  npm run build
  ```
- Start production server:
  ```bash
  npm run start
  ```

### Automatic Deployment

The project is configured for automatic deployment through Vercel:

- Push to main branch triggers new deployment
- Preview deployments for pull requests
- Automatic SSL/TLS certificates

## 📝 Project Structure

```
portfolio2025/
├── src/
│   ├── app/          # Next.js app router
│   ├── components/   # Reusable components
│   ├── sections/     # Page sections
│   └── pages/        # Page components
├── public/           # Static assets
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

## 🎯 Performance Insights

## 📄 License

## 👤 Author

J2 DevStudio
