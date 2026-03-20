function Cards({ items, className, renderContent }) {
    
    // Conteúdo padrão caso nenhum renderContent seja passado
    const defaultContent = (item) => (
        <>
            <img className="size-12" src={item.image} alt={item.title} />
            <h3 className="font-montserrat text-lg font-semibold mt-4 text-(--tertiary-color)">
                {item.title}
            </h3>
            <p className="text-(--tertiary-color)/90 mt-2 font-work-sans">
                {item.description}
            </p>
        </>
    );

    const content = renderContent ?? defaultContent;

    return (
        <>
        {items.map((item, index) => (
            <div key={index} className={`border border-gray-300 overflow-hidden shadow-md flex-1 bg-white rounded-md flex flex-col ${className}`}>
                {content(item)} {/* ← chama a função com o item */}
            </div>
        ))}
        </>
    );
}

export default Cards;