import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-10 bg-gray-50">
      <div className="rounded-lg text-center relative overflow-hidden min-h-90 md:min-h-90 flex">
        <div className="bg-white/20 border border-(--tertiary-color)/20 shadow-[0_0px_4px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-lg p-10 absolute z-10 inset-0 flex flex-col items-center justify-center">
          <h2 className="font-montserrat text-2xl lg:text-3xl font-bold mb-4 text-(--tertiary-color)">
            Tem algum projeto em mente?
          </h2>
          <p className="text-(--tertiary-color)/90 mb-6 text-md md:text-lg font-work-sans">
            Estou aberto a novas contribuições no desenvolvimento de software
            para aplicações web. Vamos desenvolver algo incrível juntos!
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
            <Link
              to="/contact"
              className="bg-(--primary-color) hover:bg-(--primary-color)/60 text-white font-poppins font-bold py-2 px-8 rounded-full transition-colors duration-100  border border-(--primary-color) shadow-[0_0px_4px_rgba(0,0,0,0.3)]"
              type="button"
            >
              Contate-me
            </Link>
            <a
              href="/resume"
              className="text-(--tertiary-color) font-semibold transition border rounded-full border-(--tertiary-color) py-2 px-8 font-poppins hover:bg-(--tertiary-color)/20"
              target="_blank"
              rel="noopener"
            >
              Meu currículo
            </a>
          </div>
        </div>
        <div className="absolute bg-(--primary-color) rounded-full size-30 md:size-40 lg:size-50 -bottom-20 md:-bottom-1/3 left-4" />
        <div className="absolute bg-(--primary-color) rounded-full size-30 md:size-40 lg:size-50 -top-20 md:-top-1/3 right-4" />
      </div>
    </section>
  );
}

export default CTASection;
