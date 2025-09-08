# ShopSo Website

A modern, high-performance Next.js website for ShopSo - the comprehensive Shopify analytics and integration platform that helps e-commerce businesses track performance, optimize marketing spend, and grow profitably.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS
- **Performance Optimized**: Advanced SEO, Core Web Vitals optimization, and lazy loading
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Dark/Light Mode**: Theme switching with next-themes
- **Advanced SEO**: Structured data, meta tags, sitemaps, and technical SEO optimizations
- **Analytics Integration**: Vercel Analytics and performance monitoring
- **Form Handling**: Contact forms with email integration via Nodemailer
- **Component Library**: Radix UI components with custom styling
- **Animation**: Smooth animations with Motion and Lenis
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 15.3.4
- **Runtime**: React 18.3.1
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.0

### UI & Components
- **Component Library**: Radix UI (Accordion, Tabs, Labels, etc.)
- **Icons**: Lucide React, Tabler Icons
- **Animations**: Motion, Lenis smooth scroll
- **Carousel**: React Slick, Swiper

### Backend & Data
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **Email**: Nodemailer with Gmail SMTP
- **File Processing**: XLSX, jsPDF for exports

### Development & Build
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm/yarn
- **Deployment**: Vercel optimized

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
```bash
# Copy the environment template
cp env.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

### 4. Configure Environment Variables

Fill in your `.env.local` file with the following required variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/shopso

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here

# Email Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password-here

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── aboutus/           # About us page
│   │   ├── api/               # API routes
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── industries/        # Industry-specific pages
│   │   ├── products/          # Product pages
│   │   ├── services/          # Service pages
│   │   └── ...
│   ├── components/            # Reusable React components
│   │   ├── Home/             # Homepage components
│   │   ├── common/           # Shared components
│   │   ├── seo/              # SEO optimization components
│   │   └── ui/               # UI library components
│   ├── data/                 # Static data and content
│   ├── lib/                  # Utility functions and configurations
│   └── assets/               # Images and static assets
├── public/                   # Static files
├── docs/                     # Documentation
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Utility
npm run type-check   # Run TypeScript compiler check
```

## 🌐 Environment Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/shopso` |
| `JWT_SECRET` | JWT signing secret | Generate with `openssl rand -base64 32` |
| `GMAIL_USER` | Gmail address for SMTP | `your-email@gmail.com` |
| `GMAIL_PASS` | Gmail App Password | `your-app-password` |
| `NEXT_PUBLIC_APP_URL` | Application base URL | `http://localhost:3000` |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MAIL_FROM` | From email address | Uses `GMAIL_USER` |
| `DEBUG` | Enable debug logging | `false` |
| `NODE_ENV` | Environment mode | `development` |

### Setting up Gmail SMTP

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `GMAIL_PASS`

## 🎨 Customization

### Styling
- **Tailwind CSS**: Modify `tailwind.config.js` for design system changes
- **Components**: Update components in `src/components/ui/` for UI library modifications
- **Themes**: Dark/light mode configuration in `src/app/layout.tsx`

### Content
- **Data**: Update content in `src/data/` files
- **Images**: Add images to `src/assets/` or `public/`
- **SEO**: Modify meta tags and structured data in page components

### Features
- **API Routes**: Add new endpoints in `src/app/api/`
- **Pages**: Create new pages in `src/app/`
- **Components**: Add reusable components in `src/components/`

## 🔍 SEO Features

This website includes advanced SEO optimizations:

- **Structured Data**: JSON-LD schemas for better search engine understanding
- **Meta Tags**: Dynamic meta tags for each page
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Core Web Vitals**: Performance optimizations for Google's ranking factors
- **Mobile-First**: Responsive design optimized for mobile devices
- **Accessibility**: WCAG compliance and semantic HTML

## 📊 Performance

The website is optimized for performance with:

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting and lazy loading
- **Caching**: Optimized caching headers and strategies
- **Bundle Analysis**: Optimized package imports and tree shaking
- **Critical CSS**: Inline critical CSS for faster rendering

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Environment Variables for Production
Ensure all environment variables are set in your production environment, especially:
- `MONGODB_URI` (use MongoDB Atlas for production)
- `JWT_SECRET` (use a strong, unique secret)
- `NEXT_PUBLIC_APP_URL` (your production domain)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint configuration provided
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions:
- **Email**: support@shopso.com
- **Documentation**: Check the `docs/` directory
- **Issues**: Create an issue in the repository

## 🔄 Changelog

### v0.1.0 (Current)
- Initial website implementation
- Next.js 15 with App Router
- Advanced SEO optimizations
- Performance enhancements
- Mobile-responsive design
- Dark/light mode support

---

**ShopSo** - Empowering Shopify merchants with data-driven insights and seamless integrations.
