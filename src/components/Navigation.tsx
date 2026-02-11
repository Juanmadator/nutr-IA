import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Planes', href: '#pricing' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-primary-green/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center transition-transform group-hover:scale-110">
                <Leaf className="w-5 h-5 text-primary-green" />
              </div>
              <span className={`font-display text-xl font-semibold transition-colors ${
                isScrolled ? 'text-light-text' : 'text-light-text'
              }`}>
                Nutrición Vida
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-body text-sm font-medium transition-all hover:text-accent-green relative group ${
                    isScrolled ? 'text-light-text/90' : 'text-light-text/90'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-2.5 bg-accent-green text-primary-green font-body text-sm font-semibold rounded-full transition-all hover:bg-white hover:scale-105 hover:shadow-glow"
              >
                Reserva tu consulta
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-light-text"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-primary-green/98 backdrop-blur-lg" />
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="font-display text-2xl text-light-text hover:text-accent-green transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 px-8 py-3 bg-accent-green text-primary-green font-body font-semibold rounded-full"
          >
            Reserva tu consulta
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
