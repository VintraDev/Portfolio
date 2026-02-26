import Cards from "../../shared/Cards";

function ServicesSection() {

    const items = [
        { image: 'svg/Design_Icon.svg', title: 'Design de Interface', description: 'Criação de interfaces intuitivas e visualmente impactantes que proporcionam experiências memoráveis aos usuários.' },
        { image: 'svg/Web_Development_Icon.svg', title: 'Desenvolvimento Web', description: 'Desenvolvimento de sites e aplicações web modernas, responsivas e otimizadas para performance máxima.' },
        { image: 'svg/Maintenance_Icon.svg', title: 'Manutenção e Suporte', description: 'Suporte contínuo e manutenção proativa para garantir que seus projetos estejam sempre atualizados.' }
    ];

    return (
        <section className="px-6 md:px-10 lg:px-20 py-10 md:py-16 bg-gray-50 flex flex-col items-center">
            <p className="text-(--secondary-color) text-center font-work-sans text-md md:text-lg lg:text-xl font-medium mb-4">
                O QUE FAÇO?
            </p>
            <h3 className="text-center font-bold font-montserrat text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 w-full md:w-120 lg:w-200">
                Serviços Personalizados para Seus Objetivos
            </h3>
            <Cards 
                items={items}
            />
        </section>
    )
}

export default ServicesSection;