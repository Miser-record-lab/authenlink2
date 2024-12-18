"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "Quels sont les bénéfices d'utiliser des outils open-source pour l'automatisation ?",
      answer:
        "Les outils open-source permettent une plus grande flexibilité et un coût réduit pour les entreprises. En utilisant des solutions open-source, vous pouvez personnaliser vos outils en fonction de vos besoins spécifiques et éviter les frais de licence élevés.",
    },
    {
      question: "Quel est le prix de vos services ?",
      answer:
        "L'installation de notre infrastructure est facturée à 1000 €, et nous proposons un service de maintenance et d'aide pour 500 € par mois. Cela inclut des mises à jour régulières et un support technique continu.",
    },
    {
      question: "Proposez-vous des formations pour les employés en interne ?",
      answer:
        "Oui, nous proposons des formations sur l'utilisation des outils et des processus d'automatisation. Nos formations sont adaptées aux besoins de vos employés et peuvent être réalisées en interne ou à distance.",
    },
    {
      question: "Pouvons-nous travailler sur un point spécifique sans mettre en place une infrastructure complète ?",
      answer:
        "Absolument ! Nous pouvons intervenir sur des aspects spécifiques de votre business, comme l'automatisation d'un processus particulier ou l'intégration d'un outil sans nécessiter une infrastructure complète.",
    },
  ];

  return (
    <section className="w-full py-20 bg-black-100 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8">
          Foire Aux Questions
        </h2>

        <div className="space-y-4">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="border border-white/[0.2] rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 bg-black-200 hover:bg-black-300 focus:outline-none focus:bg-black-300 flex justify-between items-center"
              >
                <h3 className="text-xl">{item.question}</h3>
                <div className="text-lg">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-white" />
                  ) : (
                    <FaChevronDown className="text-white" />
                  )}
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-black-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
