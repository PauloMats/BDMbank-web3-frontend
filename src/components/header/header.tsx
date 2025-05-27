'use client';
import React, { useState } from "react";
import DropdownIcon from "../DropdownIcon/DropdownIcon";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      {/* Linha superior decorativa */}
      <img src="/img/line.svg" alt="Top Line" className="w-full" />

      {/* NAVBAR PRINCIPAL */}
      <div className="flex justify-between items-center px-6 py-3 max-w-[1920px] mx-auto h-[77px]">
        {/* Logo */}
        <img
          src="/img/Logo-bdmbank.svg"
          className="h-[34px] w-auto"
          alt="Logo"
        />

        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-14 items-center">
          <div className="flex gap-2 text-base font-medium text-white">
            <span>Produtos</span> <DropdownIcon />
          </div>
          <div className="text-base font-medium text-white">App</div>
          <div className="text-base font-medium text-white">Contato</div>
          <div className="text-base font-medium text-white">Ajuda</div>
        </nav>

        {/* Ações - Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          <div className="flex gap-2.5">
            <img src="/img/br.svg" className="rounded-full h-[30px] w-[30px]" alt="BR" />
            <img src="/img/en.svg" className="rounded-full h-[30px] w-[30px]" alt="EN" />
            <img src="/img/es.svg" className="rounded-full h-[30px] w-[30px]" alt="ES" />
          </div>
          <button className="text-base font-medium text-white">Login</button>
          <button className="px-6 py-3 text-lg font-bold rounded bg-yellow-400 text-black hover:bg-yellow-500">
            Abrir conta
          </button>
        </div>

        {/* Botão menu mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-end space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-4 h-[2px] bg-white" />
          <span className="w-5 h-[2px] bg-white" />
        </button>
      </div>

      {/* Dropdown menu mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-black px-6 pb-6 space-y-4">
          <nav className="flex flex-col gap-4 text-white">
            <div className="flex gap-2 items-center">
              <span>Produtos</span> <DropdownIcon />
            </div>
            <span>App</span>
            <span>Contato</span>
            <span>Ajuda</span>
          </nav>
          <div className="flex gap-2 mt-4">
            <img src="/img/br.svg" className="rounded-full h-6 w-6" alt="BR" />
            <img src="/img/en.svg" className="rounded-full h-6 w-6" alt="EN" />
            <img src="/img/es.svg" className="rounded-full h-6 w-6" alt="ES" />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button className="text-base text-white">Login</button>
            <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded">
              Abrir conta
            </button>
          </div>
        </div>
      )}

      {/* Linha inferior decorativa */}
      <img src="/img/line.svg" alt="Bottom Line" className="w-full" />
    </header>
  );
};

export default Header;
