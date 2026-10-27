import React, { useState } from 'react';
import { ClinicBrandLogo } from './ClinicBrandLogo';
import { Menu, X, MessageCircle } from 'lucide-react';

interface ClinicHeaderProps {
  onScheduleClick: () => void;
}

export const ClinicHeader: React.FC<ClinicHeaderProps> = ({ onScheduleClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Terapia Online', href: '#online' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between gap-6">
        {/* Zone 1: Vector High-Legibility Brand Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#inicio');
          }}
          className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#4a6b6c]"
          aria-label="Início - Andréia Francisca do Nascimento"
        >
          <ClinicBrandLogo variant="header" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5f6b7c]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-[#4a6b6c] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#d4af37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScheduleClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#4a6b6c] hover:bg-[#354f50] active:scale-98 rounded-lg transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a6b6c] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4a6b6c] hover:bg-[#f0f4f4] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e2e8f0] px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-[#2d3748] hover:text-[#4a6b6c] py-2 border-b border-[#f0f4f4] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="mt-3 w-full py-3 text-sm font-semibold text-white bg-[#4a6b6c] rounded-lg hover:bg-[#354f50] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar pelo WhatsApp</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
