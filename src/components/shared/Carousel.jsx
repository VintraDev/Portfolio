import { useState, useEffect } from 'react';

function Carousel(items) {

    

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 overflow-x-auto py-4">
                {items.items.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-100 p-3 sm:p-4 rounded-md shadow-md shrink-0 w-full sm:flex-1 min-h-80 sm:min-h-96 relative flex flex-col justify-between"
                    >
                        <div className="flex-1 flex flex-col">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="h-40 sm:h-50 object-cover rounded-md mb-3 sm:mb-4 shadow-sm border border-gray-200 mx-auto w-full" 
                            />
                            <h3 className="font-montserrat text-base sm:text-lg font-semibold line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm sm:text-base mb-2 line-clamp-2 grow">
                                {item.description}
                            </p>
                        </div>
                        
                        <div>
                            <p className="text-gray-800 font-montserrat font-semibold text-sm sm:text-base mb-2">
                                Veja o Projeto
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                                <a 
                                    href={item.linkSite} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full sm:w-auto font-poppins font-semibold text-white bg-(--primary-color) px-4 py-2 text-xs sm:text-sm rounded-full hover:bg-(--secondary-color) transition-colors duration-100 border border-(--secondary-color) text-center"
                                >
                                    Ver Site
                                </a>
                                <a 
                                    href={item.linkGitHub} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full sm:w-auto font-poppins border font-medium rounded-full px-4 py-2 text-xs sm:text-sm hover:bg-gray-800 hover:text-gray-100 transition duration-100 border-gray-800 text-center"
                                >
                                    Ver GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-4 sm:mt-6" id="dots">
                <button className="w-8 sm:w-9 h-2 sm:h-3 rounded-full bg-(--primary-color) focus:outline-none cursor-pointer transition-all duration-300 hover:scale-110" />
                <button className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-gray-400 focus:outline-none cursor-pointer transition-all duration-300 hover:scale-110" />
            </div>
        </div>
    )
}

export default Carousel;