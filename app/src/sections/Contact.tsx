import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad de México, México',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 55 1234 5678',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hola@nutricionvida.com',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-green overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-green/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-green/10 blur-3xl" />
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
              Contacto
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-green leading-tight mb-6">
            Comienza tu transformación{' '}
            <span className="text-secondary-green italic">hoy</span>
          </h2>
          <p className="font-body text-primary-green/70 text-lg">
            Agenda tu consulta inicial gratuita y descubre cómo puedo ayudarte 
            a alcanzar tus objetivos de salud.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Image & Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Image */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/30 to-secondary-green/20 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img
                  src="/contact-image.jpg"
                  alt="Consulta nutricional"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green/30 to-transparent" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-green/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-primary-green/60 mb-1">
                      {item.label}
                    </div>
                    <div className="font-body text-sm text-primary-green font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center transition-all hover:bg-secondary-green hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-light-text" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center transition-all hover:bg-secondary-green hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-light-text" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-soft">
              <h3 className="font-display text-2xl text-primary-green mb-2">
                Agenda tu consulta
              </h3>
              <p className="font-body text-sm text-primary-green/60 mb-8">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-green flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-green" />
                  </div>
                  <h4 className="font-display text-xl text-primary-green mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="font-body text-sm text-primary-green/60">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="block font-body text-sm text-primary-green mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-green/10 bg-light-green/30 font-body text-primary-green placeholder:text-primary-green/40 focus:outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-green transition-all duration-300 ${
                        focusedField === 'name' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block font-body text-sm text-primary-green mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-green/10 bg-light-green/30 font-body text-primary-green placeholder:text-primary-green/40 focus:outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-green transition-all duration-300 ${
                        focusedField === 'email' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block font-body text-sm text-primary-green mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-green/10 bg-light-green/30 font-body text-primary-green placeholder:text-primary-green/40 focus:outline-none transition-all"
                      placeholder="+52 55 1234 5678"
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-green transition-all duration-300 ${
                        focusedField === 'phone' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block font-body text-sm text-primary-green mb-2">
                      ¿Qué objetivo quieres alcanzar?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-primary-green/10 bg-light-green/30 font-body text-primary-green placeholder:text-primary-green/40 focus:outline-none transition-all resize-none"
                      placeholder="Cuéntame un poco sobre ti y tus objetivos..."
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-green transition-all duration-300 ${
                        focusedField === 'message' ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-green text-primary-green font-body font-semibold rounded-full transition-all hover:bg-primary-green hover:text-light-text flex items-center justify-center gap-2 group"
                  >
                    Enviar mensaje
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
