"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs"; // Import du composant Tabs
import Image from "next/image"; // Importation de l'image

const ToolsPreview = () => {
  // Définir les outils comme tabs
  const tools = [
    {
      title: "n8n",
      value: "n8n",
      content: (
        <div className="flex justify-center items-center">
          <Image
            src="/n8n.jpg"  // Utilisation de l'image n8n.jpg
            alt="n8n"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      ),
    },
    {
      title: "Mautic",
      value: "mautic",
      content: (
        <div className="flex justify-center items-center">
          <Image
            src="/mautic.jpg"  // Utilisation de l'image mautic.jpg
            alt="Mautic"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      ),
    },
    // Ajouter d'autres outils ici...
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        {/* Utilisation du composant Tabs */}
        <Tabs
          tabs={tools}  // Passer les outils comme tabs
          containerClassName="mb-12" // Ajouter des classes de style personnalisées
          activeTabClassName="bg-blue-500 text-white"  // Style pour l'onglet actif
          tabClassName="text-lg font-medium text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white rounded-full"
          contentClassName="p-6 bg-gray-800 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ToolsPreview;
