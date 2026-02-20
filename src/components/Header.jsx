import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="fixed bg-gray-100/70 p-2 lg:p-4 shadow-md backdrop-blur-sm rounded-full left-1/2 -translate-x-1/2 top-4 border-gray-300 flex items-center justify-center">
            <nav>
                <ul className="flex flex-row items-center justify-center gap-2 font-medium text-lg">
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/pages/About"
                        >
                            Sobre
                        </Link>
                    </li>
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/pages/Works"
                        >Trabalhos</Link>
                    </li>
                    <li className="">
                        <div className="relative w-14 hover:w-35 transition-all cursor-pointer h-14 overflow-hidden rounded-full">
                            <img src="/img/Logo White.png" className="size-full absolute object-cover object-left top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" alt="" />
                        </div>
                    </li>
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/pages/Services"
                        >
                            Serviços
                        </Link>
                    </li>
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/pages/Gallery"
                        >
                            Galeria
                        </Link>
                    </li>
                    <li className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer">
                        <Link
                            to="/pages/Contact"
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;