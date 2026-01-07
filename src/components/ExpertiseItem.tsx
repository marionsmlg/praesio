import React from 'react';

interface ExpertiseItemProps {
  number: string;
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ number, title, description }) => (
  <div className="flex flex-col gap-4 border-b border-white/5 pb-8 group hover:border-primary transition-colors duration-500">
    <span className="text-primary text-xs font-light tracking-widest font-body">{number}</span>
    <h4 className="text-text-main text-h3 font-serif group-hover:text-primary transition-colors">{title}</h4>
    <p className="text-text-body text-body font-light leading-relaxed font-body">{description}</p>
  </div>
);

export default ExpertiseItem;
