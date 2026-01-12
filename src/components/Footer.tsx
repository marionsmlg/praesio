
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
                src="/images/PraesioLogo.webp"
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
            <h4 className="text-primary text-xs font-serif  uppercase tracking-[0.2em]">Bureau</h4>
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
            <h4 className="text-primary text-xs font-serif  uppercase tracking-[0.2em]">Nous Contacter</h4>

            <div className="flex flex-col gap-4">
              <a href="mailto:contact@praesio.com" className="text-xl text-text-main font-serif hover:text-primary transition-colors duration-300">
                contact@praesio.com
              </a>
              {/* <a href="tel:+33123456789" className="text-lg text-text-body hover:text-white transition-colors font-light font-body mt-2">
                +33 1 23 45 67 89
              </a> */}

              <a
                href="/book-praesio.pdf"
                download="Book-Praesio.pdf"
                className="inline-flex items-center gap-2 text-sm text-text-body hover:text-primary transition-colors duration-300 font-light mt-2 group"
              >
                <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">download</span>
                Télécharger notre book
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/praesio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-text-body hover:border-primary hover:text-primary hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
          <p className="text-xs text-text-body font-light font-body opacity-50">
            © {new Date().getFullYear()} Praesio. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-xs text-text-body font-light font-body opacity-50">
            <a className="hover:text-primary hover:opacity-100 transition-all" href="/mentions-legales">Mentions Légales</a>
            <a className="hover:text-primary hover:opacity-100 transition-all" href="/politique-confidentialite">Politique de Confidentialité</a>
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
