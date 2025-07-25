'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Heart, Clock, ChefHat, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      icon: Award,
      title: '15 Années',
      subtitle: 'd\'Excellence Culinaire',
      description: 'Une tradition de qualité depuis 2009'
    },
    {
      icon: Users,
      title: '5000+',
      subtitle: 'Clients Satisfaits',
      description: 'Une communauté fidèle et grandissante'
    },
    {
      icon: Heart,
      title: '100%',
      subtitle: 'Ingrédients Authentiques',
      description: 'Importés directement de France'
    },
    {
      icon: ChefHat,
      title: '3 Chefs',
      subtitle: 'Formés en France',
      description: 'Expertise culinaire authentique'
    }
  ];

  const story = [
    {
      year: '2009',
      title: 'Les Débuts',
      description: 'Ouverture du premier restaurant français authentique à Kigali',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500'
    },
    {
      year: '2015',
      title: 'Reconnaissance',
      description: 'Prix du "Meilleur Restaurant Français" en Afrique de l\'Est',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Introduction de la carte végétarienne française',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500'
    },
    {
      year: '2024',
      title: 'Aujourd\'hui',
      description: 'Référence incontournable de la gastronomie française au Rwanda',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500'
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-pattern opacity-20" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-script gradient-text mb-4">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Depuis 2009, Le Petit Chalet apporte l'authenticité de la gastronomie française
            au cœur de Kigali, créant des souvenirs inoubliables à chaque repas.
          </p>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-3xl font-display font-semibold text-white mb-6">
                Une Passion <span className="gradient-text">Française</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Notre aventure a commencé avec un rêve simple : partager l'art de vivre français
                et la richesse de sa gastronomie avec la communauté rwandaise. Chaque plat est
                préparé avec amour, respect des traditions et les meilleurs ingrédients.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                De nos escargots de Bourgogne à notre célèbre coq au vin, nous perpétuons
                les recettes authentiques transmises de génération en génération.
              </p>

              {/* Chef Profile */}
              <div className="flex items-center space-x-4 p-4 glass rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Chef Pierre Laurent</h4>
                  <p className="text-gray-400 text-sm">Formé à l'École Culinaire de Paris</p>
                  <p className="text-yellow-400 text-sm">15 ans d'expérience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              style={{ y: parallaxY2 }}
              className="relative h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden glass-dark"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600"
                alt="Chef at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-gold rounded-2xl p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">200+</div>
                      <div className="text-xs opacity-80">Recettes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">15</div>
                      <div className="text-xs opacity-80">Années</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-xs opacity-80">Chefs</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass-dark border-0 p-6 text-center hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-1">
                  {achievement.title}
                </h3>
                <h4 className="text-white font-medium mb-2">
                  {achievement.subtitle}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-display font-semibold text-center text-white mb-12">
            Notre <span className="gradient-text">Évolution</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 hidden lg:block" />

            <div className="space-y-12">
              {story.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <Card className="glass-dark border-0 p-6 hover-lift">
                      <div className="text-3xl font-bold gradient-text mb-2">{item.year}</div>
                      <h4 className="text-xl font-display font-semibold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full glass-gold items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-yellow-400" />
                  </div>

                  {/* Image */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="relative h-64 rounded-2xl overflow-hidden glass">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="glass-dark border-0 p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-display font-semibold text-white">
                    Visitez-nous
                  </h4>
                  <p className="text-gray-400">
                    Kigali, Rwanda<br />
                    Tous les jours de 11h à 23h
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center">
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-display font-semibold text-white">
                    Horaires
                  </h4>
                  <p className="text-gray-400">
                    Lun-Dim: 11h00 - 23h00<br />
                    Service continu
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
