import { FaCode, FaDatabase, FaRegEnvelope, FaChartLine, FaPlug, FaDesktop } from 'react-icons/fa';  // Import des icônes nécessaires
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaPaperPlane, FaRobot, FaRocket } from 'react-icons/fa6';

const tools = [
  {
    title: "n8n",
    icon: <FaPlug className="text-black dark:text-white" />,  // Icône générique pour n8n
    href: "/n8n",
  },
  {
    title: "Metabase",
    icon: <FaDatabase className="text-black dark:text-white" />,  // Icône pour base de données / analyse
    href: "/metabase",
  },
  {
    title: "Mautic",
    icon: <FaRegEnvelope className="text-black dark:text-white" />,  // Icône pour email / marketing
    href: "/mautic",
  },
  {
    title: "Grafana",
    icon: <FaChartLine className="text-black dark:text-white" />,  // Icône pour surveillance / graphique
    href: "/grafana",
  },
  {
    title: "Bubble",
    icon: <FaRocket className="text-black dark:text-white" />,  // Icône générique pour Bubble
    href: "/bubble",
  },
  {
    title: "Framer",
    icon: <FaDesktop className="text-black dark:text-white" />,  // Icône générique pour Framer
    href: "/framer",
  },
  {
    title: "Mailjet",
    icon: <FaPaperPlane className="text-black dark:text-white" />,  // Icône générique pour Mailjet
    href: "/mailjet",
  },
  {
    title: "OpenAI",
    icon: <FaRobot className="text-black dark:text-white" />,  // Icône pour OpenAI (représente l'IA)
    href: "/openai",
  },
  {
    title: "Code",
    icon: <FaCode className="text-black dark:text-white" />,  // Icône pour le code
    href: "/code",
  },
];

export const Tools = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Utilisation du composant FloatingDock pour afficher les icônes des outils */}
        <FloatingDock items={tools} desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2" mobileClassName="fixed bottom-10 right-10" />
      </div>
    </div>
  );
};

export default Tools;
