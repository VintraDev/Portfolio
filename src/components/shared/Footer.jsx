import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="">
            <div className="text-white font-work-sans text-md bg-(--primary-color) px-6 md:px-10 lg:px-20 py-8 md:py-12">
                <p>“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quam doloremque impedit! Ipsa rem, eum nemo quae eaque iure, omnis deleniti, porro natus fugit minus temporibus non deserunt a at.”</p>
            </div>
            <div className="bg-(--tertiary-color) border-t border-gray-100 px-6 md:px-10 lg:px-20 py-8 md:py-12">
                <div className="flex flex-col md:flex-row items-start justify-around gap-10">
                    <div className="flex-1">
                        <img src="/img/Logo White.png" alt="Logo White" className="w-1/2 rounded-xl" />
                        <p className="font-work-sans text-gray-100 mt-4">Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-montserrat font-bold text-white text-2xl">Links Rápidos</h2>
                        <ul className="font-work-sans mt-4 flex flex-col gap-2">
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/pages/About">Sobre</Link>
                            </li>
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/pages/Works">Trabalhos</Link>
                            </li>
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/pages/Services">Serviços</Link>
                            </li>
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/pages/Gallery">Galeria</Link>
                            </li>
                            <li>
                                <Link className="text-gray-50 hover:text-gray-300" to="/pages/Contact">Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-montserrat font-bold text-white text-2xl">Minhas Redes</h2>
                        <ul className="font-work-sans mt-4 flex gap-4">
                            <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100"><a target="_blank" href="https://github.com/RosiestSloth"><img src="svg/GitHub.svg" alt="" /></a></li>
                            <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100"><a target="_blank" href="https://instagram.com/vinicius___santos1"><img src="svg/Instagram.svg" alt="" /></a></li>
                            <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100"><a target="_blank" href="https://wa.me/5562992846807"><img src="svg/WhatsApp.svg" alt="" /></a></li>
                            <li className="hover:scale-105 hover:bg-gray-50/20 p-2 rounded-md transition duration-100"><a target="_blank" href="https://linkedin.com/in/rosiestsloth"><img src="svg/LinkedIn.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-300 border-t border-t-gray pt-10 mt-10">© 2024 Vinicius Santos. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;