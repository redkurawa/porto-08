# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases frontend development skills, projects, and professional experience.

## 📋 Description

This is a personal portfolio website for Adi, a Frontend Developer. The website features:

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Interactive Features**: Contact form with email functionality
- **Project Showcase**: Portfolio section displaying selected work
- **Performance Optimized**: Built with Next.js for fast loading and SEO

### Key Features

- 🎨 Modern, minimalist design with animated elements
- 📱 Fully responsive design
- 🚀 Fast performance with Next.js optimization
- 📧 Contact form with Resend integration
- 🎯 Skills and services showcase
- 📋 FAQ section
- 📊 Working process timeline
- 💬 Testimonials section

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.5.12
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email Service**: Resend
- **Animation**: Framer Motion
- **Linting**: ESLint
- **Code Formatting**: Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/redkurawa/porto-08.git
cd porto-08
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Resend API key:

```
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open your browser and navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Go to [Vercel](https://vercel.com) and connect your Git repository
3. Vercel will automatically detect it's a Next.js project and configure the build settings
4. Set your environment variables in the Vercel dashboard
5. Deploy!

### Other Platforms

You can also deploy to other platforms like:

- **Netlify**: Use the build command `npm run build` and output directory `out`
- **AWS Amplify**: Configure with Node.js environment
- **Docker**: Build and deploy as a container

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── log/           # Logging endpoint
│   │   └── send/          # Email sending endpoint
│   ├── components/        # React components
│   │   ├── layouts/       # Layout components
│   │   ├── partials/      # Page section components
│   │   └── ui/           # Reusable UI components
│   └── page.tsx          # Main page component
├── components/           # Shared components
├── lib/                  # Utility functions
└── types/               # TypeScript type definitions
```

## 🎨 Customization

### Changing Content

- **Hero Section**: Edit `src/components/partials/hero.tsx`
- **Services**: Modify `src/components/partials/services.tsx`
- **Portfolio**: Update `src/components/partials/portofolio.tsx`
- **Contact**: Configure in `src/components/partials/contact.tsx`

### Styling

- Main styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes directly in components

### Adding Projects

To add new portfolio projects:

1. Add project images to `public/images/`
2. Update the portfolio component in `src/components/partials/portofolio.tsx`
3. Modify the image array to include your new project

## 🔧 Environment Variables

Required environment variables for the contact form:

- `RESEND_API_KEY` - Your Resend API key for sending emails

Optional environment variables:

- `NODE_ENV` - Set to 'production' for production builds

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For any questions or inquiries, you can reach out through the contact form on the website or connect via:

- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email Address]

---

**Built with ❤️ using Next.js and TypeScript**
