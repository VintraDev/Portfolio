import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Cards from '../../shared/Cards';

function HeroSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('[data-dropdown]')) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filters = [
    { label: 'Todos', value: 'all', title: 'Todos os trabalhos' },
    { label: 'Front End', value: 'front-end', title: 'Trabalhos Front End' },
    { label: 'Design', value: 'design', title: 'Trabalhos de Design' },
    { label: 'Full Stack', value: 'full-stack', title: 'Trabalhos Full Stack' },
  ];

  const cardsData = [
    {
      title: 'Site iPhone 17 Pro Max',
      description:
        'Um site de e-commerce para o lançamento do iPhone 17 Pro Max, focado em design moderno e experiência de usuário.',
      category: ['front-end'],
      image: '/img/cards/iPhone_17_Pro_Max.png',
      skills: ['Tailwindcss', 'React.js', 'Design'],
      link: 'https://i-phone-17-website.vercel.app/',
    },
    {
      title: 'Clinica Sensory',
      description:
        'Um site para a Clinica Sensory, focado em acessibilidade e experiência de usuário, utilizando as melhores práticas de desenvolvimento web.',
      category: ['front-end'],
      image: '/img/cards/Clinica_Sensory.png',
      skills: ['React.ts', 'Figma', 'Tailwindcss'],
      link: 'https://clinica-sensory.vercel.app/',
    },
    {
      title: 'Feedback Analytics',
      description:
        'Uma aplicação de análise de feedbacks, focada em arquitetura de software escalável e experiência de usuário intuitiva.',
      category: ['full-stack', 'front-end', 'design'],
      image: '/img/cards/Feedback_Analytics.png',
      skills: ['React.js', 'Node.js', 'Design'],
      link: 'https://feedback-analytics.vercel.app/',
    },
    {
      title: 'Convite de Aniversário',
      description:
        'Um convite digital para um aniversário, focado em design criativo e experiência de usuário envolvente.',
      category: ['design', 'front-end'],
      image: '/img/cards/Invitation.png',
      skills: ['React', 'Design', 'Tailwindcss'],
      link: 'https://convite-de-anivers-rio-khaki.vercel.app/',
    },
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === 'all') return true;
    const categories = Array.isArray(card.category)
      ? card.category
      : [card.category];
    return categories.includes(activeFilter);
  });

  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30">
      <div>
        <h1 className="font-montserrat text-3xl font-bold mb-4 text-(--tertiary-color)">
          Trabalhos Selecionados
        </h1>
        <p className="text-(--tertiary-color)/90 mb-6 font-work-sans">
          Uma demonstração dos meus trabalhos, focando em arquitetura de
          software, escalabilidade e experiência de usuário.
        </p>

        {/* Filtro */}
        <div data-dropdown className="relative w-max">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full text-white font-poppins font-semibold text-sm bg-(--primary-color) shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-(--primary-color)/80 transition duration-100 cursor-pointer"
            type="button"
          >
            {/* Ícone funil */}
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h18l-7 7v6l-4 2v-8L3 4z"
              />
            </svg>
            <span className="text-white/60 font-normal">Filtrar por:</span>
            <span>
              {filters.find((f) => f.value === activeFilter)?.label ?? 'Todos'}
            </span>
            <svg
              className={`w-4 h-4 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <ul className="absolute top-full mt-2 left-0 w-full z-50 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
              {filters.map((filter, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setActiveFilter(filter.value);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-sm font-poppins font-semibold transition duration-100 cursor-pointer
                                            ${
                                              activeFilter === filter.value
                                                ? 'bg-(--primary-color) text-white pointer-events-none'
                                                : 'text-(--tertiary-color) hover:bg-gray-200'
                                            }`}
                    type="button"
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="text-xs text-(--tertiary-color)/40 font-work-sans mt-6 mb-4 uppercase tracking-widest">
            {filters.find((f) => f.value === activeFilter)?.title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Cards
              items={filteredCards}
              className="flex-col"
              renderContent={(item) => (
                <>
                  <motion.a
                    initial="hidden"
                    whileHover="visible"
                    href={item.link}
                    target="_blank"
                    className="w-full h-40 relative overflow-hidden cursor-pointer"
                    rel="noopener"
                  >
                    <img
                      className="absolute inset-0 size-full shadow-md object-cover border border-white rounded-tr-md rounded-tl-md"
                      src={item.image}
                      alt={item.title}
                    />
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      className="bg-black/80 absolute inset-0 flex items-center justify-center"
                    >
                      <motion.img
                        variants={{
                          hidden: { scale: 0 },
                          visible: { scale: 1 },
                        }}
                        src="/svg/Arrow-rt.svg"
                        alt="Arrow top Right"
                      />
                    </motion.div>
                  </motion.a>

                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex flex-row gap-2 items-center justify-center">
                      {item.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-(--primary-color) text-white text-xs font-medium px-2 py-1 rounded w-full text-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-montserrat text-lg font-semibold mt-4 text-(--tertiary-color)">
                      {item.title}
                    </h3>
                    <p className="text-(--tertiary-color)/90 mt-2 font-work-sans">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 font-work-sans hover:underline block"
                    >
                      Visualizar Projeto
                    </a>
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
