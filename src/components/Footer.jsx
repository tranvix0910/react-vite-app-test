import { Link } from 'react-router-dom'
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/tranvix0910', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tranvix0910/', icon: Linkedin },
    { name: 'Email', href: 'mailto:tranvix.work@gmail.com', icon: Mail },
  ]

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Write', href: '/create' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Technology', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Design', href: '#' },
        { name: 'Business', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Professional Blog
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A modern platform for sharing knowledge, insights, and stories. 
              Join our community of writers and readers passionate about technology, 
              development, and innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h3 className="text-white font-semibold mb-2">
                Stay updated with our latest posts
              </h3>
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                Get the best content delivered straight to your inbox.
              </p>
            </div>
            <div className="md:flex-1 md:max-w-md md:ml-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Professional Blog. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>by</span>
            <a 
              href="https://github.com/tranvix0910" 
              className="ml-1 text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              tranvix0910
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 