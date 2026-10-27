import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 bg-neutral-950 border-t border-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-900">
          <div>
            <a href="/" className="text-lg font-bold tracking-tight text-white block mb-2">
              Vortex Studio
            </a>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Estúdio de engenharia e design para websites de alta performance, e-commerce e produtos digitais.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-400">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Vortex Web Studio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>São Paulo, SP · Atendimento Nacional & Global</span>
            <span aria-hidden="true">·</span>
            <span>WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
