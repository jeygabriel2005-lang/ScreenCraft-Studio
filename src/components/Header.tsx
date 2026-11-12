import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { ScreenId } from '../types/editorial';

interface HeaderProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenInquiry: () => void;
}

const NAV_ITEMS: { id: ScreenId; label: string }[] = [
  { id: 'editorial', label: 'Portada' },
  { id: 'real-estate', label: 'Bienes Raíces' },
  { id: 'infrastructure', label: 'Puerto y Comercio' },
  { id: 'tourism', label: 'Turismo' },
];

export function Header({ activeScreen, onNavigate, onOpenInquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectScreen = (screen: ScreenId) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#0D0D0D]/10 editorial-shadow-level-2">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-4 sm:px-8 lg:px-12 h-16 lg:h-20">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelectScreen('editorial')}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0D0D0D] whitespace-nowrap shrink-0 text-left focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 rounded-[4px] py-2"
        >
          Tuxpan Alta Gama
        </button>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectScreen(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative min-h-[44px] px-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 rounded-[4px] ${
                  isActive
                    ? 'text-[#0D0D0D] font-semibold'
                    : 'text-[#444748] hover:text-[#0D0D0D]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-2 left-0 right-0 h-[1.5px] transition-opacity duration-150 ${
                    isActive ? 'bg-[#7A5806] opacity-100' : 'bg-[#0D0D0D]/30 opacity-0 hover:opacity-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold whitespace-nowrap shrink-0 hover:bg-[#262626] transition-all duration-150 hover:-translate-y-px focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 cursor-pointer"
          >
            Solicitar Dossier
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-[4px] border border-[#0D0D0D]/15 bg-[#FFFFFF] text-[#0D0D0D] focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0D0D0D]/10 bg-[#FFFFFF] px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectScreen(item.id)}
                className={`flex w-full items-center justify-between min-h-[44px] px-3 rounded-[4px] text-sm font-medium ${
                  isActive
                    ? 'bg-[#f6f3ee] text-[#7A5806] font-semibold'
                    : 'text-[#0D0D0D] hover:bg-[#f6f3ee]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#0D0D0D]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full min-h-[44px] px-5 py-2.5 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold"
            >
              Solicitar Dossier
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
