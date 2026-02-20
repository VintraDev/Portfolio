function Hero() {
    return (
        <section className="px-10 overflow-hidden">
            <div className="relative h-screen">

                <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-snug absolute left-1/2 -translate-x-1/2 top-34 w-110 md:w-130 lg:w-150">
                    Sou <span className="text-(--primary-color)">Vinicius</span> Desenvolvedor WEB
                </h1>

                <p className="w-full md:w-70 lg:w-100 text-left text-xl font-work-sans absolute md:left-10 bottom-140 md:bottom-100">
                    "Podemos ver apenas uma curta distância à frente, mas podemos ver que há muito a ser feito." <br />— <span className="font-semibold">Alan Turing</span>
                </p>

                <div className="absolute md:right-10 top-100 md:top-1/2 md:-translate-y-1/2">
                    <p className="font-work-sans text-md lg:text-2xl font-medium">
                        Desenvolvedor web Front End
                    </p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-0">
                    <div className="relative">
                        <img className="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 object-cover size-130 md:size-160 lg:size-200" src="img/Photograpy.png" alt="" />
                        <div className="absolute bg-(--primary-color) rounded-full size-160 lg:size-220 left-1/2 -translate-x-1/2 -bottom-80 lg:-bottom-100" />
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex gap-2 rounded-full bg-gray-100/30 p-2 backdrop-blur shadow-md border border-gray-400">
                    <button type="button" className="text-white font-poppins font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100">Contate-me</button>
                    <button type="button" className="text-white font-poppins font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100">Currículo</button>
                </div>
            </div>
        </section>
    )
}

export default Hero