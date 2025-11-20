import Robot from "./Robot";
import Stack from "./Stack";

// importa as logos
import reactLogo from "../assets/simbolos/React.png";
import gsapLogo from "../assets/simbolos/GSAP.png";
import splineLogo from "../assets/simbolos/Spline.png";
import tailwindLogo from "../assets/simbolos/tailwind.png";
import viteLogo from "../assets/simbolos/vite-js-logo.png";

const techCards = [
  { id: 1, img: reactLogo },
  { id: 2, img: gsapLogo },
  { id: 3, img: splineLogo },
  { id: 4, img: tailwindLogo },
  { id: 5, img: viteLogo }
];

export default function RobotSection() {
  return (
    <section className="w-full flex justify-center mt-24 px-4">
      <div
        className="
          relative w-full max-w-7xl 
          bg-[#0e121a] border border-white/10 
          rounded-3xl p-10 overflow-hidden
        "
      >

        {/* Glow de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl -z-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

          {/* COLUNA ESQUERDA */}
<div className="w-full md:w-[48%] flex flex-col items-center md:items-start">
  <h2 className="text-4xl md:text-5xl font-bold  mb-4 text-[#AFC7FF] drop-shadow-[0_0_15px_rgba(100,150,255,0.45)]">
    Ferramentas utilizadas
  </h2>

  <p className="text-white/70 text-lg max-w-md text-center md:text-left">
    As tecnologias e ferramentas responsáveis por tornar o PosturAI possível.
  </p>

  {/* STACK CENTRALIZADO */}
  <div className="mt-10 flex justify-center w-full">
    <Stack
      randomRotation={true}
      sensitivity={180}
      sendToBackOnClick={true}
      cardDimensions={{ width: 170, height: 170 }}
      cardsData={techCards}
    />
  </div>
</div>


          {/* ROBÔ 100% correto */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end pointer-events-none">
            <div className="w-[65%] md:w-[75%] lg:w-[85%]">
              <Robot />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
