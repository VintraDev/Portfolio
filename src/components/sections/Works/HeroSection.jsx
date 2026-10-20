import { motion } from 'motion/react';
import { useState } from 'react';
import { FaArrowUpRightFromSquare, FaGraduationCap } from 'react-icons/fa6';
import DropdownFilter from '@/components/shared/DropdownFilter';
import OptimizedImage from '@/components/shared/OptimizedImage';

function HeroSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'Todos', value: 'all', title: 'Todos os trabalhos' },
    { label: 'Front End', value: 'front-end', title: 'Trabalhos Front End' },
    { label: 'Design', value: 'design', title: 'Trabalhos de Design' },
    { label: 'Full Stack', value: 'full-stack', title: 'Trabalhos Full Stack' },
    {
      label: 'Educacionais',
      value: 'educational',
      title: 'Projetos educacionais · Rocketseat',
    },
  ];

  const cardsData = [
    {
      title: 'Site iPhone 17 Pro Max',
      description:
        'Um site de e-commerce para o lançamento do iPhone 17 Pro Max, focado em design moderno e experiência de usuário.',
      category: ['front-end'],
      image: '/img/cards/iPhone_17_Pro_Max.webp',
      skills: ['Tailwindcss', 'React.js', 'Design'],
      link: 'https://i-phone-17-website.vercel.app/',
    },
    {
      title: 'Clinica Sensory',
      description:
        'Um site para a Clinica Sensory, focado em acessibilidade e experiência de usuário, utilizando as melhores práticas de desenvolvimento web.',
      category: ['front-end'],
      image: '/img/cards/Clinica_Sensory.webp',
      skills: ['React.ts', 'Figma', 'Tailwindcss'],
      link: 'https://clinica-sensory.vercel.app/',
    },
    {
      title: 'Feedback Analytics',
      description:
        'Uma aplicação de análise de feedbacks, focada em arquitetura de software escalável e experiência de usuário intuitiva.',
      category: ['full-stack', 'front-end', 'design'],
      image: '/img/cards/Feedback_Analytics.webp',
      skills: ['React.js', 'Node.js', 'Design'],
      link: 'https://feedback-analytics.vercel.app/',
    },
    {
      title: 'Convite de Aniversário',
      description:
        'Um convite digital para um aniversário, focado em design criativo e experiência de usuário envolvendo.',
      category: ['design', 'front-end'],
      image: '/img/cards/Invitation.webp',
      skills: ['React', 'Design', 'Tailwindcss'],
      link: 'https://github.com/VintraDev/Convite-de-Anivers-rio',
    },
    {
      title: 'Nexus CRM Figma Design',
      description:
        'A prototipagem de um projeto focado em CRM da empresa Nexus Company, com design system completo.',
      category: ['design', 'front-end'],
      image: '/img/works/nexus-crm.webp',
      skills: ['Figma', 'Design'],
      link: 'https://www.figma.com/design/isnL6i1wxp2Ix6XSuYmQh0/Avex-Company?node-id=0-1&t=tYdAhajRaU9YXpsJ-1',
    },
    {
      title: 'DevRoast · NLW Operator',
      description:
        'Aplicação de revisão de código com IA, editor com destaque de sintaxe, modos de feedback e ranking global.',
      category: ['educational', 'full-stack'],
      image: '/img/rocketseat/NLW_DevRoast.webp',
      skills: ['Next.js', 'TypeScript', 'Gemini AI'],
      educational: true,
      link: 'https://github.com/VintraDev/rocketseat-vinicius-projects/tree/main/IA/NLW-Operator-RocketSeat',
    },
    {
      title: 'Board App',
      description:
        'Quadro de acompanhamento de issues com fluxo de trabalho, comentários, reações e rotas modais.',
      category: ['educational', 'full-stack'],
      image: '/img/rocketseat/board-app.webp',
      skills: ['Next.js', 'Drizzle', 'React Query'],
      educational: true,
      link: 'https://github.com/VintraDev/rocketseat-vinicius-projects/tree/main/Next/board-app',
    },
    {
      title: 'Dev Links',
      description:
        'Página de links para desenvolvedores com tema personalizável e conteúdo gerenciável via Prismic.',
      category: ['educational', 'front-end'],
      image: '/img/rocketseat/dev-links.webp',
      skills: ['Next.js', 'Prismic', 'Tailwind CSS'],
      educational: true,
      link: 'https://github.com/VintraDev/rocketseat-vinicius-projects/tree/main/Next/dev-links',
    },
    {
      title: 'Mundo Pet',
      description:
        'Agenda de pet shop com cadastro e gestão de horários, validação de formulários e persistência de dados.',
      category: ['educational', 'full-stack'],
      image: '/img/rocketseat/pet-shop.webp',
      skills: ['Next.js', 'Prisma', 'Zod'],
      educational: true,
      link: 'https://github.com/VintraDev/rocketseat-vinicius-projects/tree/main/Next/pet-shop',
    },
    {
      title: 'Site Blog',
      description:
        'Blog técnico com conteúdo em Markdown, busca e compartilhamento de artigos.',
      category: ['educational', 'front-end'],
      image: '/img/rocketseat/site-blog.webp',
      skills: ['Next.js', 'Contentlayer', 'Tailwind CSS'],
      educational: true,
      link: 'https://github.com/VintraDev/rocketseat-vinicius-projects/tree/main/Next/site-blog',
    },
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeFilter === 'all') return true;
    const categories = Array.isArray(card.category)
      ? card.category
      : [card.category];
    return categories.includes(activeFilter);
  });

  const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="px-6 md:px-10 lg:px-20 pt-10 bg-gray-50 lg:pt-30">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="font-heading text-3xl font-bold mb-4 text-(--tertiary-color)"
        >
          Trabalhos Selecionados
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.15 }}
          className="text-(--tertiary-color)/90 mb-6 font-body"
        >
          Uma demonstração dos meus trabalhos, focando em arquitetura de
          software, escalabilidade e experiência de usuário.
        </motion.p>

        {/* Filtro */}
        <DropdownFilter
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />

        <div>
          <p className="text-xs text-(--tertiary-color)/40 font-body mt-6 mb-4 uppercase tracking-widest">
            {filters.find((f) => f.value === activeFilter)?.title}
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-shadow duration-300 hover:border-(--primary-color)/30 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-(--tertiary-color)">
                  <OptimizedImage
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={`Prévia do projeto ${item.title}`}
                    width={720}
                    height={450}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-(--tertiary-color)/75 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 font-accent text-[11px] font-semibold text-(--tertiary-color) shadow-sm backdrop-blur-sm">
                    {item.educational
                      ? 'Rocketseat · Educacional'
                      : 'Projeto selecionado'}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  {item.educational && (
                    <span className="mb-3 inline-flex w-max items-center gap-1.5 rounded-full bg-(--primary-color)/10 px-2.5 py-1 font-accent text-[11px] font-semibold text-(--primary-color)">
                      <FaGraduationCap className="size-3" />
                      Projeto educacional
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-(--tertiary-color)">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-(--tertiary-color)/75">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-(--primary-color)/15 bg-(--primary-color)/7 px-2.5 py-1 font-accent text-[11px] font-medium text-(--tertiary-color)/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--primary-color) px-4 py-3 font-accent text-sm font-bold text-white transition-colors hover:bg-(--primary-color-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary-color)"
                    aria-label={`${item.educational ? 'Ver código' : 'Abrir projeto'} ${item.title} em uma nova aba`}
                  >
                    {item.educational
                      ? 'Ver código no GitHub'
                      : 'Abrir projeto'}
                    <FaArrowUpRightFromSquare className="size-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
