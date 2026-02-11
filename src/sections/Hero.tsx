import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current || !textRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;
      
      imageRef.current.style.transform = `translate(${xPercent * 10}px, ${yPercent * 5}px) scale(1)`;
      textRef.current.style.transform = `translate(${xPercent * -5}px, ${yPercent * -3}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-primary-green grain"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary-green/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-green/10 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div ref={textRef} className="order-2 lg:order-1 text-center lg:text-left transition-transform duration-300 ease-out">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/20 border border-accent-green/30 mb-6 opacity-0 animate-slide-in-up">
                <Sparkles className="w-4 h-4 text-accent-green" />
                <span className="text-sm font-body text-accent-green font-medium">
                  Transforma tu vida hoy
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-light-text leading-tight mb-6 opacity-0 animate-slide-in-up stagger-1">
                Transforma tu salud con la{' '}
                <span className="text-accent-green italic">nutrición natural</span>
              </h1>

              <p className="font-body text-base lg:text-lg text-light-text/80 max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-in-up stagger-2">
                Descubre el poder de una alimentación personalizada. Te acompaño en tu 
                camino hacia una vida más saludable, con planes diseñados específicamente 
                para tus necesidades y objetivos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-in-up stagger-3">
                <button
                  onClick={scrollToContact}
                  className="group px-8 py-4 bg-accent-green text-primary-green font-body font-semibold rounded-full transition-all hover:bg-white hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2"
                >
                  Reserva tu consulta
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border-2 border-light-text/30 text-light-text font-body font-semibold rounded-full transition-all hover:border-accent-green hover:text-accent-green flex items-center justify-center"
                >
                  Conoce mis servicios
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-light-text/10 opacity-0 animate-slide-in-up stagger-4">
                <div>
                  <div className="font-display text-3xl lg:text-4xl text-accent-green font-semibold">+500</div>
                  <div className="font-body text-sm text-light-text/60 mt-1">Pacientes atendidos</div>
                </div>
                <div>
                  <div className="font-display text-3xl lg:text-4xl text-accent-green font-semibold">10+</div>
                  <div className="font-body text-sm text-light-text/60 mt-1">Años de experiencia</div>
                </div>
                <div>
                  <div className="font-display text-3xl lg:text-4xl text-accent-green font-semibold">98%</div>
                  <div className="font-body text-sm text-light-text/60 mt-1">Clientes satisfechos</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative opacity-0 animate-scale-in stagger-2">
              <div
                ref={imageRef}
                className="relative transition-transform duration-300 ease-out"
              >
                {/* Blob Shape Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/30 to-secondary-green/30 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-blob scale-110" />
                
                {/* Image Container */}
                <div className="relative rounded-[30%_70%_60%_40%/50%_40%_60%_50%] overflow-hidden animate-blob shadow-2xl">
                  <img
                    src="/hero-image.jpg"
                    alt="Nutrición saludable"
                    className="w-full h-[400px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-green/30 to-transparent" />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white rounded-2xl p-4 shadow-soft animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent-green flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary-green" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-primary-green font-semibold">¡Empieza hoy!</div>
                      <div className="font-body text-sm text-primary-green/60">Tu transformación te espera</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#e8edde"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
