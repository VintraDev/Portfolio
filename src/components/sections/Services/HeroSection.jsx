import Cards from '../../shared/Cards';

const items = [
  {
    image: '/svg/blockchain.svg',
    title: 'Desenvolvimento Web',
    description:
      'Aplicações web customizadas construídas com React, Vue e arquiteturas modernas otimizadas para melhor performance.',
  },
  {
    image: '/svg/color_pallete.svg',
    title: 'UX/UI Design',
    description:
      'Interfaces criadas com foco em usabilidade, comunicação e acessibilide construídas com foco em usabilidade e interatividade.',
  },
  {
    image: '/svg/focus.svg',
    title: 'Melhoria Contínua',
    description:
      'Manter seu website atualizado, seguro e funcionando sem problemas com melhorias contínuase otimização de desempenho.',
  },
];

function HeroSection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 mt-10 lg:mt-20">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <p className="text-(--primary-color) text-sm">SOLUÇÕES & QUALIDADE</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-(--tertiary-color)">
            Meus Serviços Especializados
          </h1>
          <p className="text-(--tertiary-color) font-body">
            Contribuindo e construindo projetos escaláveis, profissionais e de
            alta performance. Da prototipação inicial ao deploy final.
          </p>

          <img
            className="mt-4 object-cover rounded-md border-2 border-(--primary-color) md:hidden"
            src="/img/FeedbackAnalytics.png"
            alt="Feedback Analytics"
          />

          <div className="flex flex-col mt-4">
            <Cards
              items={items}
              renderContent={(item) => (
                <div className="flex flex-row items-center gap-3 p-4">
                  <img
                    className="w-12 shrink-0"
                    src={item.image}
                    alt={item.title}
                  />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-(--tertiary-color)">
                      {item.title}
                    </h3>
                    <p className="text-(--tertiary-color)/90 mt-1 font-body text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden rounded-l-md border-2 border-(--primary-color) border-r-0 -right-6 md:-right-10 lg:-right-20 hidden md:block">
          <img
            className="absolute right-0 w-full h-full object-cover object-left"
            src="/img/FeedbackAnalytics.png"
            alt="Feedback Analytics"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
