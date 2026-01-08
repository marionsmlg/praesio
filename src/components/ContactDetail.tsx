import React from 'react';

interface ContactDetailProps {
  label: string;
  value: string;
  link: string;
  icon: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ label, value, link, icon }) => (
  <div className="space-y-2 group border-l border-white/10 pl-6 hover:border-primary transition-colors duration-300">
    <p className="text-text-body text-xs uppercase tracking-widest mb-1 font-body font-light ">{label}</p>
    <a className="text-text-main text-xl font-light tracking-wide hover:text-primary transition-colors flex items-center gap-3 font-body" href={link}>
      {value}
      <span className="material-symbols-outlined text-[18px] text-primary">
        {icon}
      </span>
    </a>
  </div>
);

export default ContactDetail;
