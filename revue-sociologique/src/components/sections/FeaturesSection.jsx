import React from "react";
import { featuresData } from "../data/journalData";
import { FeatureCard } from "../card/FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi nous choisir ?</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export { FeaturesSection };