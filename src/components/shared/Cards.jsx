function Cards({ items, className }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Card map */}
            {items.map((item, index) => {
                return (
                    <div key={index} className={`border border-gray-300 shadow-md flex-1 hover:shadow-sm transition bg-white rounded-md p-6 flex flex-col ${className}`}>
                        <img className="size-12" src={item.image} alt={item.title} />
                        <h3 className="font-montserrat text-lg font-semibold mt-4">{item.title}</h3>
                        <p className="text-gray-700 mt-2 font-work-sans">{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;