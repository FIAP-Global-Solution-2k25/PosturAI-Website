import TextoRotativo from "../components/TextoRotativo";
import LogosAnimadas from "../components/LogosAnimadas";
import CartaoResponsivo from "../components/CartaoResponsivo";

export default function Home() {
    return (
        <div className="relative w-full overflow-x-hidden flex flex-col text-white bg-black">

            {/* HERO */}
                <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center ">
                    
                    <h1 className="
                        text-4xl md:text-6xl lg:text-7xl 
                        font-extrabold tracking-tight 
                        flex flex-wrap justify-center items-center gap-4
                    ">
                        <span>Melhore sua&nbsp;</span>

                        <span className="inline-flex items-center">
                            <TextoRotativo
                                texts={["Postura", "Saúde", "Vida"]}
                                mainClassName="
                                    inline-block
                                    w-[210px] md:w-[240px] lg:w-[270px]
                                    text-center px-3 py-1.5
                                    rounded-lg bg-white/5 backdrop-blur-sm
                                "
                                initial={{ y: "50%", opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1.05 }}
                                exit={{ y: "-40%", opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", damping: 22, stiffness: 250 }}
                            />
                        </span>

                        <span>&nbsp;com o</span>

                        <span className="text-[#AFC7FF] drop-shadow-[0_0_15px_rgba(100,150,255,0.45)]">
                            &nbsp;PosturAI
                        </span>
                    </h1>

                    <p className="max-w-2xl mt-6 text-lg md:text-xl text-white/80">
                        O PosturAI monitora sua postura em tempo real usando Inteligência Artificial,
                        prevenindo dores, lesões e melhorando sua qualidade de vida.
                    </p>

                    <div className="mt-10 flex gap-5">
                        <a
                            href="/download"
                            className="px-7 py-3 text-black bg-[#AFC7FF] hover:bg-white/30 hover:text-white
                                       backdrop-blur-lg border border-white/30 rounded-xl transition-all duration-300"
                        >
                            Baixar Aplicativo
                        </a>

                        <a
                            href="#como-funciona"
                            className="px-7 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg 
                                       border border-white/20 rounded-xl transition-all duration-300"
                        >
                            Saiba Mais
                        </a>
                    </div>

                </section>

            {/* LOGOS */}
            <LogosAnimadas />

            {/* COMO FUNCIONA */}
            <section id="como-funciona" className="px-6 py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Como funciona?</h2>

                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <CartaoResponsivo>
                            <h3 className="text-xl font-semibold mb-4">Monitoramento em tempo real</h3>
                            <p className="opacity-80">
                                A IA detecta sua postura automaticamente usando visão computacional.
                            </p>
                        </CartaoResponsivo>

                        <CartaoResponsivo>
                            <h3 className="text-xl font-semibold mb-4">Alertas inteligentes</h3>
                            <p className="opacity-80">
                                O sistema vibra, alerta ou mostra feedback visual quando você entorta.
                            </p>
                        </CartaoResponsivo>

                        <CartaoResponsivo>
                            <h3 className="text-xl font-semibold mb-4">Relatórios e progresso</h3>
                            <p className="opacity-80">
                                Acompanhe sua evolução e descubra quando sua postura melhora.
                            </p>
                        </CartaoResponsivo>
                    </div>
                </section>
            {/* ... demais seções iguais, já ajustadas ... */}

        </div>
    );
}
