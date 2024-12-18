// UseCases.tsx
import React from "react";
import EmailAndSalesTestimonials from "@/components/ui/EmailAndSalesTestimonials";

const UseCases = () => {
  return (
    <div className="pt-20" id="usecase">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-6">
          Cas d&apos;usage de ce que nous effectuons
        </h2>

        {/* Insertion des composants de témoignages par catégorie */}
        <EmailAndSalesTestimonials />
      </div>
    </div>
  );
};

export default UseCases;
