import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 inline-block border-blue-600">
        Présentation de la revue
      </h3>
      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        Dans un environnement marqué par la croissance exponentielle des productions scientifiques, 
        la diffusion et la promotion des acquis de la recherche deviennent un impératif. 
        La revue <strong>ARME</strong> se positionne comme un patrimoine intellectuel, 
        un héritage à léguer aux générations futures, brisant les barrières académiques pour rendre 
        le savoir accessible à tous les acteurs du développement.
      </p>
      <Link to="/a-propos" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group">
        En savoir plus sur notre ligne éditoriale 
        <span className="ml-2 group-hover:translate-x-1 transition-transform">»</span>
      </Link>
    </section>
  );
};
export { AboutSection };