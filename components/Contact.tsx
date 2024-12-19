'use client';

import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';  // Importation des composants de toast
import 'react-toastify/dist/ReactToastify.css'; // Importation des styles par défaut

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fonction de gestion des changements dans les champs de formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation simple du formulaire
  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    if (!formData.firstName) errors.firstName = "Le prénom est requis";
    if (!formData.lastName) errors.lastName = "Le nom est requis";
    if (!formData.email) errors.email = "L'adresse e-mail est requise";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Adresse e-mail invalide";
    if (!formData.message) errors.message = "Le message est requis";

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== "");
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://n8n.authenlink.com/webhook/boite-de-reception", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
            date: new Date().toISOString(), // Ajout de la date au format ISO
          }),
        });

        console.log('Réponse de l\'API:', response);
        if (response.ok) {
          setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Réinitialiser les champs
          toast.success("Formulaire envoyé avec succès !");  // Affichage du toast de succès
        } else {
          toast.error("Erreur lors de l'envoi. Essayez à nouveau.");  // Affichage du toast d'erreur
        }
      } catch (error) {
        console.error("Erreur:", error);
        toast.error("Erreur lors de l'envoi. Essayez à nouveau.");  // Affichage du toast d'erreur
      }

      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full pt-40" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-8">Nous Contacter</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-black-100 p-8 rounded-lg shadow-lg ">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-lg font-medium text-white mb-2">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-white/[0.2] rounded-md"
                placeholder="Votre prénom"
              />
              {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label className="block text-lg font-medium text-white mb-2">Nom</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-white/[0.2] rounded-md"
                placeholder="Votre nom"
              />
              {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium text-white mb-2">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-white/[0.2] rounded-md"
              placeholder="Votre adresse e-mail"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block text-lg font-medium text-white mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-white/[0.2] rounded-md"
              rows={6}
              placeholder="Votre message"
            />
            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
          </div>
          <div className="text-center">
            <MagicButton 
              title={isSubmitting ? "Envoi en cours..." : "Envoyer"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </form>
      </div>

      {/* ToastContainer pour afficher les toasts */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
