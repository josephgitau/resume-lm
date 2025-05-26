<div align="center">

# 🚀 ResumeLM - AI-Powered Resume Builder

**Create professional, ATS-optimized resumes with the power of AI**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-resumelm.com-blue?style=for-the-badge)](https://resumelm.com)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/agpl-3.0)
[![Built with Next.js](https://img.shields.io/badge/Built_with-Next.js_15-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Key Features](#-key-features)
- [🎯 Why ResumeLM?](#-why-resumelm)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📊 Database Setup](#-database-setup)
- [🎨 Design Philosophy](#-design-philosophy)
- [🧪 Testing](#-testing)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Overview

ResumeLM is an intelligent, open-source resume builder that leverages AI to help you create compelling, tailored resumes for specific job applications. With a modern, intuitive interface and powerful AI integration, it streamlines the resume creation process while ensuring professional quality output.

> 🚧 **Currently in active development** - New features being added regularly!

### 🎯 Try It Now
**Live Demo**: [Talantalm.com](https://resume-lm-weld.vercel.app/)

![Dashboard Preview](public/images/ss1.webp)

## 🌟 Key Features

### 📝 Intelligent Resume Management
- **Two-Tier System**: Create base templates and AI-tailored versions for specific jobs
- **Comprehensive Sections**: Work experience, education, projects, skills, and more
- **Smart Scoring**: Built-in resume effectiveness measurement
- **Organization Tools**: Sort, filter, and manage multiple resumes effortlessly

### 🤖 Advanced AI Integration
- **Multi-Model Support**: OpenAI, Claude, Gemini, DeepSeek, and Groq
- **Content Optimization**: Real-time suggestions and improvements
- **Job Analysis**: Intelligent parsing of job descriptions for targeted tailoring
- **Interactive Assistant**: AI-powered guidance throughout the writing process

![AI Assistant](public/images/ss4.webp)

### 💼 Professional Features
- **Cover Letter Generation**: AI-assisted cover letters synchronized with resume data
- **PDF Export**: High-quality, ATS-friendly PDF generation
- **Profile Management**: Centralized storage of your professional information
- **Subscription Tiers**: Free and Pro plans with Stripe integration

### 🔒 Enterprise-Grade Security
- **Row Level Security (RLS)**: Database-level data protection
- **User Authentication**: Secure Supabase Auth integration
- **Data Privacy**: Your information stays protected and private

![Resume Editor](public/images/ss2.webp)

## 🎯 Why ResumeLM?

| Traditional Resume Builders | ResumeLM |
|---------------------------|----------|
| ❌ Generic templates | ✅ AI-powered customization |
| ❌ Manual content creation | ✅ Intelligent content suggestions |
| ❌ One-size-fits-all approach | ✅ Job-specific tailoring |
| ❌ Limited formatting options | ✅ Professional, ATS-optimized designs |
| ❌ Closed-source, expensive | ✅ Open-source, transparent |

## 🛠️ Tech Stack

### Frontend Excellence
- **Next.js 15** - App Router with Server Components
- **React 19** - Latest React features and performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Beautiful, accessible components

### AI & Backend Power
- **Multiple AI Providers** - OpenAI, Claude, Gemini, DeepSeek, Groq
- **PostgreSQL** - Robust, scalable database
- **Prisma ORM** - Type-safe database operations
- **Supabase** - Authentication and real-time features

### Developer Experience
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks for quality control
- **Jest** - Comprehensive testing suite

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Supabase account
- AI provider API keys (OpenAI, Claude, etc.)

### Installation

1. **Clone the repository**
```bash
git https://github.com/josephgitau/resume-lm.git
cd resume-lm
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Environment setup**
```bash
cp .env.example .env.local
```

4. **Configure your environment variables**
```env
# Database
DATABASE_URL=your_supabase_db_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Providers
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_claude_key
# ... additional provider keys
```

5. **Set up the database** (see [Database Setup](#-database-setup))

6. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application running!

## 📊 Database Setup

### Quick Setup via Supabase Dashboard

1. Create a new Supabase project
2. Navigate to SQL Editor in your dashboard
3. Copy and execute the schema from `schema.sql`

### CLI Setup (Advanced)

```bash
# Install Supabase CLI
npm install -g @supabase/cli

# Push schema to your database
supabase db push --db-url=your_supabase_db_url schema.sql
```

### Core Tables
- **profiles** - User profile and professional information
- **resumes** - Resume content and metadata
- **jobs** - Job descriptions for tailoring
- **subscriptions** - User subscription management

## 🎨 Design Philosophy

### Core Principles

**🎯 Minimalist Elegance**
- Clean, distraction-free interface
- Purposeful use of white space
- Focus on content over decoration

**🌊 Layered Depth**
- Subtle shadows and transparency
- Visual hierarchy through elevation
- Smooth, organic animations

**📱 Mobile-First Responsive**
- Optimized for all screen sizes
- Touch-friendly interactions
- Consistent experience across devices

**♿ Accessibility First**
- WCAG 2.1 compliant components
- Keyboard navigation support
- Screen reader optimization

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

## 🗺️ Roadmap

### 🚀 Current Sprint
- [ ] Enhanced AI tailoring algorithms
- [ ] Additional resume templates
- [ ] Advanced PDF customization options

### 🔮 Future Features
- [ ] Job application tracking system
- [ ] Analytics and insights dashboard
- [ ] Team collaboration features
- [ ] API for third-party integrations
- [ ] Mobile app development

### 📈 Performance Goals
- [ ] Sub-2s page load times
- [ ] 95+ Lighthouse scores
- [ ] Enhanced SEO optimization

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how to get started:

### Quick Contribution Guide

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our coding standards
4. **Write tests** for new functionality
5. **Submit a pull request** with a clear description

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Update documentation for new features
- Ensure all tests pass before submitting

**Read our full [Contributing Guide](CONTRIBUTING.md) for detailed information.**

## 📄 License

**GNU Affero General Public License v3 (AGPL-3.0)**

### What this means:

✅ **You CAN:**
- View, use, and modify the code
- Distribute the code and your modifications
- Use it for personal and commercial purposes

❌ **You CANNOT:**
- Use this code in closed-source commercial applications
- Provide a similar service without open-sourcing your code

🔒 **You MUST:**
- Keep the source code open source
- License any modifications under AGPL-3.0
- Provide source code to users of your service

[📋 Read the full license](LICENSE) for complete terms.

---

<div align="center">

**Built with ❤️ by the open-source community**

[🌟 Star us on GitHub](https://github.com/josephgitau/resume-lm) • [🐛 Report Issues](https://github.com/josephgitau/resume-lm/issues) • [💬 Join Discussions](https://github.com/josephgitau/resume-lm/discussions)

</div>