import { useEffect, useRef, useState } from 'react';
import { ClipboardList, MessageCircle, GraduationCap, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: ClipboardList,
      title: 'Plan de alimentación personalizado',
      description: 'Diseño un plan nutricional completamente adaptado a tus necesidades, objetivos, gustos y estilo de vida. Incluye menús variados, listas de compra y recetas exclusivas.',
      features: ['Evaluación inicial completa', 'Menús semanales personalizados', 'Recetas saludables y deliciosas', 'Listas de compra organizadas'],
      color: 'from-accent-green/40 to-accent-green/20',
    },
    {
      icon: MessageCircle,
      title: 'Seguimiento y apoyo continuo',
      description: 'No estás solo en este proceso. Te acompaño con consultas regulares para ajustar tu plan, resolver dudas y mantenerte motivado en cada etapa.',
      features: ['Consultas virtuales o presenciales', 'Soporte por WhatsApp', 'Ajustes según progreso', 'Motivación constante'],
      color: 'from-secondary-green/40 to-secondary-green/20',
    },
    {
      icon: GraduationCap,
      title: 'Talleres y educación nutricional',
      description: 'Aprende los fundamentos de una alimentación saludable mediante talleres grupales y sesiones educativas para toda la familia.',
      features: ['Talleres grupales mensuales', 'Material educativo exclusivo', 'Clases de cocina saludable', 'Asesoría familiar'],
      color: 'from-primary-green/40 to-primary-green/20',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-primary-green overflow-hidden grain"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary-green/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/20 border border-accent-green/30 mb-6">
            <span className="text-sm font-body text-accent-green font-medium">
              Mis Servicios
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-light-text leading-tight mb-6">
            Servicios diseñados para{' '}
            <span className="text-accent-green italic">tu transformación</span>
          </h2>
          <p className="font-body text-light-text/70 text-lg">
            Cada servicio está pensado para brindarte el acompañamiento que necesitas 
            en tu camino hacia una vida más saludable.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`relative h-full bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-3xl p-8 border border-light-text/10 transition-all duration-500 ${
                  activeCard === index ? 'scale-105 shadow-glow' : 'hover:scale-[1.02]'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-light-text flex items-center justify-center mb-6 transition-transform duration-500 ${
                    activeCard === index ? 'scale-110 rotate-3' : ''
                  }`}
                >
                  <service.icon className="w-8 h-8 text-primary-green" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-light-text mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-light-text/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-green/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-green" />
                      </div>
                      <span className="font-body text-sm text-light-text/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="group/btn flex items-center gap-2 font-body text-sm font-semibold text-accent-green hover:text-white transition-colors"
                >
                  Más información
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-accent-green text-primary-green font-body font-semibold rounded-full transition-all hover:bg-white hover:scale-105 hover:shadow-glow inline-flex items-center gap-2"
          >
            Reserva tu consulta gratuita
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
