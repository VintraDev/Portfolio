function Timeline() {
  const timelineData = [
    {
      year: '2022 - 2026',
      title: 'Engenharia de Software',
      company: 'Uni Evangélica de Anápolis - GO',
      description:
        'Formação acadêmica em Engenharia de Software, com foco em desenvolvimento, metodologias ágeis e arquitetura de software.',
      type: 'education',
    },
    {
      year: '2022 - presente',
      title: 'Início no Desenvolvimento Web',
      company: 'Autodidata',
      description:
        'Aprofundamento em Figma, JavaScript, React, TailwindCSS, Vue e bibliotecas modernas de front-end através de projetos práticos.',
      type: 'education',
    },
    {
      year: '2023 - presente',
      title: 'Desenvolvedor e Suporte Técnico a websites',
      company: 'Freelancer',
      description:
        'Desenvolvimento e manutenção de websites para clientes, utilizando tecnologias modernas e garantindo uma experiência de usuário otimizada.',
      type: 'work',
    },
    {
      year: '2025 - presente',
      title: 'Aux. Administrativo CLT',
      company: 'Eletromotor Services LTDA.',
      description:
        'Responsável por tarefas administrativas, controle de estoque e suporte ao cliente, contribuindo para a eficiência operacional da empresa.',
      type: 'work',
    },
  ];

  // Componente do card da timeline
  const TimelineCard = ({ item }) => (
    <div className="bg-white border border-gray-100 rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-(--primary-color) bg-blue-50 rounded-full mb-3 font-body">
        {item.year}
      </span>

      <h3 className="font-heading text-lg md:text-xl font-bold text-(--tertiary-color) mt-1">
        {item.title}
      </h3>

      <p className="font-body text-sm md:text-base text-(--secondary-color) font-medium mt-1">
        {item.company}
      </p>

      <p className="font-body text-(--tertiary-color)/90 text-sm md:text-base mt-3 leading-relaxed">
        {item.description}
      </p>

      <div className="mt-4 flex items-center gap-2">
        {item.type === 'work' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-(--tertiary-color)/70 font-body">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="work-icon-title"
            >
              <title id="work-icon-title">Ícone de Experiência</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Experiência
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-(--tertiary-color)/70 font-body">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="education-icon-title"
            >
              <title id="education-icon-title">Ícone de Formação</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Formação
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="px-6 md:px-10 lg:px-20">
      {/* Layout Mobile/Tablet - Uma coluna */}
      <div className="lg:hidden relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

        {timelineData.map((item) => (
          <div
            key={item.title}
            className="relative flex items-start mb-10 md:mb-12"
          >
            <div className="absolute left-4 md:left-6 -translate-x-1/2 w-3 h-3 bg-(--primary-color) rounded-full ring-4 ring-white shadow-sm z-10 mt-30" />
            <div className="ml-12 md:ml-16 flex-1">
              <TimelineCard item={item} />
            </div>
          </div>
        ))}
      </div>

      {/* Layout Desktop - Linha central com cards alternados */}
      <div className="hidden lg:block relative">
        {/* Linha central */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

        {timelineData.map((item, index) => (
          <div key={item.title} className="relative flex items-center mb-12">
            {/* Marcador central */}
            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-(--primary-color) rounded-full ring-4 ring-white shadow-sm z-10" />

            {/* Card à esquerda (índices pares) */}
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-12">
                  <TimelineCard item={item} />
                </div>
                <div className="w-1/2" />
              </>
            ) : (
              <>
                <div className="w-1/2" />
                <div className="w-1/2 pl-12">
                  <TimelineCard item={item} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
