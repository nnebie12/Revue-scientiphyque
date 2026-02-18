import { FooterColumn } from "./FooterColumn";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <FooterColumn title="Revue ARME (Revue Africaine de migration et Environnement)">
            <p className="text-gray-400 text-sm leading-relaxed">
              01 BP V 18 Bouaké 01<br />
              Université Alassane Ouattara<br />
              UFR Sociologie
            </p>
          </FooterColumn>
          
          <FooterColumn title="Informations">
            <FooterLink href="/submit">Soumettre un article</FooterLink>
            <FooterLink href="/status">Statut de l'article</FooterLink>
            <FooterLink href="/copyright">Droits d'auteur</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="Liens utiles">
            <FooterLink href="#">Processus évaluation</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="Contact">
            <p className="text-gray-400 text-sm">revueARME (Revue Africaine de migration et Environnement)@gmail.com</p>
            <p className="text-gray-400 text-sm">ki.k@hotmail.com</p>
            <p className="text-gray-400 text-sm">gilbert.kone@uao.edu.ci</p>
          </FooterColumn>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Revue ARME (Revue Africaine de migration et Environnement). Tous droits réservés. Licence Creative Commons BY-NC-ND</p>
        </div>
      </div>
    </footer>
  );
};