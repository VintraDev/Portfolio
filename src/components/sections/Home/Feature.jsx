import Carousel from "../../shared/Carousel";

function Feature() {

    const items = [
        {
            img: 'img/cards/iPhone_17_Pro_Max.png', title: 'Site iPhone 17 Pro Max', description: 'Um site de vendas de iPhones, com um design moderno e responsivo, utilizando React e Tailwind CSS.', linkSite: 'https://i-phone-17-website.vercel.app/', linkGitHub: 'https://github.com/RosiestSloth/iPhone-17-Website'
        },
        {
            img: 'img/cards/Clínica_Sensory.png', title: 'Site Clínica Sensory', description: 'Um site para uma clínica de saúde, com um design moderno e responsivo, utilizando Nuxt e Tailwind CSS.', linkSite: 'https://clinica-sensory.vercel.app/', linkGitHub: 'https://github.com/RosiestSloth/Clinica-Sensory'
        },
        {
            img: 'img/cards/Feedback_Analytics.png', title: 'Feedback Analytics', description: 'Um sistema de coleta de feedbacks, com um design moderno e responsivo, utilizando React e Tailwind CSS.', linkSite: 'https://feedback-analytics.vercel.app/', linkGitHub: 'https://github.com/RosiestSloth/Ordem-de-Servicos'
        }
    ];

    return (
        <section className="bg-linear-to-br from-(--secondary-color) to-(--tertiary-color) px-6 md:px-10 lg:px-20 py-10 md:py-16">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-10">
                Meus Trabalhos
            </h2>
            <div className="">
                <Carousel items={items} />
            </div>
            <p className="font-work-sans text-gray-200 mt-4">
                Estes são alguns dos meus projetos mais recentes, onde aplico minhas habilidades em desenvolvimento web para criar soluções inovadoras e funcionais. Cada projeto reflete meu compromisso com a qualidade e a excelência, demonstrando minha capacidade de transformar ideias em realidade através do código.
            </p>
        </section>
    )
}

export default Feature;