import { motion } from 'motion/react';

function HeroSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '/svg/LinkedIn.svg',
      link: 'https://linkedin.com/in/rosiestsloth',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      icon: '/svg/GitHub.svg',
      link: 'https://github.com/RosiestSloth',
      color: 'hover:bg-gray-800',
    },
    {
      name: 'WhatsApp',
      icon: '/svg/WhatsApp.svg',
      link: 'https://wa.me/5562992846807',
      color: 'hover:bg-green-500',
    },
    {
      name: 'Instagram',
      icon: '/svg/Instagram.svg',
      link: 'https://instagram.com/vinicius___santos1',
      color: 'hover:bg-pink-600',
    },
  ];

  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-montserrat text-4xl font-bold mb-6 text-(--tertiary-color)">
            Vamos conversar?
          </h1>
          <p className="text-(--tertiary-color)/90 mb-8 font-work-sans text-lg">
            Seja para um projeto, uma colaboração ou apenas para dar um "oi",
            estou sempre aberto a novas conexões.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
                <svg
                  className="size-6 text-(--primary-color)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="email-icon-title"
                >
                  <title id="email-icon-title">Ícone de Email</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-(--tertiary-color)">
                  Email
                </h4>
                <p className="font-work-sans text-(--tertiary-color)/70 text-sm">
                  contato@portfolio.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-(--primary-color)/10 flex items-center justify-center">
                <svg
                  className="size-6 text-(--primary-color)"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="location-icon-title"
                >
                  <title id="location-icon-title">Ícone de Localização</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-(--tertiary-color)">
                  Localização
                </h4>
                <p className="font-work-sans text-(--tertiary-color)/70 text-sm">
                  Brasil
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-montserrat font-bold text-(--tertiary-color) mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`size-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 group`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="size-5 group-hover:invert transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-montserrat font-bold text-(--tertiary-color) mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-work-sans"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-montserrat font-bold text-(--tertiary-color) mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-work-sans"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-montserrat font-bold text-(--tertiary-color) mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color)/20 outline-none transition-all font-work-sans resize-none"
                placeholder="Como posso ajudar?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-(--primary-color) text-white font-poppins font-bold py-4 rounded-lg hover:bg-(--primary-color)/90 transition-all shadow-lg shadow-(--primary-color)/30 cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
