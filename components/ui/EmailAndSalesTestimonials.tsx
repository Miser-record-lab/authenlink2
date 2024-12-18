// EmailAndSalesTestimonials.tsx
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { emailAndSalesTestimonials } from "@/data/testimonials";

const EmailAndSalesTestimonials = () => {
  return (
    <div className="py-10">
      <AnimatedTestimonials testimonials={emailAndSalesTestimonials} autoplay={true} />
    </div>
  );
};

export default EmailAndSalesTestimonials;
