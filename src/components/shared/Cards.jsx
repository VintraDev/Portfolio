function Cards({ items }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {items.map((item, index) => {
                return (
                    <div key={index} className="border border-gray-200 shadow-md flex-1 hover:shadow-sm transition duration-100 bg-white rounded-md p-6">
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