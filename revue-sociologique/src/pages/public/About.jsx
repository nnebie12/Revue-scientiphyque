import { ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      {/* Section Ligne Éditoriale */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">À propos de la Revue ARME</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          La Revue Africaine de Migration et Environnement (ARME) est une publication scientifique pluridisciplinaire. 
          Elle vise à offrir un espace de dialogue entre chercheurs sur les problématiques cruciales du changement 
          climatique, des mouvements de population et du développement durable en Afrique.
        </p>
      </section>

      {/* Grid des Politiques */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Users className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-3">Processus d'Évaluation</h3>
          <p className="text-gray-600 text-sm">
            Tous les manuscrits sont soumis à une évaluation par les pairs en **double aveugle**. 
            L'identité des auteurs et des évaluateurs reste anonyme tout au long du processus.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <ShieldCheck className="text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-3">Éthique & Plagiat</h3>
          <p className="text-gray-600 text-sm">
            La revue ARME utilise des outils de détection de plagiat. Toute forme de fraude scientifique 
            entraîne le rejet immédiat du manuscrit et l'information des institutions concernées.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;