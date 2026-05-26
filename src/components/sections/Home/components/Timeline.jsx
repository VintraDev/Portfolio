import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';

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
            <FaBriefcase className="w-4 h-4" />
            Trabalho
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-(--tertiary-color)/70 font-body">
            <FaGraduationCap className="w-4 h-4" />
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
