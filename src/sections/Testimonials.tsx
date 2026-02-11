import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  const testimonials = [
    {
      name: 'María González',
      role: 'Paciente desde 2022',
      image: '/testimonial-1.jpg',
      rating: 5,
      text: 'Increíble transformación. En solo 3 meses logré perder 12 kg de manera saludable y sostenible. Isabella no solo me dio un plan de alimentación, me enseñó a comer de manera consciente.',
    },
    {
      name: 'Juan Pérez',
      role: 'Paciente desde 2023',
      image: '/testimonial-2.jpg',
      rating: 5,
      text: 'Después de años luchando con mi peso, finalmente encontré a alguien que entendió mis necesidades. El seguimiento constante y el apoyo de Isabella han sido fundamentales en mi éxito.',
    },
    {
      name: 'Ana Rodríguez',
      role: 'Paciente desde 2021',
      image: '/testimonial-3.jpg',
      rating: 5,
      text: 'Como mamá ocupada, pensé que no tendría tiempo de cuidar mi alimentación. Isabella me mostró que es posible comer saludable incluso con poco tiempo. ¡Mi familia completa come mejor ahora!',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Paciente desde 2023',
      image: '/testimonial-2.jpg',
      rating: 5,
      text: 'Mi nivel de energía ha mejorado notablemente desde que empecé con el plan nutricional. Ya no siento esa fatiga constante y puedo disfrutar más tiempo con mi familia.',
    },
    {
      name: 'Laura Sánchez',
      role: 'Paciente desde 2022',
      image: '/testimonial-1.jpg',
      rating: 5,
      text: 'El enfoque holístico de Isabella es lo que marca la diferencia. No solo ves cambios físicos, sino que te sientes mejor en todos los aspectos de tu vida.',
    },
  ];

  // Duplicate testimonials for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-primary-green overflow-hidden grain"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-secondary-green/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent-green/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 px-4 sm:px-6 lg:px-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/20 border border-accent-green/30 mb-6">
            <span className="text-sm font-body text-accent-green font-medium">
              Testimonios
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-light-text leading-tight mb-6">
            Lo que dicen mis{' '}
            <span className="text-accent-green italic">pacientes</span>
          </h2>
          <p className="font-body text-light-text/70 text-lg">
            Cada transformación es una historia de éxito que me llena de orgullo. 
            Estas son algunas experiencias de personas que han confiado en mí.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-6 ${isPaused ? '' : 'animate-marquee'}`}
            style={{
              width: 'fit-content',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[350px] lg:w-[400px] flex-shrink-0 group"
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-soft transition-all duration-500 hover:scale-105 hover:shadow-glow">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accent-green/50" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent-green text-accent-green"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-body text-primary-green/80 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-display text-lg text-primary-green font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="font-body text-sm text-primary-green/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4 sm:px-6 lg:px-12 xl:px-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '500+', label: 'Pacientes transformados' },
            { value: '10k+', label: 'Kilos perdidos en total' },
            { value: '98%', label: 'Tasa de satisfacción' },
            { value: '4.9', label: 'Calificación promedio' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-light-text/5 border border-light-text/10"
            >
              <div className="font-display text-3xl lg:text-4xl text-accent-green font-bold mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-light-text/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
