'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';
import { useEffect, useState, useCallback } from 'react';
import {
  Instagram,
  Youtube,
  Linkedin,
  MessageSquare,
  HelpCircle,
  Twitter,
  Facebook,
  TwitterIcon,
  XIcon,
  LucideTwitter
} from 'lucide-react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());


  return (
    <Container className="bg-[#02030F] text-white py-10 rounded-t-2xl">
      <div className="container mx-auto px-6 flex flex-col gap-10 md:flex-row md:justify-between">
        
        {/* Logo + Redes Sociais */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image
              src={"/img/Logo-bdmbank.svg"}
              alt="BDM Bank"
              width={160}
              height={40}
              className="h-auto"
              priority
            />
          </Link>
          <div className="flex gap-4 text-white text-xl">
            <Link href="#"><Twitter /></Link>
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Linkedin /></Link>
          </div>
        </div>

        {/* Suporte */}
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <MessageSquare className="w-5 h-5" />
            Atendimento a Clientes
          </Link>
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <HelpCircle className="w-5 h-5" />
            Perguntas Frequentes
          </Link>
        </div>

        {/* Navegação */}
        <div className="flex flex-col md:flex-row gap-10 text-sm">
          <div>
            <h4 className="font-bold mb-2">Produtos</h4>
            <ul className="space-y-1">
              <li><Link href="#">Cartão</Link></li>
              <li><Link href="#">Câmbio</Link></li>
              <li><Link href="#">Maquininha POS</Link></li>
              <li><Link href="#">Crédito PJ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#">Privacidade</Link></li>
              <li><Link href="#">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Empresa</h4>
            <ul className="space-y-1">
              <li><Link href="#">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10">
        ©{year} BDM BANK. todos os direitos Reservados 
        {/* // ADD CNPJ */}
      </div>
    </Container>
  );
}
