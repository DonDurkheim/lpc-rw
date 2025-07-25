'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'Notre Histoire' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+250 792 577 485' },
    { icon: MapPin, text: 'Kigali, Rwanda' },
    { icon: Clock, text: 'Mar-Dim 11h-23h' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all-smooth ${
          isScrolled
            ? 'glass-dark py-2'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center">
                <span className="text-2xl font-script gradient-text">LC</span>
              </div>
              <div>
                <h1 className="text-2xl font-script gradient-text">
                  Le Petit Chalet
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">
                  Restaurant Français Authentique
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative text-white/80 hover:text-white transition-all-smooth font-medium"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden xl:flex items-center space-x-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <info.icon className="w-4 h-4 text-yellow-400" />
                  <span>{info.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Reservation Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="hidden md:block"
            >
              <Button
                className="btn-glass hover-lift px-6 py-2 rounded-full font-medium"
                onClick={() => window.open('mailto:lepetitchalet.rw@gmail.com')}
              >
                Réserver
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass hover-lift"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-80 h-screen glass-dark z-40 lg:hidden"
          >
            <div className="p-8 pt-20">
              {/* Mobile Navigation Links */}
              <div className="space-y-6 mb-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <info.icon className="w-5 h-5 text-yellow-400" />
                    <span>{info.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Reservation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  className="w-full btn-glass hover-lift py-3 rounded-full font-medium"
                  onClick={() => {
                    window.open('mailto:lepetitchalet.rw@gmail.com');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Réserver une Table
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
