import { BookOpen, FileText, Mail, Users } from "lucide-react";

export const articlesData = [
  {
    id: 1,
    title: "Guilty Feeling as a Catalyst of Moral Transformation in Nathaniel Hawthorne's The Scarlet Letter",
    authors: "Michel PODA, Adama Sabine MOYENGA",
    pages: "1-20",
    doi: "https://dx.doi.org/10.4314/ARME (Revue Africaine de migration et Environnement).v3i3.1"
  },
  {
    id: 2,
    title: "Bonne gouvernance en Afrique : une relecture de l'Egypte antique dans the resolutionaries d'Ayi Kwei Armah",
    authors: "Souleymane TUO",
    pages: "21-36",
    doi: "https://dx.doi.org/10.4314/ARME (Revue Africaine de migration et Environnement).v3i3.2"
  },
  {
    id: 3,
    title: "Othello and Steve Richard: An Intertextual Reading",
    authors: "SILUE Nannougou, SILUE Ténéna Mamadou",
    pages: "37-49",
    doi: "https://dx.doi.org/10.4314/ARME (Revue Africaine de migration et Environnement).v3i3.3"
  }
];

export const volumesData = [
  { vol: "Vol. 3 Numéro 3", date: "mars 2025" },
  { vol: "Vol. 3 Numéro 2", date: "mars 2025" },
  { vol: "Vol. 3 Numéro 1", date: "janvier 2025" },
  { vol: "Vol. 2 Numéro 4", date: "octobre 2024" }
];

export const featuresData = [
  {
    icon: FileText,
    title: "Revue évaluée",
    description: "Évaluation par les pairs en double aveugle",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Accès libre",
    description: "Accès gratuit aux articles publiés",
    color: "green"
  },
  /*{
    icon: Users,
    title: "Multidisciplinaire",
    description: "Géographie, philosophie et plus",
    color: "purple"
  },*/
  {
    icon: Mail,
    title: "Trimestrielle",
    description: "Publication 4 fois par an",
    color: "orange"
  }
];

export const indexationData = ["AJOL", "HAL", "ORCID", "MIRABEL"];
