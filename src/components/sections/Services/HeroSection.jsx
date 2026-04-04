import Cards from "../../shared/Cards";


const items = [
    {
        image: '/svg/blockchain.svg',
        title: 'Desenvolvimento Web',
        description: 'Aplicações web customizadas construídas com React, Vue e arquiteturas modernas otimizadas para melhor performance.'
    },
    { 
        image: '/svg/color_pallete.svg', 
        title: 'UX/UI Design', 
        description: 'Interfaces criadas com foco em usabilidade, comunicação e acessibilide construídas com foco em usabilidade e interatividade.' 
    },
    {
        image: '/svg/focus.svg',
        title: 'Melhoria Contínua',
        description: 'Manter seu website atualizado, seguro e funcionando sem problemas com melhorias contínuase otimização de desempenho.'
    }
];

function HeroSection() {
    return (
        <section className="flex gap-4 flex-row">
            <div className="flex-1">
                <p>SOLUÇÕES & QUALIDADE</p>
                <h1>
                    Meus Serviços Especializados
                </h1>
                <p>
                    Contribuindo e construindo projetos escaláveis, profissionais e de alta performance. Dos primeiros componentes ao deploy final.
                </p>
                <div className="flex flex-col">
                    <Cards items={items} />
                </div>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-l-md border-2 border-(--primary-color) border-r-0">
                <img className="absolute right-0 h-full object-cover object-left" src="/img/FeedbackAnalytics.png" alt="Feedback Analytics picture" />
            </div>
        </section>
    )
}

export default HeroSection;