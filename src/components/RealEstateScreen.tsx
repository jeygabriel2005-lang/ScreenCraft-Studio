import { ArrowUpRight, CheckCircle2, Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PROPERTY_LISTINGS } from '../data/editorialData';
import type {
  AssetCategory,
  CurrencyCode,
  InquiryPreset,
  PropertyListing,
} from '../types/editorial';
import { formatArea, formatCurrency } from '../utils/formatters';
import { EditorialImage } from './EditorialImage';

interface RealEstateScreenProps {
  currency: CurrencyCode;
  onChangeCurrency: (currency: CurrencyCode) => void;
  onSelectProperty: (property: PropertyListing) => void;
  onOpenInquiry: (preset: InquiryPreset) => void;
}

const CATEGORIES: AssetCategory[] = [
  'Todas',
  'Residencial Náutico',
  'Frente de Playa',
  'Lotes Comerciales',
  'Desarrollo Mixto',
];

type SortField = 'roi' | 'price-asc' | 'price-desc' | 'area';

export function RealEstateScreen({
  currency,
  onChangeCurrency,
  onSelectProperty,
  onOpenInquiry,
}: RealEstateScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortField>('roi');

  const filteredProperties = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = PROPERTY_LISTINGS.filter((item) => {
      const matchesCat =
        selectedCategory === 'Todas' || item.category === selectedCategory;
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.zone.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'roi') return b.roiPercent - a.roiPercent;
      if (sortBy === 'price-asc') return a.priceMxn - b.priceMxn;
      if (sortBy === 'price-desc') return b.priceMxn - a.priceMxn;
      return b.areaSqm - a.areaSqm;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('Todas');
    setSearchQuery('');
    setSortBy('roi');
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12 pt-10 lg:pt-14 space-y-10">
      {/* Section Header */}
      <div className="pb-6 border-b border-[#B8860B]/60 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
            BIENES RAÍCES · CATÁLOGO PATRIMONIAL
          </p>
          <h1 className="font-serif text-[32px] sm:text-[40px] font-semibold leading-tight text-[#0D0D0D] text-balance">
            Propiedades Selectas y Reservas Territoriales en Tuxpan
          </h1>
          <p className="text-[15px] leading-relaxed text-[#444748]">
            Cada activo incluido en nuestro portafolio cuenta con verificación de escritura pública,
            factibilidad de servicios y proyección financiera auditada.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-medium text-[#444748]">Moneda:</span>
          <div
            role="group"
            aria-label="Seleccionar moneda de visualización"
            className="inline-flex rounded-[4px] border border-[#0D0D0D]/15 bg-[#FFFFFF] p-1"
          >
            {(['MXN', 'USD'] as CurrencyCode[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onChangeCurrency(code)}
                className={`min-h-[36px] px-3.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  currency === code
                    ? 'bg-[#0D0D0D] text-[#FFFFFF]'
                    : 'text-[#444748] hover:text-[#0D0D0D]'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 p-5 space-y-5">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#444748]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por zona, clave o título (ej. Barra Norte)..."
              aria-label="Buscar propiedades"
              className="w-full min-h-[48px] pl-10 pr-4 rounded-[4px] border border-[#0D0D0D]/20 bg-[#FFFFFF] text-[15px] text-[#0D0D0D] placeholder:text-[#0D0D0D]/45 focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806] focus:outline-offset-0"
            />
          </div>

          {/* Sort Select */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-4 w-4 text-[#7A5806] shrink-0" aria-hidden="true" />
            <label htmlFor="property-sort" className="text-xs font-semibold text-[#444748] whitespace-nowrap">
              Ordenar por
            </label>
            <select
              id="property-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortField)}
              className="min-h-[48px] px-3.5 rounded-[4px] border border-[#0D0D0D]/20 bg-[#FFFFFF] text-sm font-medium text-[#0D0D0D] focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806] focus:outline-offset-0"
            >
              <option value="roi">Mayor ROI Proyectado (%)</option>
              <option value="price-asc">Menor Valor de Inversión</option>
              <option value="price-desc">Mayor Valor de Inversión</option>
              <option value="area">Mayor Superficie (m²)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#0D0D0D]/8">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[44px] px-4 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 ${
                  active
                    ? 'bg-[#0D0D0D] text-[#FFFFFF] border border-[#0D0D0D]'
                    : 'bg-[#f6f3ee] text-[#0D0D0D] border border-[#0D0D0D]/15 hover:border-[#0D0D0D]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-medium text-[#444748]">
        <p className="tabular-nums">
          Mostrando <strong className="text-[#0D0D0D]">{filteredProperties.length}</strong> de{' '}
          {PROPERTY_LISTINGS.length} activos en cartera
        </p>
        {(selectedCategory !== 'Todas' || searchQuery) && (
          <button
            type="button"
            onClick={resetFilters}
            className="min-h-[36px] font-semibold text-[#7A5806] hover:text-[#5E4304] underline underline-offset-4 cursor-pointer"
          >
            Restablecer filtros
          </button>
        )}
      </div>

      {/* Property Grid or Empty State */}
      {filteredProperties.length === 0 ? (
        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/10 p-12 text-center space-y-4">
          <p className="font-serif text-2xl font-semibold text-[#0D0D0D]">
            Sin activos coincidentes con su búsqueda
          </p>
          <p className="text-sm text-[#444748] max-w-md mx-auto">
            Ajuste la categoría o limpie los términos de búsqueda, o solicite a nuestra mesa privada
            búsqueda fuera de mercado (off-market).
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-[44px] px-5 py-2.5 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold cursor-pointer"
            >
              Ver Todo el Portafolio
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenInquiry({
                  subject: 'Búsqueda de activo fuera de mercado en Tuxpan',
                  category: selectedCategory,
                })
              }
              className="min-h-[44px] px-5 py-2.5 rounded-[4px] border border-[#0D0D0D] text-[#0D0D0D] text-sm font-semibold cursor-pointer"
            >
              Solicitar Búsqueda Off-Market
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="group flex flex-col rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 overflow-hidden transition-shadow duration-200 hover:editorial-shadow-level-2"
            >
              <div className="relative">
                <EditorialImage
                  src={property.image}
                  alt={property.imageAlt}
                  aspectClassName="aspect-[4/3]"
                  className="rounded-none border-0"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#444748]">
                    <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                      {property.category}
                    </span>
                    <span className="font-mono tabular-nums text-[#444748]">{property.code}</span>
                  </div>

                  <div>
                    <h2 className="font-serif text-[22px] font-semibold leading-snug text-[#0D0D0D]">
                      {property.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#444748]">{property.zone}</p>
                  </div>

                  <p className="text-[14px] leading-relaxed text-[#444748]">
                    {property.summary}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#1B5E20]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{property.legalStatus}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Tabular Financial Matrix */}
                  <div className="pt-4 border-t border-[#B8860B]/40 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[11px] text-[#444748]">Superficie</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] tabular-nums">
                        {formatArea(property.areaSqm)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#444748]">ROI Anual</p>
                      <p className="text-sm font-semibold text-[#1B5E20] tabular-nums">
                        {property.roiPercent.toFixed(1)} %
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#444748]">Inversión</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] tabular-nums">
                        {formatCurrency(property.priceMxn, currency)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectProperty(property)}
                      className="min-h-[44px] px-3 py-2 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-xs font-semibold whitespace-nowrap hover:bg-[#262626] transition-colors cursor-pointer"
                    >
                      Ver Ficha Técnica
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenInquiry({
                          subject: `Dossier e inspección privada: ${property.title}`,
                          assetCode: property.code,
                          category: property.category,
                        })
                      }
                      className="inline-flex items-center justify-center gap-1 min-h-[44px] px-3 py-2 rounded-[4px] border border-[#0D0D0D] text-[#0D0D0D] text-xs font-semibold whitespace-nowrap hover:bg-[#0D0D0D] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                    >
                      <span>Dossier</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
