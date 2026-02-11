import { Leaf, Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navegacion: [
      { name: 'Inicio', href: '#hero' },
      { name: 'Sobre mí', href: '#about' },
      { name: 'Servicios', href: '#services' },
      { name: 'Planes', href: '#pricing' },
      { name: 'Contacto', href: '#contact' },
    ],
    servicios: [
      { name: 'Plan de alimentación', href: '#services' },
      { name: 'Seguimiento continuo', href: '#services' },
      { name: 'Talleres educativos', href: '#services' },
      { name: 'Asesoría familiar', href: '#services' },
    ],
    legal: [
      { name: 'Términos de servicio', href: '#' },
      { name: 'Política de privacidad', href: '#' },
      { name: 'Aviso legal', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-primary-green overflow-hidden grain">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#1f3d1c"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center transition-transform group-hover:scale-110">
                <Leaf className="w-5 h-5 text-primary-green" />
              </div>
              <span className="font-display text-xl font-semibold text-light-text">
                Nutrición Vida
              </span>
            </a>
            <p className="font-body text-sm text-light-text/60 mb-6 max-w-xs">
              Transformando vidas a través de la nutrición personalizada y un 
              acompañamiento cercano.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light-text/10 flex items-center justify-center transition-all hover:bg-accent-green hover:scale-110 group"
              >
                <Instagram className="w-4 h-4 text-light-text group-hover:text-primary-green" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light-text/10 flex items-center justify-center transition-all hover:bg-accent-green hover:scale-110 group"
              >
                <Facebook className="w-4 h-4 text-light-text group-hover:text-primary-green" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light-text/10 flex items-center justify-center transition-all hover:bg-accent-green hover:scale-110 group"
              >
                <Twitter className="w-4 h-4 text-light-text group-hover:text-primary-green" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-light-text mb-6">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-body text-sm text-light-text/60 hover:text-accent-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent-green transition-all group-hover:w-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-light-text mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-body text-sm text-light-text/60 hover:text-accent-green transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent-green transition-all group-hover:w-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-light-text mb-6">Newsletter</h4>
            <p className="font-body text-sm text-light-text/60 mb-4">
              Recibe tips nutricionales y recetas saludables directamente en tu correo.
            </p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-text/40" />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-light-text/10 border border-light-text/20 font-body text-sm text-light-text placeholder:text-light-text/40 focus:outline-none focus:border-accent-green transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-3 bg-accent-green text-primary-green rounded-full font-body text-sm font-semibold hover:bg-white transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-text/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-light-text/40 text-center md:text-left">
            © {new Date().getFullYear()} Nutrición Vida. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-light-text/40 hover:text-accent-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-green text-primary-green rounded-full shadow-glow flex items-center justify-center transition-all hover:bg-white hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
