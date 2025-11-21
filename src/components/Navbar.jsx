import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
    const localizacao = useLocation();
    const [menuAberto, setMenuAberto] = useState(false);

    // 🔵 SCROLL PARA O HOME — cinematográfico
    const scrollParaHome = () => {
        gsap.to(window, {
            duration: 1.2,
            ease: "slow(0.7, 1.4, 0.7)",
            scrollTo: {
                y: 0,
                offsetY: 0
            }
        });

        setMenuAberto(false);
    };

    // 🔵 SCROLL PARA SOBRE NÓS — cinematográfico
    const scrollParaSobreNos = () => {
        gsap.to(window, {
            duration: 1.2,                         
            ease: "slow(0.7, 1.5, 0.7)",       
            scrollTo: {
                y: "#sobre-nos",
                offsetY: 120                 
            }
        });

        setMenuAberto(false);
    };

    const linkBase = `
        relative 
        after:absolute after:left-0 after:bottom-[-2px] 
        after:h-[2px] after:w-0 after:bg-[#AFC7FF] 
        hover:after:w-full 
        hover:text-[#AFC7FF]
        transition-all duration-200
    `;

    const linkAtivo = `
        text-[#AFC7FF]
        after:w-full 
        font-semibold
        drop-shadow-[0_0_6px_rgba(150,180,255,0.6)]
    `;

    const ehAtivo = (rota) =>
        localizacao.pathname === rota ? linkAtivo : "";

    return (
        <nav
            className="
                fixed top-0 left-0 
                w-full z-50 
                bg-transparent
                px-6 py-4
                flex justify-between items-center
            "
        >

            {/* LOGO → agora rola suavemente pro topo */}
            <button onClick={scrollParaHome} className="pointer-events-auto">
                <h1 className="font-bold text-xl tracking-tight text-white">
                    <span className="text-[#AFC7FF]">Postur</span>
                    <span className="text-white/90">AI</span>
                </h1>
            </button>

            {/* BOTÃO MOBILE */}
            <button
                className="md:hidden text-white text-3xl pointer-events-auto"
                onClick={() => setMenuAberto(!menuAberto)}
            >
                {menuAberto ? "✖" : "☰"}
            </button>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex gap-6 items-center text-lg font-semibold text-white/80 pointer-events-auto">

                {/* HOME → scroll suave */}
                <button
                    onClick={scrollParaHome}
                    className={`${linkBase} cursor-pointer`}
                >
                    Home
                </button>

                {/* SOBRE NÓS → scroll suave */}
                <button
                    onClick={scrollParaSobreNos}
                    className={`${linkBase} cursor-pointer`}
                >
                    Quem Somos
                </button>

                <Link
                    to="/download"
                    className={`${linkBase} ${ehAtivo("/download")}`}
                >
                    Tutorial
                </Link>
            </div>

            {/* MENU MOBILE */}
            {menuAberto && (
                <div className="fixed top-0 left-0 w-full h-screen 
                                flex flex-col items-center justify-center 
                                bg-black/90 z-40">

                    <button 
                        onClick={() => setMenuAberto(false)} 
                        className="absolute top-5 right-6 text-6xl text-[#AFC7FF]"
                    >
                        ×
                    </button>

                    <div className="flex flex-col items-center gap-6 text-2xl font-semibold text-white/90">
                        
                        {/* HOME MOBILE */}
                        <button
                            onClick={scrollParaHome}
                            className={`${linkBase}`}
                        >
                            Home
                        </button>

                        {/* SOBRE NÓS MOBILE */}
                        <button
                            onClick={scrollParaSobreNos}
                            className={`${linkBase}`}
                        >
                            Quem Somos
                        </button>

                        <Link 
                            to="/download" 
                            onClick={() => setMenuAberto(false)}
                            className={`${linkBase}`}
                        >
                            Tutorial
                        </Link>

                    </div>
                </div>
            )}

        </nav>
    );
}
