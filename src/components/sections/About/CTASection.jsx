import { Link } from "react-router-dom";

function CTASection() {
    return (
        <section>
            
            <img src="/svg/TriangleBG.svg" className="w-full lg:hidden" alt="Triangle SVG" />
            <img src="/svg/TriangleBGDesktop.svg" className="w-full hidden lg:block" alt="Triangle SVG" />
            <div className="px-6 md:px-10 lg:px-20 py-10 relative max-w-screen overflow-hidden bg-(--secondary-color)">
                <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-gray-100 text-center">
                    Vamos construir algo incrível juntos?
                </h2>
                <p className="font-work-sans text-center mb-6 text-gray-200">
                    Atualmente, estou aberto a novas oportunidades e colaborações interessantes no setor de desenvolvimento web Front End e Design UX/UI
                </p>
                <Link to='/pages/Contact' className="bg-(--primary-color) hover:bg-(--primary-color)/60 text-white font-poppins font-bold py-2 px-8 rounded-full transition-colors duration-100 block w-max mx-auto border border-white hover:border-gray-100">
                    Contate-me
                </Link>
            </div>
        </section>
    )
}

export default CTASection;