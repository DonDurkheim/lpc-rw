'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Wine, Utensils, Cake, Star, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  specialty?: boolean;
  time?: string;
}

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('entrees');

  const categories = [
    { id: 'entrees', label: 'Entrées', icon: Utensils },
    { id: 'plats', label: 'Plats Principaux', icon: Wine },
    { id: 'desserts', label: 'Desserts', icon: Cake },
    { id: 'boissons', label: 'Boissons', icon: Coffee },
  ];

  const menuItems: Record<string, MenuItem[]> = {
    entrees: [
      {
        name: 'Escargots de Bourgogne',
        description: 'Six escargots traditionnels au beurre à l\'ail et aux herbes fraîches',
        price: '12,000 RWF',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
        specialty: true,
        time: '15 min'
      },
      {
        name: 'Foie Gras Poêlé',
        description: 'Foie gras poêlé servi avec une compotée de figues et pain brioché',
        price: '18,000 RWF',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
        specialty: true,
        time: '12 min'
      },
      {
        name: 'Soupe à l\'Oignon',
        description: 'Soupe à l\'oignon gratinée au fromage Gruyère',
        price: '8,500 RWF',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400',
        time: '20 min'
      },
      {
        name: 'Salade Niçoise',
        description: 'Salade fraîche aux légumes méditerranéens, thon et œufs',
        price: '10,000 RWF',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
        time: '10 min'
      }
    ],
    plats: [
      {
        name: 'Coq au Vin',
        description: 'Coq mijoté au vin rouge avec champignons et petits oignons',
        price: '22,000 RWF',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        specialty: true,
        time: '35 min'
      },
      {
        name: 'Bouillabaisse Marseillaise',
        description: 'Soupe de poisson traditionnelle avec rouille et croûtons',
        price: '28,000 RWF',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
        specialty: true,
        time: '40 min'
      },
      {
        name: 'Bœuf Bourguignon',
        description: 'Bœuf braisé au vin rouge avec légumes de saison',
        price: '25,000 RWF',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400',
        time: '45 min'
      },
      {
        name: 'Ratatouille Provençale',
        description: 'Légumes méditerranéens mijotés aux herbes de Provence',
        price: '16,000 RWF',
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400',
        time: '25 min'
      }
    ],
    desserts: [
      {
        name: 'Crème Brûlée Vanille',
        description: 'Crème onctueuse à la vanille avec sucre caramélisé',
        price: '8,000 RWF',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
        specialty: true,
        time: '5 min'
      },
      {
        name: 'Tarte Tatin',
        description: 'Tarte aux pommes caramélisées servie tiède',
        price: '9,500 RWF',
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400',
        time: '15 min'
      },
      {
        name: 'Mousse au Chocolat',
        description: 'Mousse légère au chocolat noir 70%',
        price: '7,500 RWF',
        image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400',
        time: '5 min'
      },
      {
        name: 'Profiteroles',
        description: 'Choux à la crème vanille nappés de chocolat chaud',
        price: '10,000 RWF',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
        time: '10 min'
      }
    ],
    boissons: [
      {
        name: 'Vin Rouge Bordeaux',
        description: 'Sélection de vins rouges français premium',
        price: '35,000 RWF',
        image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400',
        specialty: true
      },
      {
        name: 'Champagne Brut',
        description: 'Champagne français pour les occasions spéciales',
        price: '45,000 RWF',
        image: 'https://images.unsplash.com/photo-1549301415-7c71033e9362?w=400',
        specialty: true
      },
      {
        name: 'Café Français',
        description: 'Café espresso authentique servi à la française',
        price: '3,500 RWF',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
      },
      {
        name: 'Tisane aux Herbes',
        description: 'Sélection de tisanes françaises traditionnelles',
        price: '2,500 RWF',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'
      }
    ]
  };

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
    <section id="menu" className="py-20 relative bg-gradient-to-b from-black/50 to-black/70">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-script gradient-text mb-4">
            Notre Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre sélection de plats authentiques, préparés avec passion
            et les meilleurs ingrédients français.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all-smooth ${
                activeCategory === category.id
                  ? 'glass-gold text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-dark border-0 overflow-hidden hover-lift h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Specialty Badge */}
                    {item.specialty && (
                      <div className="absolute top-3 left-3">
                        <div className="glass-gold rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs font-medium text-white">Spécialité</span>
                        </div>
                      </div>
                    )}

                    {/* Time Badge */}
                    {item.time && (
                      <div className="absolute top-3 right-3">
                        <div className="glass rounded-full px-3 py-1 flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-300" />
                          <span className="text-xs font-medium text-white">{item.time}</span>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">
                        {item.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full glass-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Utensils className="w-5 h-5 text-yellow-400" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-white mb-4">
              Menu Complet Disponible
            </h3>
            <p className="text-gray-400 mb-6">
              Découvrez l'intégralité de notre carte avec plus de 50 plats authentiques
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glass hover-lift px-8 py-3 rounded-full font-medium"
              onClick={() => window.open('mailto:lepetitchalet.rw@gmail.com')}
            >
              Demander le Menu Complet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
