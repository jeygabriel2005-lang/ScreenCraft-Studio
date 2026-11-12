import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import type { CurrencyCode, InquiryPreset, PropertyListing } from '../types/editorial';
import { formatCurrency } from '../utils/formatters';
import { EditorialImage } from './EditorialImage';

interface PropertyDetailModalProps {
  property: PropertyListing | null;
  currency: CurrencyCode;
  onClose: () => void;
  onOpenInquiry: (preset: InquiryPreset) => void;
}

export function PropertyDetailModal({
  property,
  currency,
  onClose,
  onOpenInquiry,
}: PropertyDetailModalProps) {
  if (!property) return null;

  const estimatedAnnualIncome = property.priceMxn * (property.roiPercent / 100);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/60 backdrop-blur-[4px] p-0 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full h-full sm:h-auto sm:max-h-[92vh] max-w-[960px] bg-[#fcf9f4] sm:rounded-[8px] border border-[#0D0D0D]/12 editorial-shadow-level-3 overflow-hidden">
        {/* Header Bar */}
        <div className="shrink-0 flex items-center justify-between gap-4 px-5 sm:px-8 h-16 bg-[#FFFFFF] border-b border-[#0D0D0D]/10">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs font-semibold text-[#7A5806] tabular-nums">
              {property.code}
            </span>
            <span aria-hidden="true" className="text-[#0D0D0D]/30">
              /
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#444748] truncate">
              {property.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha técnica"
            className="inline-flex items-center justify-center h-11 w-11 rounded-[4px] border border-[#0D0D0D]/15 text-[#0D0D0D] hover:bg-[#f6f3ee] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <EditorialImage
                src={property.image}
                alt={property.imageAlt}
                aspectClassName="aspect-[4/3]"
                caption={`${property.title} — ${property.zone}`}
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                  FICHA TÉCNICA DE ACTIVO
                </p>
                <h1
                  id="property-modal-title"
                  className="font-serif text-[28px] font-semibold leading-tight text-[#0D0D0D]"
                >
                  {property.title}
                </h1>
                <p className="text-xs font-medium text-[#444748]">{property.zone}</p>
              </div>

              <div className="p-4 rounded-[8px] bg-[#FFFFFF] border border-[#B8860B]/50 space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#444748]">
                  Valor de Adquisición
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#0D0D0D] tabular-nums">
                  {formatCurrency(property.priceMxn, currency)}
                </p>
                <p className="text-xs font-medium text-[#1B5E20] tabular-nums">
                  Flujo anual proyectado: {formatCurrency(estimatedAnnualIncome, currency)} (
                  {property.roiPercent.toFixed(1)} % ROI)
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B5E20]">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{property.legalStatus}</span>
              </div>

              <p className="text-sm leading-relaxed text-[#444748]">{property.summary}</p>
            </div>
          </div>

          {/* Accession Metadata Grid & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#0D0D0D]/10">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-xl font-semibold text-[#0D0D0D]">
                Especificaciones Registrales y Técnicas
              </h2>
              <dl className="divide-y divide-[#0D0D0D]/10 rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 px-5">
                {property.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="py-3.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-[#444748]">{spec.label}</dt>
                    <dd className="font-semibold text-[#0D0D0D] tabular-nums text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-serif text-xl font-semibold text-[#0D0D0D]">
                Atributos Destacados
              </h2>
              <ul className="space-y-3 text-sm text-[#1c1c19]">
                {property.highlights.map((hl) => (
                  <li key={hl} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#7A5806] font-bold" aria-hidden="true">
                      —
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenInquiry({
                      subject: `Solicitud de dossier y visita privada: ${property.title}`,
                      assetCode: property.code,
                      category: property.category,
                    });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-[4px] bg-[#7A5806] text-[#FFFFFF] text-sm font-semibold hover:bg-[#5E4304] transition-colors cursor-pointer"
                >
                  <span>Solicitar Dossier y Visita Privada</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
