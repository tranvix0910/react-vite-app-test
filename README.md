# Professional React Blog

A modern, responsive blog application built with React, Vite, and Tailwind CSS. This professional blog platform features a clean design, smooth animations, and comprehensive functionality for content creation and management.

## 🚀 Features

### ✨ **Modern Design**
- **Responsive Layout** - Mobile-first design that works on all devices
- **Beautiful UI** - Professional design with custom color schemes
- **Smooth Animations** - Framer Motion animations throughout the app
- **Custom Typography** - Google Fonts integration (Inter & Playfair Display)

### 📝 **Content Management**
- **Rich Blog Posts** - Full-featured blog post creation and viewing
- **Category System** - Organize posts by categories (Technology, Development, Design, etc.)
- **Tag Support** - Tag posts for better organization and discovery
- **Featured Posts** - Highlight important content
- **Search Functionality** - Search through articles
- **Image Support** - Featured images for posts

### 🧭 **Navigation & Pages**
- **Home Page** - Featured posts, statistics, and newsletter signup
- **Blog Post Page** - Individual post viewing with comments section
- **About Page** - Team information and company mission
- **Contact Page** - Contact form and company information
- **Create Post Page** - Rich editor for creating new blog posts

### 🎨 **User Experience**
- **Newsletter Subscription** - Email newsletter signup
- **Social Media Integration** - Social media links and sharing
- **Interactive Elements** - Like buttons, share functionality
- **Loading States** - Smooth loading animations
- **Mobile Menu** - Responsive navigation for mobile devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 7.0.0
- **Styling:** Tailwind CSS 3.4.15
- **Routing:** React Router DOM 6.28.0
- **Animations:** Framer Motion 11.15.0
- **Icons:** Lucide React 0.453.0
- **Date Handling:** date-fns 4.1.0
- **Utilities:** clsx 2.1.1
- **Development:** ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive navigation component
│   └── Footer.jsx          # Footer with links and newsletter
├── pages/
│   ├── Home.jsx            # Landing page with featured posts
│   ├── BlogPost.jsx        # Individual blog post view
│   ├── About.jsx           # About page with team info
│   ├── Contact.jsx         # Contact form and information
│   └── CreatePost.jsx      # Blog post creation editor
├── App.jsx                 # Main app with routing
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-vite-app-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary Colors:** Blue tones (50-900)
- **Gray Colors:** Neutral tones (50-900)
- **Accent Colors:** Yellow and orange gradients

### Fonts

- **Sans-serif:** Inter (for body text)
- **Serif:** Playfair Display (for headings)

### Animations

Custom animations defined in Tailwind config:
- `fade-in` - Smooth fade in effect
- `slide-up` - Slide up animation
- `slide-in` - Slide in from left

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration

## 🌟 Key Components

### Navbar
- Responsive navigation with mobile menu
- Active link highlighting
- Smooth animations with Framer Motion

### Home Page
- Hero section with call-to-action
- Featured posts grid
- Statistics display
- Category filtering
- Newsletter subscription

### Blog Post
- Rich content display
- Author and publication info
- Like and share functionality
- Related posts section
- Comments section placeholder

### Create Post
- Rich text editor
- Image upload support
- Category and tag selection
- Live preview mode
- Publishing options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**tranvix0910**
- GitHub: [@tranvix0910](https://github.com/tranvix0910)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Stock photos used in demo

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
