import React from 'react';
import { FaEnvelope, FaShareAlt, FaCogs, FaUsers, FaRobot, FaFileAlt, FaChartLine, FaHandsHelping } from 'react-icons/fa';  // Icônes React

// Liste des outils et leurs informations associées
const emailAndSalesTestimonials = [
  {
    name: "Emails et Ventes",
    icon: <FaEnvelope className="text-white text-9xl" />,  // Icône pour Emails et Ventes
    backgroundColor: "bg-blue-500",  // Couleur de fond pour n8n
  },
  {
    name: "Réseaux Sociaux",
    icon: <FaShareAlt className="text-white text-9xl" />,  // Icône pour Réseaux Sociaux
    backgroundColor: "bg-pink-500",  // Couleur de fond pour Mautic
  },
  {
    name: "Automatisation des Workflows Complexes",
    icon: <FaCogs className="text-white text-9xl" />,  // Icône pour Workflows Complexes
    backgroundColor: "bg-green-500",  // Couleur de fond pour Metabase
  },
  {
    name: "CRM (Gestion de la Relation Client)",
    icon: <FaUsers className="text-white text-9xl" />,  // Icône pour CRM
    backgroundColor: "bg-yellow-500",  // Couleur de fond pour Grafana
  },
  {
    name: "Ressources Humaines",
    icon: <FaHandsHelping className="text-white text-9xl" />,  // Icône pour Ressources Humaines
    backgroundColor: "bg-teal-500",  // Couleur de fond pour Portainer
  },
  {
    name: "Chatbots pour le Support Client",
    icon: <FaRobot className="text-white text-9xl" />,  // Icône pour Chatbots
    backgroundColor: "bg-indigo-500",  // Couleur de fond pour Mautic
  },
  {
    name: "Automatisation des Documents",
    icon: <FaFileAlt className="text-white text-9xl" />,  // Icône pour Documents
    backgroundColor: "bg-purple-700",  // Couleur de fond pour N8N
  },
  {
    name: "Études de Marché",
    icon: <FaChartLine className="text-white text-9xl" />,  // Icône pour Études de Marché
    backgroundColor: "bg-red-700",  // Couleur de fond pour Metabase
  },
];

const ToolsCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {emailAndSalesTestimonials.map((tool, index) => (
        <div
          key={index}
          className="relative w-[600px] h-[600px] rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center"
        >
          {/* Application du background et centrage du contenu */}
          <div 
            className={`${tool.backgroundColor} absolute top-0 left-0 w-full h-full`}  // Applique la couleur de fond
          />
          <div className="relative z-10 flex justify-center items-center h-full w-full">
            {/* Contenu de la card */}
            <div className="text-center">
              {/* Icône de l'outil */}
              <div className="mb-4">
                {tool.icon}
              </div>
              {/* Titre de l'outil */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsCards;
