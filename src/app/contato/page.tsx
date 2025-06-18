"use client";

import React from 'react';

const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;


type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

const FormInput: React.FC<FormInputProps> = ({ id, label, type = 'text', placeholder, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {children}
      </span>
      <input
        type={type}
        id={id}
        name={id}
        className="block w-full bg-white text-gray-900 rounded-md border-gray-300 pl-10 p-3 focus:ring-amber-500 focus:border-amber-500 transition"
        placeholder={placeholder}
      />
    </div>
  </div>
);


export default function ContactPage() {
  const backgroundImageUrl = '/img/img-banco-suporte.png';

  return (
    <main className="bg-[#0D1117]">
      {/* --- Seção Superior (Hero) --- */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
      >
        {/* Imagem de fundo com overlay escuro */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        {/* Conteúdo de Texto */}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Entre em contato
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Dúvidas, sugestões ou precisando de suporte? <br/>
            Envie sua solicitação através do formulário abaixo.
          </p>
        </div>
      </section>

      {/* --- Seção do Formulário --- */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Estamos aqui para ajudar
          </h2>
          <p className="mt-2 text-gray-400">
            Envie sua mensagem que responderemos o mais rápido possível!
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <FormInput id="nome" label="Nome" placeholder="Insira seu nome">
                <UserIcon />
              </FormInput>

              {/* Campo Celular */}
              <FormInput id="celular" label="Celular" type="tel" placeholder="Insira seu celular">
                <PhoneIcon />
              </FormInput>

              {/* Campo Email (ocupa duas colunas) */}
              <div className="md:col-span-2">
                <FormInput id="email" label="Email" type="email" placeholder="Insira seu email">
                  <EmailIcon />
                </FormInput>
              </div>

              {/* Campo Mensagem (ocupa duas colunas) */}
              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  className="block w-full bg-white text-gray-900 rounded-md border-gray-300 p-3 focus:ring-amber-500 focus:border-amber-500 transition"
                  placeholder="Como podemos te ajudar?"
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-amber-500 text-black font-bold py-3 px-12 rounded-md hover:bg-amber-600 transition-all duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}