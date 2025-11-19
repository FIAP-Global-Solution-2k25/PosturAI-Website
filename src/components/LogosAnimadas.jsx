import LogoLoop from "./LogoLoop.jsx";

import fiap from "../assets/Carrosel/fiap-logo.png";
import ibm from "../assets/Carrosel/ibm-logo.png";
import inpe from "../assets/Carrosel/inpe-logo.png";
import medicina from "../assets/Carrosel/medicina-logo.png";

const imageLogos = [
  { src: fiap, alt: "FIAP" },
  { src: ibm, alt: "IBM" },
  { src: inpe, alt: "INPE" },
  { src: medicina, alt: "Medicina" }
];

export default function LogosAnimadas() {
  return (
    <div className="w-full bg-[rgba(255, 255, 255, 0.25)] flex justify-center border-t border-b border-white/10">
      <LogoLoop
        logos={imageLogos}
        speed={20}
        direction="left"
        gap={40}
        logoHeight={30}
        scaleOnHover={true}
      />
    </div>
  );
}