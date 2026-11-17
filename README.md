### Lintech Telecom Website

A modern, responsive telecom and technology company website built with React, Vite, and Tailwind CSS. The platform showcases Lintech Telecom’s internet services, WiFi & networking solutions, CCTV installation, cybersecurity, software development, website development, and AI automation services.

The website is designed with a premium modern UI, smooth scrolling navigation, strong visual hierarchy, responsive layouts, and conversion-focused sections for customer inquiries and service requests.

# Features
Modern responsive homepage
Smooth scrolling single-page navigation
Premium telecom-inspired UI design
Animated hero section with rotating text
Internet package showcase
WiFi, CCTV & networking services section
Router sales & configuration section
Tech services showcase
Coverage areas section
About company section
Contact & WhatsApp CTA sections
Floating WhatsApp support button
Mobile-friendly responsive navbar
Service dropdown navigation
Reusable Tailwind utility styling
Premium shadows, gradients, and transitions

# Tech Stack
React
Vite
Tailwind CSS
React Router DOM
Font Awesome Icons

# Project structure

src/
│
├── assets/
│   ├── logo.png
│   ├── whatsapp.png
│   ├── student browsing with laptop and router.png
│   ├── router image.png
│   └── laptop-plus-router.png
│
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
        About.jsx
        Contact.jsx
        Coverage.jsx
        Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## Design System
Primary Colors
Color Hex
Deep Navy #0B1C4D
Orange Accent #FF7A00
Light Blue Background #F5F8FF
White #FFFFFF
  Main Sections
Hero Section

Dynamic animated hero area introducing Lintech Telecom services with strong CTAs.

Services Section

Highlights:

Internet Services
WiFi & Networking
CCTV Installation
Tech & Digital Services
Internet Packages

Displays internet plans for:

Home users
Families
Businesses
Networking & CCTV

Professional installation services including:

WiFi setup
Router configuration
Network cabling
CCTV installation
Troubleshooting
Tech Services

Digital solutions including:

Website development
Custom software systems
Cybersecurity
AI automation
Coverage Areas

Displays supported Nairobi and Kiambu locations.

Contact Section

Integrated:

Call buttons
WhatsApp support
Service inquiry prompts

## Installation

Clone the repository:

git clone https://github.com/your-username/lintech-telecom.git

Move into the project folder:

cd lintech-telecom

Install dependencies:

npm install

Start the development server:

npm run dev
 Build for Production
npm run build

Preview production build:

npm run preview

Deployment 
Vercel

### Google Search Console and SEO

Google Tag Manager container `GTM-K2VL5XDD` is installed once, directly after
the opening `<head>` in `index.html`. Configure the Google Analytics tag inside
this container and publish it in Tag Manager to activate Analytics. The previous
`VITE_GA_MEASUREMENT_ID` configuration is no longer used; manage tracking through
Tag Manager to avoid duplicate Analytics installations. After deploying the site,
use Tag Assistant to check the container and configured tags. The HTML file
verification method below remains available independently of Analytics.

The Google verification file is kept at `public/google70f4978ad4dafef2.html`.
Vite copies it unchanged into `dist/` during `npm run build`, making it available
at `https://lintechtelecom.com/google70f4978ad4dafef2.html` after deployment.
Keep this public file permanently, including after verification succeeds.

After deploying to Vercel, open the verification URL and confirm that it returns
`google-site-verification: google70f4978ad4dafef2.html`, then click **Verify** in
Google Search Console. Submit `https://lintechtelecom.com/sitemap.xml` in the
Search Console Sitemaps section. The sitemap lists the site's single page;
update it when adding new page routes.

Navigation IDs

The website uses smooth scrolling with section IDs:

#home
#services
#internet
#wifi-networking
#router-setup
#tech-services
#coverage
#about
#contact
 WhatsApp Integration

The website includes direct WhatsApp customer support integration using:

https://wa.me/

Used for:

Service inquiries
Coverage confirmation
Installation requests
Customer support
 Assets Used

The project uses custom telecom and networking imagery including:

Internet setup illustrations
Router product visuals
Technology service images
Company branding assets
 Responsive Design

Optimized for:

Mobile devices
Tablets
Laptops
Large desktop screens
 Services Offered

Lintech Telecom provides:

Fiber Internet
WiFi Installation
CCTV Installation
Network Cabling
Router Configuration
Website Development
Software Development
Cybersecurity
AI Automation
 Coverage Areas

Main supported areas include:

Kahawa Sukari
Kahawa Wendani
Ruiru
Kasarani
Roysambu
Kimbo
Juja
Kenyatta Road
Thika
✨ UI Highlights
Glassmorphism navbar
Soft shadows
Orange accent highlights
Smooth hover animations
Premium card layouts
Responsive grid system
Gradient hero backgrounds
Floating WhatsApp action button

 ## License

This project is licensed under the MIT License.

👨 Developer

Developed for Lintech Telecom.

Internet • Networking • CCTV • Digital Solutions • AI Automation
