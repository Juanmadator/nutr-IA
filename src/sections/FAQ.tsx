import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: '¿Qué incluye el plan de alimentación personalizado?',
      answer: 'El plan incluye una evaluación nutricional completa, menús semanales adaptados a tus gustos y necesidades, listas de compra organizadas, recetas exclusivas y recomendaciones de preparación. Todo está diseñado para que sea fácil de seguir y sostenible a largo plazo.',
    },
    {
      question: '¿Con qué frecuencia tendré seguimiento?',
      answer: 'La frecuencia depende del plan que elijas. El Plan Básico incluye 1 consulta mensual, el Plan Premium 2 consultas mensuales, y el Plan Deluxe ofrece consultas semanales ilimitadas. Además, todos los planes incluyen soporte por email o WhatsApp para dudas urgentes.',
    },
    {
      question: '¿Necesito tener experiencia previa en nutrición?',
      answer: 'No es necesario ningún conocimiento previo. Mi trabajo es guiarte paso a paso, explicándote todo de manera sencilla. Lo importante es tu compromiso y disposición para hacer cambios positivos en tu estilo de vida.',
    },
    {
      question: '¿Los planes funcionan para personas con condiciones médicas?',
      answer: 'Sí, tengo experiencia trabajando con diversas condiciones como diabetes, hipertensión, síndrome de ovario poliquístico, entre otras. Sin embargo, siempre recomiendo consultar con tu médico antes de iniciar cualquier plan nutricional si tienes una condición médica diagnosticada.',
    },
    {
      question: '¿Puedo cambiar de plan si necesito más apoyo?',
      answer: '¡Por supuesto! Puedes actualizar tu plan en cualquier momento si sientes que necesitas más seguimiento o servicios adicionales. Los cambios se aplican desde el siguiente ciclo de facturación.',
    },
    {
      question: '¿Cómo se realizan las consultas?',
      answer: 'Ofrezco consultas tanto virtuales (videollamada) como presenciales, dependiendo de tu ubicación y preferencia. Las consultas virtuales son igual de efectivas y te permiten recibir atención desde la comodidad de tu hogar.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-green overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full border-2 border-primary-green" />
        <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full border-2 border-primary-green" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/50 border border-accent-green/70 mb-6">
              <HelpCircle className="w-4 h-4 text-primary-green" />
              <span className="text-sm font-body text-primary-green font-medium">
                Preguntas Frecuentes
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-green leading-tight mb-6">
              Todo lo que necesitas{' '}
              <span className="text-secondary-green italic">saber</span>
            </h2>
            <p className="font-body text-primary-green/70 text-lg">
              Aquí respondo las preguntas más comunes. Si tienes alguna otra duda, 
              no dudes en contactarme.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'shadow-soft' : 'shadow-xs hover:shadow-soft'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-display text-lg text-primary-green pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full bg-accent-green/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openIndex === index ? 'bg-accent-green rotate-180' : ''
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          openIndex === index ? 'text-primary-green' : 'text-primary-green'
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="font-body text-primary-green/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className={`mt-12 text-center p-8 bg-primary-green rounded-3xl transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="font-display text-2xl text-light-text mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="font-body text-light-text/70 mb-6">
              Estoy aquí para ayudarte. Contáctame y con gusto resolveré todas tus dudas.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-green text-primary-green font-body font-semibold rounded-full transition-all hover:bg-white hover:shadow-glow"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
