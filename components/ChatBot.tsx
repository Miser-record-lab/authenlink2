"use client";

import React, { useState } from "react";
import axios from "axios";
import { FaComment } from "react-icons/fa"; // Icône pour le bouton de chat
import Image from "next/image";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Bonjour 👋🏻 ! Comment puis-je vous aider ?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Pour gérer l'état d'ouverture du chatbot
  const [sessionId] = useState(generateSessionId()); // Session ID unique pour chaque utilisateur
  const [isLoading, setIsLoading] = useState(false); // Ajout de l'état isLoading

  // Fonction pour générer un sessionId unique
  function generateSessionId() {
    return Math.random().toString(36).substring(2, 15); // Génère un ID aléatoire
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("https://n8n.authenlink.com/webhook/chatbot-webhook-options", {
        message: input,
        sender: "user",
        sessionId: sessionId, // Ajout du sessionId
        metadata: {
          userId: "user-123", // Exemple d'ID utilisateur, à personnaliser selon votre logique
          timestamp: new Date().toISOString(), // Envoi du timestamp actuel
        },
      });

      if (response.data && response.data.output) {
        const botMessage = { text: response.data.output, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage = { text: "Désolé, je n'ai pas pu comprendre cela.", sender: "bot" };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi au webhook :", error);
      const errorMessage = { text: "Désolé, une erreur s'est produite.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Désactiver le loader une fois le processus terminé
    }
  };

  return (
    <>
      {/* Icône ronde pour le chatbot */}
      <div
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-black-100 text-white rounded-full flex justify-center items-center cursor-pointer border border-white/[0.2]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComment className="w-8 h-8" />
      </div>

      {/* Chatbot widget */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[400px] h-[500px] bg-gray-800 text-white rounded-lg shadow-lg border border-white/[0.2]">
          {/* Header avec logo et texte "fermer" */}
          <div className="flex items-center justify-between bg-black-100 p-3 rounded-t-lg border border-b-white/[0.2]">
            <div className="flex items-center space-x-2">
              <div>
              <Image 
                src="/authenlink.png"  // Remplace par l'image du workflow N8n
                alt="logo"
                width={50}
                height={50}
                className=""
                />
              </div>
              
              <span className="font-semibold text-white">AuthenLink</span>
            </div>
            <button
              className="text-sm text-white hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Fermer
            </button>
          </div>

          {/* Messages du chatbot */}
          <div className="h-[70%] overflow-y-auto p-4 space-y-2 ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === "bot" ? "bg-white-400 text-black-100 text-sm" : "bg-black-100 text-sm border border-white/[0.2] "
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Input et bouton d'envoi */}
          <div className="flex items-center p-2 ">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-lg border border-white/[0.2] bg-white-400 text-black-100 focus:outline-none"
              placeholder="Tapez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="p-2 bg-black-400 rounded-r-lg text-white hover:bg-black-600 border border-white/[0.2]"
              onClick={handleSendMessage}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
