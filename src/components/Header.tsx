import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', path: '/#vision' },
    { name: 'Expertise', path: '/#expertise' },
    { name: 'Technologie', path: '/#technologie' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (typeof window === 'undefined') return false;
    if (path.startsWith('/#')) {
      return (window.location.pathname + window.location.hash) === path;
    }
    return window.location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-background-dark/95 border-primary/20 py-4' : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center group opacity-0 animate-fade-in-down"
          style={{ animationDelay: '0ms' }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src="https://raw.githubusercontent.com/pearlstudio-git/praesiohomepagemaquette/refs/heads/main/PraesioLogo.webp"
            alt="Praesio"
            className="h-12 md:h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            loading="lazy"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => {
                if (link.path === '/contact') window.scrollTo(0, 0);
              }}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              className={`text-sm font-light tracking-widest uppercase transition-colors relative font-body opacity-0 animate-fade-in-down ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-text-main hover:text-primary'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-primary"></span>
              )}
            </a>
          ))}
        </nav>

        <div
          className="flex items-center gap-4 opacity-0 animate-fade-in-down"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="hidden md:flex cursor-pointer items-center justify-center h-12 px-8 border border-primary text-primary bg-transparent hover:bg-primary hover:text-background-dark transition-colors duration-300 text-xs font-light uppercase tracking-widest font-body rounded-none"
          >
            Contact
          </a>
          <button
            className="md:hidden text-text-main hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-primary/20 p-8">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-text-main text-lg font-light font-body uppercase tracking-widest border-l-2 border-transparent pl-4 hover:border-primary hover:text-primary transition-all"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (link.path === '/contact') window.scrollTo(0, 0);
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="w-full h-14 flex items-center justify-center bg-primary text-background-dark font-light font-body uppercase tracking-widest text-sm rounded-none"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
