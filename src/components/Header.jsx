import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* TOPO */}
      <div className="bg-[#0a1c78] text-white py-4 px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
        </Link>

        {/* BOTÃO MENU MOBILE */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex gap-10 font-medium">
            <li><Link to="/pastor" className="hover:underline">Pastor</Link></li>
            <li>
              <button
                onClick={() => {
                  const sec = document.getElementById("empresas");
                  sec?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:underline"
              >
                Empresas Parceiras
              </button>
            </li>
            <li><Link to="/dizimos" className="hover:underline">Dízimos e Ofertas</Link></li>
          </ul>
        </nav>
      </div>

      {/* SEGUNDO MENU DESKTOP */}
      <div className="bg-[#3c50bb] text-white py-2 px-4 hidden md:block">
        <nav className="w-full">
          <ul className="flex gap-6 justify-center font-medium text-sm">
            <li><Link to="/jovens" className="hover:underline">Jovens</Link></li>
            <li><Link to="/adolescentes" className="hover:underline">Adolescentes</Link></li>
            <li><Link to="/irmas" className="hover:underline">Irmãs</Link></li>
          </ul>
        </nav>
      </div>

      {/* MENU MOBILE ABERTO */}
      {open && (
        <div className="bg-[#0a1c78] text-white px-6 py-4 md:hidden space-y-4 font-medium">
          <Link to="/pastor" onClick={() => setOpen(false)}>Pastor</Link><br />
          <button
            onClick={() => {
              const sec = document.getElementById("empresas");
              sec?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            Empresas Parceiras
          </button><br />
          <Link to="/dizimos" onClick={() => setOpen(false)}>Dízimos e Ofertas</Link><br />
          
          <hr className="border-white/40" />

          <Link to="/jovens" onClick={() => setOpen(false)}>Jovens</Link><br />
          <Link to="/adolescentes" onClick={() => setOpen(false)}>Adolescentes</Link><br />
          <Link to="/irmas" onClick={() => setOpen(false)}>Irmãs</Link><br />
        </div>
      )}
    </header>
  );
}
