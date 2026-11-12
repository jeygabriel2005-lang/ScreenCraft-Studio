import type { ScreenId } from '../types/editorial';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenInquiry: () => void;
}

export function Footer({ onNavigate, onOpenInquiry }: FooterProps) {
  const handleSelect = (screen: ScreenId) => {
    onNavigate(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-[#0D0D0D]/12 bg-[#f0ede9]/60">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <p className="font-serif text-2xl font-bold text-[#0D0D0D]">Tuxpan Alta Gama</p>
            <p className="text-sm text-[#444748] leading-relaxed max-w-md">
              Publicación editorial y mesa de asesoría patrimonial enfocada en bienes raíces costeros,
              infraestructura marítima, comercio regional y hospitalidad en Tuxpan, Veracruz.
            </p>
            <p className="text-xs text-[#7A5806] font-semibold tracking-wider uppercase tabular-nums">
              20°57′N 97°24′O · Golfo de México
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0D0D0D]">
              Secciones
            </h3>
            <ul className="space-y-1.5 text-sm text-[#444748]">
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('editorial')}
                  className="min-h-[36px] py-1 hover:text-[#0D0D0D] transition-colors cursor-pointer"
                >
                  Portada Editorial
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('real-estate')}
                  className="min-h-[36px] py-1 hover:text-[#0D0D0D] transition-colors cursor-pointer"
                >
                  Bienes Raíces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('infrastructure')}
                  className="min-h-[36px] py-1 hover:text-[#0D0D0D] transition-colors cursor-pointer"
                >
                  Puerto y Comercio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSelect('tourism')}
                  className="min-h-[36px] py-1 hover:text-[#0D0D0D] transition-colors cursor-pointer"
                >
                  Turismo y Estilo de Vida
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0D0D0D]">
              Atención Privada a Inversionistas
            </h3>
            <p className="text-sm text-[#444748] leading-relaxed">
              Bulevar Jesús Reyes Heroles 114, Zona Centro · C.P. 92800 Tuxpan de Rodríguez Cano, Veracruz.
            </p>
            <p className="text-sm text-[#1c1c19] font-medium tabular-nums">
              mesa@tuxpanaltagama.mx · +52 (783) 834 0920
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="min-h-[44px] px-5 py-2.5 rounded-[4px] border border-[#0D0D0D] text-sm font-semibold text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#FFFFFF] transition-colors duration-150 cursor-pointer"
              >
                Agendar Consulta Privada
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#0D0D0D]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#444748]">
          <p>© 2026 Tuxpan Alta Gama Editorial. Todos los derechos reservados.</p>
          <p>Cifras de rendimiento proyectadas con fines informativos sujetas a diligencia debida.</p>
        </div>
      </div>
    </footer>
  );
}
