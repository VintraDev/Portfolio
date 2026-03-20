import Cards from "../../shared/Cards";

function FeatureSection() {

    const features = [
        {
            image: '/svg/Vite.svg',
            title: 'React & Vite',
            description: 'Desenvolvimento Front End utilizando a biblioteca React com Vite, utilizando boas práticas e construção de componentes reutilizáveis.'
        },
        {
            image: '/svg/Tailwindcss.svg',
            title: 'Tailwind CSS',
            description: 'Estilização com Tailwind CSS, biblioteca avançada e moderna, performance otimizada e um design system escalável.'
        },
        {
            image: '/svg/Nuxt.svg',
            title: 'Vue & Nuxt',
            description: 'Desenvolvimento Front End utilizando o framework Nuxt com Vue, utilizando boas práticas e construção de componentes reutilizáveis.'
        }
    ]

    return (
        <section className="px-6 md:px-10 lg:px-20 py-10 bg-linear-to-br from-(--primary-color) via-(--secondary-color) to-(--tertiary-color) grid grid-cols-1 md:grid-cols-3 gap-4">
            <Cards items={features} className='p-4' />
        </section>
    )
}

export default FeatureSection;