'use client';
import React from "react";
import DropdownIcon from "../DropdownIcon/DropdownIcon";

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-black z-50">
      {/* 🔹 Linha superior */}
      <img src="/img/line.svg" alt="Top Line" className="w-full" />

      {/* 🔹 Navbar */}
      <div className="flex justify-between items-center px-9 py-3 max-w-[1920px] mx-auto h-[77px] max-sm:px-5">
        <img src="/img/Logo-bdmbank.svg" className="h-[34px] w-[335px]" alt="Logo" />

        <nav className="flex gap-14 items-center max-md:gap-10 max-sm:hidden">
          <div className="flex gap-2 items-center text-base font-medium text-white">
            <span>Produtos</span>
            <DropdownIcon />
          </div>
          <div className="text-base font-medium text-white">App</div>
          <div className="text-base font-medium text-white">Contato</div>
          <div className="text-base font-medium text-white">Ajuda</div>
        </nav>

        <div className="flex gap-2.5 items-center max-sm:hidden">
          <img src="/img/pt.svg" className="rounded-full h-[50px] w-[50px]" alt="BR" />
          <img src="/img/en.svg" className="rounded-full h-[30px] w-[30px]" alt="EN" />
          <img src="/img/es.svg" className="rounded-full h-[30px] w-[30px]" alt="ES" />
        </div>

        <div className="flex gap-6 items-center max-sm:hidden">
          <button className="text-base font-medium text-white">Login</button>
          <button className="px-8 py-3 text-lg font-bold rounded bg-yellow-400 text-black hover:bg-yellow-500">
            Abrir conta
          </button>
        </div>
      </div>

      {/* 🔹 Linha inferior */}
      <img src="/img/line.svg" alt="Bottom Line" className="w-full" />
    </header>
  );
};

export default Header;
