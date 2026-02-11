import { useEffect, useRef, useState } from 'react';
import { Check, Star, Crown, Gem, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

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

  const plans = [
    {
      name: 'Plan Básico',
      price: '$99',
      period: '/mes',
      description: 'Ideal para comenzar tu transformación',
      icon: Star,
      features: [
        'Evaluación nutricional inicial',
        'Plan de alimentación personalizado',
        '1 consulta de seguimiento mensual',
        'Lista de compras semanal',
        'Recetas básicas',
        'Soporte por email',
      ],
      popular: false,
      color: 'bg-white',
      textColor: 'text-primary-green',
    },
    {
      name: 'Plan Premium',
      price: '$199',
      period: '/mes',
      description: 'El más elegido por mis pacientes',
      icon: Crown,
      features: [
        'Todo lo del Plan Básico',
        '2 consultas de seguimiento mensuales',
        'Soporte por WhatsApp ilimitado',
        'Ajustes semanales al plan',
        'Recetas premium exclusivas',
        'Acceso a talleres grupales',
        'Material educativo completo',
      ],
      popular: true,
      color: 'bg-primary-green',
      textColor: 'text-light-text',
    },
    {
      name: 'Plan Deluxe',
      price: '$299',
      period: '/mes',
      description: 'La experiencia más completa',
      icon: Gem,
      features: [
        'Todo lo del Plan Premium',
        'Consultas semanales ilimitadas',
        'Plan de ejercicios complementario',
        'Asesoría familiar completa',
        'Clases de cocina privadas',
        'Análisis de laboratorio incluido',
        'Atención prioritaria 24/7',
      ],
      popular: false,
      color: 'bg-white',
      textColor: 'text-primary-green',
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
      id="pricing"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-green overflow-hidden"
    >
      {/* Blob Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[800px] h-[800px] bg-accent-green/30 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-blob transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/50 border border-accent-green/70 mb-6">
            <span className="text-sm font-body text-primary-green font-medium">
              Planes y Precios
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-green leading-tight mb-6">
            Elige el plan perfecto para{' '}
            <span className="text-secondary-green italic">ti</span>
          </h2>
          <p className="font-body text-primary-green/70 text-lg">
            Todos los planes incluyen una consulta inicial gratuita para evaluar 
            tus necesidades y objetivos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-accent-green text-primary-green font-body text-xs font-bold rounded-full">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative h-full ${plan.color} rounded-3xl p-8 shadow-soft transition-all duration-500 ${
                  hoveredPlan === index ? 'scale-105 shadow-glow' : ''
                } ${plan.popular ? 'ring-2 ring-accent-green' : ''}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${
                    plan.popular ? 'bg-accent-green' : 'bg-accent-green/30'
                  } flex items-center justify-center mb-6 transition-transform duration-500 ${
                    hoveredPlan === index ? 'scale-110' : ''
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 ${
                      plan.popular ? 'text-primary-green' : 'text-primary-green'
                    }`}
                  />
                </div>

                {/* Plan Name */}
                <h3 className={`font-display text-2xl ${plan.textColor} mb-2`}>
                  {plan.name}
                </h3>
                <p
                  className={`font-body text-sm ${
                    plan.popular ? 'text-light-text/70' : 'text-primary-green/60'
                  } mb-6`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-display text-5xl font-bold ${plan.textColor}`}>
                    {plan.price}
                  </span>
                  <span
                    className={`font-body text-sm ${
                      plan.popular ? 'text-light-text/60' : 'text-primary-green/50'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full ${
                          plan.popular ? 'bg-accent-green/30' : 'bg-accent-green/50'
                        } flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? 'text-accent-green' : 'text-primary-green'
                          }`}
                        />
                      </div>
                      <span
                        className={`font-body text-sm ${
                          plan.popular ? 'text-light-text/80' : 'text-primary-green/70'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full font-body font-semibold transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-accent-green text-primary-green hover:bg-white hover:shadow-glow'
                      : 'bg-primary-green text-light-text hover:bg-secondary-green'
                  }`}
                >
                  Comenzar ahora
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-body text-sm text-primary-green/60">
            ¿Tienes dudas sobre qué plan elegir?{' '}
            <button
              onClick={scrollToContact}
              className="text-secondary-green font-semibold hover:underline"
            >
              Agenda una consulta gratuita
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
