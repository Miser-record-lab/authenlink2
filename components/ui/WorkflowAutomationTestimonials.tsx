// WorkflowAutomationTestimonials.tsx
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { workflowAutomationTestimonials } from "@/data/testimonials";

const WorkflowAutomationTestimonials = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl sm:text-4xl text-white font-bold">
        Automatisation des Workflows
      </h2>
      <AnimatedTestimonials testimonials={workflowAutomationTestimonials} autoplay={true} />
    </div>
  );
};

export default WorkflowAutomationTestimonials;
