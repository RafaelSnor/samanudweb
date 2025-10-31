# Legal Excellence - Law Firm Website

A modern, professional website for a law firm built with **Next.js** and optimized for **Vercel**. Features a clean design with discrete colors and contemporary layout.

## 🎯 Features

- **Modern Design**: Clean, professional interface with discrete color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multiple Pages**: Comprehensive site structure with dedicated pages for services, team, cases, blog, and contact
- **Modular Architecture**: Well-organized codebase with separated CSS modules
- **Smooth Animations**: Intersection Observer animations for engaging user experience
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📁 Project Structure

```
samanudweb/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── about/
│   │   └── page.tsx         # About us page
│   ├── team/
│   │   └── page.tsx         # Team page
│   ├── cases/
│   │   └── page.tsx         # Case studies page
│   ├── blog/
│   │   └── page.tsx         # Legal blog page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── assets/
│   ├── css/                 # CSS modules (imported in globals.css)
│   ├── js/                  # Legacy JS (not used in Next.js)
│   └── images/              # Image assets
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#1a2332` - Headers and primary text
- **Primary**: `#2d3e50` - Secondary elements
- **Secondary**: `#5a7a9e` - Accent color for CTAs
- **Accent**: `#7a9bc4` - Interactive elements
- **Neutral Grays**: Subtle grays for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the deployment

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📄 Pages

### Homepage (`index.html`)
- Hero section with call-to-action
- Services overview
- About section
- Team preview
- Contact section

### Services (`pages/services.html`)
- Detailed service offerings
- Practice areas with descriptions
- Call-to-action sections

### About (`pages/about.html`)
- Firm history and values
- Statistics and achievements
- Company values

### Team (`pages/team.html`)
- Partner profiles
- Associate attorneys
- Contact information for team members

### Cases (`pages/cases.html`)
- Case study showcase
- Success stories across practice areas
- Notable victories

### Blog (`pages/blog.html`)
- Legal insights and updates
- Articles by practice area
- Latest legal news

### Contact (`pages/contact.html`)
- Contact form
- Office information
- Map placeholder

## 🔧 Customization

### Colors
Edit `app/globals.css` to customize the color scheme (CSS variables section):

```css
:root {
    --primary-dark: #1a2332;
    --secondary: #5a7a9e;
    /* ... other variables */
}
```

### Content
- Update text content in React components (`app/**/page.tsx`)
- Replace placeholder images in image containers
- Modify service offerings and team member information in respective page components

### Form Handling
The contact form uses React state. To enable server-side form submission:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form handler in `app/contact/page.tsx`
3. Add form submission logic with fetch to your API endpoint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta descriptions for each page
- Proper heading hierarchy
- Alt text placeholders for images
- Clean URL structure

## 📝 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🛠️ Future Enhancements

- [ ] Add actual images/photos
- [ ] Integrate Google Maps for contact page
- [ ] Set up form backend integration
- [ ] Add blog post detail pages
- [ ] Implement search functionality
- [ ] Add multilingual support
- [ ] Performance optimization
- [ ] Accessibility improvements (WCAG compliance)

## 📞 Support

For questions or issues, please contact the development team.

---

**Built with**: Next.js 16, React 19, TypeScript, CSS3  
**Framework**: Next.js App Router  
**Deployment**: Optimized for Vercel  
**Design**: Modern, Professional, Discrete Color Scheme  
**Last Updated**: 2024

