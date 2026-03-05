import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/pages/About", label: "Sobre" },
        { to: "/pages/Works", label: "Trabalhos" },
        { to: "/pages/Services", label: "Serviços" },
        { to: "/pages/Gallery", label: "Galeria" },
        { to: "/pages/Contact", label: "Contato" },
    ];

    return (
        <>
            {/* Botão hambúrguer */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden fixed top-4 right-4 z-100 w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-gray-100/70 backdrop-blur-sm rounded-full shadow-md border border-gray-300 cursor-pointer"
                aria-label="Toggle menu"
            >
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
    
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="lg:hidden pointer-events-none fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />
            )}
    
            {/* Drawer MOBILE */}
            <aside className={`
                lg:hidden fixed z-50 top-0 right-0 h-full w-64 p-6
                flex flex-col justify-center
                bg-gray-100/70 backdrop-blur-sm shadow-md border-l border-gray-300
                transition-transform duration-300
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <nav>
                    <ul className="flex flex-col gap-2 font-medium text-lg">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <Link to={to} className="w-full rounded-full h-14 flex items-center justify-center text-(--tertiary-color) hover:bg-gray-800/20 transition-colors duration-100 cursor-pointer" onClick={() => setMenuOpen(false)}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
    
            {/* Header DESKTOP — pill centralizada */}
            <header className={`
                hidden lg:flex fixed z-50
                flex-row items-center justify-center
                bg-gray-100/70 backdrop-blur-sm shadow-md border border-gray-300
                rounded-full p-2
                left-1/2 -translate-x-1/2
                transition-all duration-300
                ${isScrolled ? 'top-8' : 'top-4'}
            `}>
                <nav>
                    <ul className="flex flex-row items-center justify-center gap-2 font-medium text-lg">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <Link className="w-30 rounded-full h-14 flex items-center justify-center hover:bg-gray-800/20 text-(--tertiary-color) transition-colors duration-100 cursor-pointer" to={to}>{label}</Link>
                            </li>
                        ))}
                        <li>
                            <div className="relative w-14 hover:w-35 transition-all cursor-pointer h-14 overflow-hidden rounded-full bg-white border border-gray-200">
                                <img src="/img/Logo White.png" className="size-full absolute object-cover object-left top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" alt="" />
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;