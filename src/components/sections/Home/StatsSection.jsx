function StatsSection() {

    const stats = [
        { label: 'Anos de Experiência', value: '2+' },
        { label: 'Projetos Concluídos', value: '4' },
        { label: 'Clientes Satisfeitos', value: '3' }
    ]

    return (
        <section className="px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10 bg-(--tertiary-color)">
            {stats.map((stat, index) => (
                <div key={index} className="text-center border-t md:border-l md:border-t-0 border-gray-200 first:border-t-0 first:border-l-0 w-full p-10">
                    <h3 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2">
                        {stat.value}
                    </h3>
                    <p className="font-work-sans text-md text-gray-200">
                        {stat.label}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default StatsSection;