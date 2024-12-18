"use client";

import React from "react";
import { FaComment } from "react-icons/fa"; // Icône pour le bouton de chat

const Chatbot = () => {
  // Fonction pour gérer le clic sur la bulle et ouvrir l'URL dans un nouvel onglet
  const handleChatbotClick = () => {
    window.open("https://n8n.authenlink.com/webhook/848f55c3-0695-4e6a-84ec-119396b9ebb0/chat", "_blank");
  };

  return (
    <>
      {/* Icône ronde pour le chatbot, qui redirige vers l'URL de n8n dans un nouvel onglet */}
      <div
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-black-100 border border-white  text-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleChatbotClick} // Ouvre l'URL dans un nouvel onglet
      >
        <FaComment className="w-8 h-8" />
      </div>
    </>
  );
};

export default Chatbot;
