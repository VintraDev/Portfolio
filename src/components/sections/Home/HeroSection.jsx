import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="overflow-hidden px-4 md:px-10">
      <div className="relative h-screen min-h-220 md:min-h-240">
        <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold md:text-center leading-snug absolute left-1/2 -translate-x-1/2 top-34 w-full md:w-130 lg:w-170 text-(--tertiary-color)">
          Sou <span className="text-(--primary-color)">Vinicius</span>{' '}
          Desenvolvedor WEB
        </h1>

        <p className="w-full md:w-70 lg:w-100 text-left text-xl font-work-sans absolute md:left-10 top-70 md:top-100 text-(--tertiary-color)/90">
          "Podemos ver apenas uma curta distância à frente, mas podemos ver que
          há muito a ser feito." <br />—{' '}
          <span className="font-semibold">Alan Turing</span>
        </p>

        <p className="font-work-sans text-lg lg:text-2xl font-medium absolute md:right-10 hidden md:inline-block top-100 text-(--tertiary-color)/90">
          Desenvolvedor web Front End
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 w-full bottom-0">
          <div className="relative">
            <img
              className="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 object-cover size-130 md:size-160 lg:size-200"
              src="img/Photograpy.png"
              alt=""
            />
            <div className="absolute bg-(--primary-color) rounded-full size-160 lg:size-220 left-1/2 -translate-x-1/2 -bottom-80 lg:-bottom-100" />
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex gap-2 rounded-full bg-gray-100/30 p-2 backdrop-blur shadow-md border border-gray-400">
          <Link
            to="/contact"
            className="text-white flex items-center justify-center font-poppins font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100"
          >
            Contate-me
          </Link>
          <a
            href="/resume"
            className="text-white flex items-center justify-center font-poppins font-medium text-md rounded-full hover:bg-black/20 cursor-pointer w-35 h-12 transition duration-100"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
