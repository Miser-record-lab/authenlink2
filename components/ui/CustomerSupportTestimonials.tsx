// CustomerSupportTestimonials.tsx
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { customerSupportTestimonials } from "@/data/testimonials";

const CustomerSupportTestimonials = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl sm:text-4xl text-white font-bold">
        Support Client et Automatisation
      </h2>
      <AnimatedTestimonials testimonials={customerSupportTestimonials} autoplay={true} />
    </div>
  );
};

export default CustomerSupportTestimonials;
