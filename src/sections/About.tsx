import { useEffect, useRef, useState } from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (y / rect.height) * -10;
      const rotateY = (x / rect.width) * 10;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleMouseMove);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const credentials = [
    { icon: Award, label: 'Licenciada en Nutrición', value: 'UNAM' },
    { icon: BookOpen, label: 'Especialización', value: 'Nutrición Clínica' },
    { icon: Users, label: 'Pacientes atendidos', value: '+500' },
    { icon: Heart, label: 'Enfoque', value: 'Holístico' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-green overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-2 border-primary-green" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-primary-green" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-2 border-primary-green" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div
              ref={imageRef}
              className="relative transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-green rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary-green/20 rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src="/about-image.jpg"
                  alt="Isabella García - Nutricionista"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-green text-light-text rounded-2xl p-6 shadow-soft">
                <div className="font-display text-4xl font-bold text-accent-green">10+</div>
                <div className="font-body text-sm text-light-text/80">Años de<br />experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/30 border border-accent-green/50 mb-6">
              <span className="text-sm font-body text-primary-green font-medium">
                Conóceme
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-green leading-tight mb-6">
              Soy Isabella García,{' '}
              <span className="text-secondary-green italic">tu nutricionista</span>
            </h2>

            <div className="space-y-4 font-body text-primary-green/80 leading-relaxed mb-8">
              <p>
                Con más de 10 años de experiencia en el campo de la nutrición, he dedicado mi 
                carrera a ayudar a las personas a transformar su relación con la comida y 
                alcanzar sus objetivos de salud de manera sostenible.
              </p>
              <p>
                Mi enfoque se basa en la personalización: cada persona es única, y por eso 
                cada plan nutricional debe serlo también. No creo en las dietas restrictivas 
                ni en las soluciones rápidas. Mi objetivo es enseñarte a comer de manera 
                equilibrada, disfrutando de la comida mientras cuidas tu salud.
              </p>
              <p>
                A lo largo de mi trayectoria, he tenido el privilegio de acompañar a cientos 
                de personas en su camino hacia una vida más saludable, celebrando cada 
                pequeño logro y transformación junto a ellas.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-10">
              <div className="font-display text-3xl text-primary-green italic">
                Isabella García
              </div>
              <div className="font-body text-sm text-primary-green/60 mt-1">
                Licenciada en Nutrición · Especialista en Nutrición Clínica
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-xs hover:shadow-soft transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-green/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-primary-green/60">{item.label}</div>
                    <div className="font-body text-sm font-semibold text-primary-green">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
