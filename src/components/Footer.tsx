
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Ambient Glow for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-white/5 pb-20">

          {/* Column 1: Brand & Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-16">
            <a
              href="/"
              className="mb-10 block"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src="https://raw.githubusercontent.com/pearlstudio-git/praesiohomepagemaquette/refs/heads/main/PraesioLogo.webp"
                alt="Praesio"
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </a>
            <p className="text-text-body text-md font-light leading-relaxed font-body opacity-80">
              Gestion d'installations haut de gamme pour les plus grandes entreprises mondiales. Une approche où l'excellence opérationnelle rencontre l'art de l'hospitalité.
            </p>
          </div>

          {/* Column 2: Locations (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className="text-primary text-xs font-serif font-bold uppercase tracking-[0.2em]">Bureau</h4>
            <div className="flex flex-col gap-8">
              <div>
                <span className="block text-text-main text-sm font-light mb-2 font-body">Paris</span>
                <address className="not-italic text-text-body text-sm font-light leading-relaxed font-body opacity-60">
                  27 Rue Raffet<br />75016 Paris
                </address>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Connect (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h4 className="text-primary text-xs font-serif font-bold uppercase tracking-[0.2em]">Nous Contacter</h4>

            <div className="flex flex-col gap-2">
              <a href="mailto:contact@praesio.com" className="text-xl text-text-main font-serif hover:text-primary transition-colors duration-300">
                contact@praesio.com
              </a>
              {/* <a href="tel:+33123456789" className="text-lg text-text-body hover:text-white transition-colors font-light font-body mt-2">
                +33 1 23 45 67 89
              </a> */}
            </div>
{/* 
            <div className="flex items-center gap-4 mt-4">
              <SocialIcon icon="public" />
              <SocialIcon icon="mail" />
              <SocialIcon icon="share" />
            </div> */}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
          <p className="text-xs text-text-body font-light font-body opacity-50">
            © {new Date().getFullYear()} Praesio Inc. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-xs text-text-body font-light font-body opacity-50">
            {/* <a className="hover:text-primary hover:opacity-100 transition-all" href="#">Politique de Confidentialité</a>
            <a className="hover:text-primary hover:opacity-100 transition-all" href="#">Conditions d'Utilisation</a> */}
            <a className="hover:text-primary hover:opacity-100 transition-all" href="#">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-text-body hover:border-primary hover:text-primary hover:bg-white/5 transition-all duration-300"
  >
    <span className="material-symbols-outlined text-lg">{icon}</span>
  </a>
);

export default Footer;
