import React from 'react';

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, title, description }) => (
  <div className="group relative flex flex-col h-full bg-[#0F172A]/40 backdrop-blur-sm p-12 hover:bg-[#0F172A] transition-colors duration-300 border-l-2 border-transparent hover:border-primary">
    <div className="mb-4">
      <div className="w-16 h-16 flex items-center justify-start text-primary mb-8">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="text-primary text-h3 font-serif mb-6">{title}</h3>
      <p className="text-text-body text-body font-light leading-relaxed font-body">
        {description}
      </p>
    </div>
  </div>
);

export default PhilosophyCard;
