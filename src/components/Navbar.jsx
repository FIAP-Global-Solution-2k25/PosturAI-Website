import { Link } from "react-router-dom";
import logo from "../assets/PosturAI-LOGO.png";

export default function Navbar() {
  return (
    <nav
      className="fixed left-1/2 top-8 flex w-fit -translate-x-1/2 items-center gap-6
                 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2
                 text-sm text-neutral-300"
    >
      {/* Logo + título */}
      <Link to="/" className="flex items-center gap-2 hover:opacity-80">
        <img src={logo} alt="Logo PosturAI" className="h-10" />
        <h1 className="font-bold text-xl text-neutral-50">PosturAI</h1>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex h-[20px] items-center hover:text-neutral-50">
          Home
        </Link>

        <Link
          to="/download"
          className="
            relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap
            rounded-lg border border-neutral-700 px-4 py-1.5 font-medium
            text-neutral-300 transition-all duration-300
            before:absolute before:inset-0 before:-z-10 before:translate-y-full
            before:scale-[2.5] before:rounded-full before:bg-neutral-50
            before:transition-transform before:duration-1000 before:content-['']
            hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
            hover:before:translate-y-0 active:scale-100
          "
        >
          Download
        </Link>

        <Link to="/about" className="flex h-[20px] items-center hover:text-neutral-50">
          About
        </Link>
      </div>
    </nav>
  );
}