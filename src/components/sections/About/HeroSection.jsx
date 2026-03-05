function Hero() {
    return (
        <section className="px-6 md:px-10 lg:px-20 py-10 md:py-16 mt-10 lg:mt-20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-2 relative z-10">
                <div className="relative border-(--primary-color) border-2 rounded-full h-8 w-78">
                    <span className="bg-(--primary-color) size-4 rounded-full absolute left-4 border-2 border-white top-1/2 -translate-y-1/2" />
                    <div className="bg-(--primary-color)/70 blur-md animate-pulse absolute size-10 left-0 top-1/2 -translate-y-1/2 -z-1" />
                    <p className="absolute right-4 top-1/2 -translate-y-1/2  font-poppins font-semifold">Disponível para novos projetos</p>
                </div>
                <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
                    Meu nome é <span className="text-(--primary-color) inline md:block">Vinicius Santos</span>
                </h1>
                <p className="font-work-sans leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veniam omnis totam repellendus alias ad provident illum unde error pariatur placeat voluptatum perferendis assumenda obcaecati, tenetur, ab necessitatibus impedit facere?
                </p>
            </div>
            <div className="relative flex-1">
                <img src="/svg/BlueBackground.svg" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
            </div>
        </section>
    )
}

export default Hero;