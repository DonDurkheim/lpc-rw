'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Star, Heart, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingItems = [
    { icon: ChefHat, position: 'top-20 left-20', delay: 0 },
    { icon: Star, position: 'top-40 right-32', delay: 2 },
    { icon: Heart, position: 'bottom-40 left-32', delay: 4 },
    { icon: Utensils, position: 'bottom-20 right-20', delay: 1 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ext.same-assets.com/3080284326/633436470.jpeg"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Icons */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 1 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full glass-gold flex items-center justify-center"
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-gold mb-4 mt-14">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium ">
              Thanksgiving Américain Traditionnel - 28 Nov
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-script gradient-text leading-tight">
            Le Petit Chalet
          </h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-white/90 leading-relaxed">
            Une Expérience Culinaire
            <br />
            <span className="gradient-text">Authentiquement Française</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les saveurs authentiques de la France dans un cadre chaleureux et élégant.
            Chaque plat raconte une histoire, chaque bouchée est un voyage culinaire.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="btn-glass hover-lift px-8 py-4 text-lg font-medium rounded-full min-w-[200px]"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Utensils className="w-5 h-5 mr-2" />
            Découvrir le Menu
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-yellow-400/50 text-white hover:bg-yellow-400/20 px-8 py-4 text-lg font-medium rounded-full min-w-[200px]"
            onClick={() => window.open('tel:+250792577485')}
          >
            Réserver une Table
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '15+', label: 'Années d\'Excellence' },
            { number: '200+', label: 'Plats Authentiques' },
            { number: '5000+', label: 'Clients Satisfaits' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="glass-dark rounded-2xl p-6 hover-lift">
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-transparent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
