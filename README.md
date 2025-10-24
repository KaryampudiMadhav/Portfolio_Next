# 🚀 Modern Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.2-38bdf8?style=for-the-badge&logo=tailwind-css)
![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-f03e2f?style=for-the-badge&logo=sanity)

A modern, fully responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**. Features smooth animations, dynamic content management, and optimized performance.
check my portfolio https://portfolio-next-7cmd03mrl-karyampudimadhav-2850s-projects.vercel.app/
## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sanity CMS Setup](#-sanity-cms-setup)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [API Routes](#-api-routes)
- [Customization](#-customization)
- [Performance](#-performance)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🎨 **Design & UI**
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for seamless transitions
- **Modern UI Components** - Clean, minimalist design with Tailwind CSS
- **Dark Theme** - Professional color scheme with custom gradients
- **Custom Scrollbar** - Styled scrollbar matching the theme
- **Dynamic Favicon** - Uses profile picture from Sanity CMS

### 📝 **Content Management**
- **Sanity CMS Integration** - Headless CMS for easy content updates
- **Real-time Updates** - Content changes reflect automatically (10s revalidation)
- **Image Optimization** - Automatic image optimization via Sanity CDN
- **Fallback UI** - Graceful emoji placeholders for missing images
- **Type-safe Content** - TypeScript interfaces for all content types

### 🔧 **Technical Features**
- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Static Site Generation (SSG)** - Optimized performance with ISR
- **API Routes** - RESTful API endpoints for data fetching
- **SEO Optimized** - Meta tags, OpenGraph, and structured data
- **Google Analytics** - Integrated tracking (GA4)
- **Form Validation** - React Hook Form for contact forms
- **Error Handling** - Comprehensive error boundaries

### 📱 **Sections**
1. **Hero Section** - Dynamic typewriter effect with role animations
2. **About Section** - Personal background with animated profile picture
3. **Skills Section** - Interactive skill cards with progress indicators
4. **Experience Section** - Horizontal scrollable work history timeline
5. **Projects Section** - Showcase portfolio projects with technologies
6. **Contact Section** - Functional contact form
7. **Header** - Social media links and navigation
8. **Footer** - Quick navigation back to top

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.2 | React framework with SSR/SSG |
| [React](https://react.dev/) | 18.2 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.3 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.2 | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | 10.16 | Animation library |
| [React Hook Form](https://react-hook-form.com/) | 7.48 | Form management |
| [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter) | 5.0 | Typewriter effect |
| [React Social Icons](https://www.npmjs.com/package/react-social-icons) | 6.0 | Social media icons |
| [Heroicons](https://heroicons.com/) | 2.0 | Icon library |

### **Backend & CMS**
| Technology | Version | Purpose |
|------------|---------|---------|
| [Sanity CMS](https://www.sanity.io/) | v2.35 | Headless CMS |
| [Next Sanity](https://www.npmjs.com/package/next-sanity) | 7.0 | Sanity integration for Next.js |
| [GROQ](https://www.sanity.io/docs/groq) | 3.0 | Query language for Sanity |
| [@sanity/image-url](https://www.npmjs.com/package/@sanity/image-url) | 1.0 | Image URL builder |

### **Development Tools**
- ESLint - Code linting
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixes
- Tailwind Scrollbar - Custom scrollbar plugin

---

## 📁 Project Structure

```
portfolioWebsite/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── BackgroundCircles.tsx
│   ├── ContactMe.tsx   # Contact form
│   ├── ExperienceCard.tsx
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skill.tsx       # Individual skill component
│   ├── Skills.tsx      # Skills grid
│   └── WorkExperience.tsx
│
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── index.tsx      # Home page
│   ├── test-sanity.tsx # Debug page for Sanity data
│   └── api/           # API routes
│       ├── getExperience.ts
│       ├── getPageInfo.ts
│       ├── getProjects.ts
│       ├── getSkills.ts
│       └── getSocials.ts
│
├── sanity/             # Sanity Studio configuration
│   ├── schemas/       # Content schemas
│   │   ├── experience.js
│   │   ├── pageInfo.js
│   │   ├── project.js
│   │   ├── schema.js
│   │   ├── skill.js
│   │   └── social.js
│   ├── sanity.json    # Sanity configuration
│   └── package.json
│
├── utils/              # Utility functions
│   ├── fetchExperience.ts
│   ├── fetchPageInfo.ts
│   ├── fetchProjects.ts
│   ├── fetchSkills.ts
│   └── fetchSocials.ts
│
├── styles/             # CSS files
│   ├── globals.css    # Global styles
│   └── Home.module.css
│
├── public/             # Static assets
│   ├── favicon.ico
│   └── site.webmanifest
│
├── typings.d.ts        # TypeScript type definitions
├── sanity.ts           # Sanity client configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── .env.local          # Environment variables
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm/yarn
- Git
- A Sanity account (free tier available)

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/MitchellSparrow/portfolioWebsite.git
cd portfolioWebsite
```

2. **Install dependencies**
```bash
# Install main project dependencies
npm install

# Install Sanity Studio dependencies
cd sanity
npm install
cd ..
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=madhav_portfolio
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Run the development server**
```bash
# Terminal 1 - Next.js
npm run dev

# Terminal 2 - Sanity Studio
cd sanity
npm start
```

5. **Open in browser**
- Portfolio: http://localhost:3000
- Sanity Studio: http://localhost:3333
- Test Data Page: http://localhost:3000/test-sanity

---

## 📊 Sanity CMS Setup

### **1. Create a Sanity Project**

```bash
npm install -g @sanity/cli
sanity login
cd sanity
sanity init
```

### **2. Content Schemas**

The project includes 5 content types:

#### **📄 PageInfo** (Personal Information)
```javascript
{
  name: string,
  role: string,
  heroImage: image,
  profilePic: image,
  backgroundInformation: string,
  phoneNumber: string,
  email: string,
  address: string,
  socials: reference[]
}
```

#### **💻 Skill** (Technical Skills)
```javascript
{
  title: string,
  progress: number,  // 0-100
  image: image
}
```

#### **🚀 Project** (Portfolio Projects)
```javascript
{
  title: string,
  image: image,
  summary: string,
  linkToBuild: url,
  technologies: reference[]  // Links to skills
}
```

#### **💼 Experience** (Work History)
```javascript
{
  jobTitle: string,
  company: string,
  companyImage: image,
  dateStarted: date,
  dateEnded: date,
  isCurrentlyWorkingHere: boolean,
  points: string[],
  technologies: reference[]
}
```

#### **🔗 Social** (Social Media Links)
```javascript
{
  title: string,
  url: url
}
```

### **3. Add Content**

1. Open Sanity Studio: http://localhost:3333
2. Add content in each section
3. **IMPORTANT**: Click **"PUBLISH"** (not just "Save")
4. Content will appear on your website within 10 seconds

### **4. Configure CORS**

Allow your Next.js app to access Sanity:
```bash
cd sanity
sanity cors add http://localhost:3000 --credentials
sanity cors add https://yourdomain.com --credentials  # For production
```

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=odgwwaqt
NEXT_PUBLIC_SANITY_DATASET=madhav_portfolio

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note**: Never commit `.env.local` to version control!

---

## 🌐 Deployment

### **Deploy to Vercel (Recommended)**

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables
- Deploy!

3. **Add production CORS**
```bash
cd sanity
sanity cors add https://your-domain.vercel.app --credentials
```

### **Deploy Sanity Studio**

```bash
cd sanity
sanity deploy
```

Your studio will be available at: `https://your-project.sanity.studio`

---

## 🔌 API Routes

The project includes RESTful API endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/getPageInfo` | GET | Fetch personal information |
| `/api/getSkills` | GET | Fetch all skills |
| `/api/getProjects` | GET | Fetch all projects |
| `/api/getExperience` | GET | Fetch work experience |
| `/api/getSocials` | GET | Fetch social media links |

**Example Response:**
```json
{
  "pageInfo": {
    "_id": "...",
    "name": "Madhav Karyampudi",
    "role": "MERN Developer",
    "email": "your@email.com"
  }
}
```

---

## 🎨 Customization

### **Colors**

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      darkGreen: "#68B2A0",
      lightGreen: "#CDE7BE",
      lightBackground: "#F7F9FB",
      darkBlack: "#2F2D2E",
    },
  },
}
```

### **Fonts**

Update `styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### **Animations**

Modify Framer Motion variants in components:
```typescript
initial={{ opacity: 0, y: -100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2 }}
```

---

## ⚡ Performance

### **Optimization Features**
- ✅ Image optimization via Next.js Image component
- ✅ Lazy loading for images and components
- ✅ Static generation with ISR (10s revalidation)
- ✅ Code splitting and dynamic imports
- ✅ Minified CSS and JavaScript
- ✅ CDN delivery via Vercel/Sanity

### **Lighthouse Score**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## 🐛 Troubleshooting

### **Content not showing**
1. Make sure you clicked **"PUBLISH"** in Sanity Studio (not just "Save")
2. Wait 10 seconds for revalidation
3. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check API endpoints: http://localhost:3000/api/getPageInfo

### **Images not loading**
1. Verify images are uploaded in Sanity
2. Check CORS configuration: `sanity cors list`
3. Ensure project ID and dataset match in `.env.local`

### **Sanity Studio not starting**
```bash
cd sanity
rm -rf node_modules
npm install
npm start
```

### **Dataset mismatch**
Run the test script to check which dataset has data:
```bash
node check-datasets.js
```

### **Build errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📚 Additional Documentation

- [SANITY_SETUP_GUIDE.md](./SANITY_SETUP_GUIDE.md) - Complete Sanity setup guide
- [SANITY_TROUBLESHOOTING.md](./SANITY_TROUBLESHOOTING.md) - Troubleshooting checklist
- [SANITY_QUERIES.md](./SANITY_QUERIES.md) - GROQ query reference

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Madhav Karyampudi**
- Email: karyampudimadhav@gmail.com
- Phone: +91 7416718982
- LinkedIn: [madhav-karyampudi](https://www.linkedin.com/in/madhav-karyampudi)
- GitHub: [@madhavkaryampudi](https://github.com/madhavkaryampudi)

---

## 🌟 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/MitchellSparrow/portfolioWebsite?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/MitchellSparrow/portfolioWebsite?style=flat-square)
![GitHub](https://img.shields.io/github/license/MitchellSparrow/portfolioWebsite?style=flat-square)

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Sanity Studio
cd sanity && npm start

# Deploy Sanity Studio
cd sanity && sanity deploy

# Test Sanity connection
node check-datasets.js
```

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via email: karyampudimadhav@gmail.com

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Madhav Karyampudi

</div>

---

# Next JS:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the code

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Vercel:

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Sanity:

To just run sanity:

```
cd sanity
sanity start
```

To deploy sanity:

```
sanity deploy
```
