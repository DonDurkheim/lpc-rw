'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
      alert('Votre demande de réservation a été envoyée avec succès!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+250 792 577 485', 'Disponible 24h/24'],
      action: () => window.open('tel:+250792577485')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['lepetitchalet.rw@gmail.com', 'Réponse sous 24h'],
      action: () => window.open('mailto:lepetitchalet.rw@gmail.com')
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Kigali, Rwanda', 'Centre-ville'],
      action: () => window.open('https://maps.google.com/search/kigali+restaurant')
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Mar-Dim: 11h00-23h00', 'Fermé le lundi'],
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/LePetitChaletRwanda/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/lepetitchalet_rwanda',
      color: 'hover:text-pink-400'
    }
  ];

  const specialOffers = [
    {
      title: 'Thanksgiving Américain',
      date: '28 Novembre 2024',
      description: 'Menu spécial traditionnel américain',
      highlight: true
    },
    {
      title: 'Dîner Romance',
      date: 'Tous les vendredis',
      description: 'Ambiance romantique avec violoniste'
    },
    {
      title: 'Brunch Dominical',
      date: 'Tous les dimanches',
      description: 'Brunch français traditionnel'
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-black/70 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20" />

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
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Réservez votre table pour une expérience culinaire inoubliable.
            Notre équipe sera ravie de vous accueillir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass-dark border-0 p-8">
              <h3 className="text-3xl font-display font-semibold text-white mb-6">
                Réservation & Contact
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass border-gray-600 text-white placeholder-gray-400"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass border-gray-600 text-white placeholder-gray-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="glass border-gray-600 text-white placeholder-gray-400"
                      placeholder="+250..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Date souhaitée
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="glass border-gray-600 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nombre de personnes
                    </label>
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="1"
                      max="20"
                      className="glass border-gray-600 text-white placeholder-gray-400"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message / Demandes spéciales
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="glass border-gray-600 text-white placeholder-gray-400"
                    placeholder="Allergies, préférences, occasion spéciale..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glass hover-lift py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info & Special Offers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass-dark border-0 p-6">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                Informations
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={info.action || undefined}
                    className={`flex items-start space-x-4 p-4 rounded-xl glass hover-lift ${
                      info.action ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-400 text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="glass-dark border-0 p-6">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                Suivez-nous
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <p className="text-gray-400 text-sm mt-4">
                Découvrez nos dernières créations culinaires et événements spéciaux
              </p>
            </Card>

            {/* Special Offers */}
            <Card className="glass-dark border-0 p-6">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                Événements Spéciaux
              </h3>

              <div className="space-y-4">
                {specialOffers.map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl ${
                      offer.highlight ? 'glass-gold' : 'glass'
                    } hover-lift`}
                  >
                    {offer.highlight && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-medium">SPÉCIAL</span>
                      </div>
                    )}
                    <h4 className="text-white font-semibold mb-1">{offer.title}</h4>
                    <p className="text-yellow-400 text-sm font-medium mb-1">{offer.date}</p>
                    <p className="text-gray-400 text-sm">{offer.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="glass-dark border-0 p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-semibold text-white mb-6">
              Réservation Rapide
            </h3>
            <p className="text-gray-400 mb-8">
              Pour une réservation immédiate, contactez-nous directement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('tel:+250792577485')}
                className="btn-glass hover-lift px-8 py-3 font-medium"
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler Maintenant
              </Button>
              <Button
                onClick={() => window.open('mailto:lepetitchalet.rw@gmail.com')}
                variant="outline"
                className="glass border-yellow-400/50 text-white hover:bg-yellow-400/20 px-8 py-3 font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un Email
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
