'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Heart, Instagram, Facebook, ChefHat } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'Notre Histoire' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+250 792 577 485', action: 'tel:+250792577485' },
    { icon: Mail, text: 'lepetitchalet.rw@gmail.com', action: 'mailto:lepetitchalet.rw@gmail.com' },
    { icon: MapPin, text: 'Kigali, Rwanda', action: 'https://maps.google.com/search/kigali+restaurant' },
    { icon: Clock, text: 'Mar-Dim: 11h00-23h00', action: null },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.facebook.com/LePetitChaletRwanda/',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/lepetitchalet_rwanda',
      label: 'Instagram'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-script gradient-text">Le Petit Chalet</h3>
                <p className="text-xs text-gray-400">Authentiquement Français</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Depuis 2009, nous apportons l'authenticité de la gastronomie française
              au cœur de Kigali, créant des expériences culinaires inoubliables.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-display font-semibold text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-display font-semibold text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`flex items-center space-x-3 text-sm ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-gray-400 hover:text-white transition-colors">
                      {info.text}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-display font-semibold text-white mb-6">
              Événements Spéciaux
            </h4>

            <div className="space-y-4">
              <div className="glass-gold rounded-xl p-4">
                <h5 className="text-white font-medium mb-2">Thanksgiving Américain</h5>
                <p className="text-sm text-gray-200 mb-2">28 Novembre 2024</p>
                <p className="text-xs text-gray-300">Menu traditionnel américain</p>
              </div>

              <div className="glass rounded-xl p-4">
                <h5 className="text-white font-medium mb-2">Dîner Romance</h5>
                <p className="text-sm text-yellow-400 mb-2">Tous les vendredis</p>
                <p className="text-xs text-gray-400">Ambiance musicale live</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2025 Le Petit Chalet - Tous droits réservés</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>à Kigali, Rwanda</span>
            </div>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-gold flex items-center justify-center z-50 hover-lift"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChefHat className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
