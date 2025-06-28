import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, Mail } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, label: "Active Readers", value: "10,000+", description: "Monthly active community members" },
    { icon: Target, label: "Articles Published", value: "150+", description: "High-quality tutorials and insights" },
    { icon: Award, label: "Years Experience", value: "5+", description: "Collective industry experience" },
    { icon: Heart, label: "Community Love", value: "98%", description: "Reader satisfaction rate" }
  ]

  const values = [
    {
      title: "Quality Content",
      description: "We believe in creating in-depth, well-researched content that provides real value to our readers.",
      icon: Target
    },
    {
      title: "Community First",
      description: "Our community is at the heart of everything we do. We listen, engage, and grow together.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and we're committed to staying current and sharing the latest insights.",
      icon: Award
    },
    {
      title: "Open Source",
      description: "We contribute to and support the open-source community that has given us so much.",
      icon: Heart
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              About Our
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Professional Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate developers, designers, and writers dedicated to sharing knowledge 
              and building a stronger tech community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To democratize access to high-quality technical knowledge and create a platform where 
              developers of all levels can learn, grow, and share their expertise. We believe that 
              knowledge shared is knowledge multiplied.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white rounded-lg p-6 shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we interact with our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Want to contribute to our blog or collaborate with our team? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@professionalblog.com"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 