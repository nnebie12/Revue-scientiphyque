import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contactService from '../../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactService.submitContact(formData);
      setSent(true);
    } catch (err) { 
        alert("Erreur lors de l'envoi du message", err); }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Contactez-nous</h2>
        <p className="text-gray-600">Pour toute question relative à une soumission ou un abonnement.</p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Mail className="text-blue-600" /> <span>contact@revue-arme.org</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <MapPin className="text-blue-600" /> <span>Université de Cocody, Abidjan, Côte d'Ivoire</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
        {sent ? (
          <div className="p-6 text-center text-green-600 font-bold">Message envoyé avec succès !</div>
        ) : (
          <>
            <input type="text" placeholder="Nom complet" className="w-full p-3 border rounded-lg" required 
                   onChange={e => setFormData({...formData, name: e.target.value})} />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" required 
                   onChange={e => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Votre message" rows="5" className="w-full p-3 border rounded-lg" required
                   onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
              <Send size={18} /> Envoyer le message
            </button>
          </>
        )}
      </form>
    </div>
  );
};
export default Contact;