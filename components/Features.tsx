import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Importation des composants de cartes
import Image from "next/image";  // Importation de l'image de Next.js

const Features = () => {
  return (
    <div className="py-20 z-10" id="presentation">  
      <div className="max-w-7xl mx-auto px-5 sm:px-10">

        <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6">
          Nos Solutions
        </h2>
        {/* Grille de 4 cartes */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">

         <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Infrastructures Open-Source
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Utilisez des outils open-source pour automatiser vos tâches et collecter des données avec des solutions robustes.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/portainer.jpg"  // Remplace par l'image des outils Open-Source
                    alt="Outils Open-Source"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>


          {/* Carte 1 - Marketing Automatisé */}


          {/* Carte 2 - Analyse de données */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Analyse de Données
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Visualisez vos données et prenez des décisions éclairées avec Metabase.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/metabase.jpg"  // Remplace par l'image de Metabase (en attendant)
                    alt="Metabase"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          <div className="flex justify-center">
            <CardContainer className="relative w-full flex flex-wrap">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Marketing Automatisé
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Boostez votre marketing grâce à l&apos;automatisation avec Mautic.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={10} className="w-full mt-4">
                  <Image
                    src="/mautic.jpg"  // Remplace par l'image de Mautic
                    alt="Mautic"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Carte 3 - Assistant Virtuel */}
          <div className="flex justify-center">
            <CardContainer className="relative w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  Assistant Virtuel
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Optimisez la communication avec votre entreprise et vos clients grâce à des workflows automatisés.
                </CardItem>
                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                  <Image
                    src="/n8n.jpg"  // Remplace par l'image du workflow N8n
                    alt="N8n Workflow"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Carte 4 - Infrastructures Open-Source */}


        </div>
      </div>
    </div>
  );
};

export default Features;
