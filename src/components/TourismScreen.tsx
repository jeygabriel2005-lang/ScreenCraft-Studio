import { ArrowUpRight, Compass } from 'lucide-react';
import { useState } from 'react';
import { EDITORIAL_ARTICLES, TOURISM_EXPERIENCES } from '../data/editorialData';
import type { EditorialArticle, InquiryPreset } from '../types/editorial';
import { EditorialImage } from './EditorialImage';

interface TourismScreenProps {
  onSelectArticle: (article: EditorialArticle) => void;
  onOpenInquiry: (preset: InquiryPreset) => void;
}

type TourismFilter =
  | 'Todas'
  | 'Náutico y Arrecifes'
  | 'Hospitalidad y Playa'
  | 'Gastronomía y Cultura';

const TOURISM_FILTERS: TourismFilter[] = [
  'Todas',
  'Náutico y Arrecifes',
  'Hospitalidad y Playa',
  'Gastronomía y Cultura',
];

export function TourismScreen({ onSelectArticle, onOpenInquiry }: TourismScreenProps) {
  const [filter, setFilter] = useState<TourismFilter>('Todas');
  const nauticalArticle = EDITORIAL_ARTICLES[2];

  const items =
    filter === 'Todas'
      ? TOURISM_EXPERIENCES
      : TOURISM_EXPERIENCES.filter((item) => item.category === filter);

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12 pt-10 lg:pt-14 space-y-14">
      {/* Header */}
      <div className="pb-6 border-b border-[#B8860B]/60 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
            TURISMO NÁUTICO Y ESTILO DE VIDA
          </p>
          <h1 className="font-serif text-[32px] sm:text-[40px] font-semibold leading-tight text-[#0D0D0D] text-balance">
            Guía Curada del Litoral Norte de Veracruz
          </h1>
          <p className="text-[15px] leading-relaxed text-[#444748]">
            Desde travesías privadas hacia los arrecifes de Isla de Lobos hasta gastronomía de autor
            sobre el malecón ribereño, Tuxpan articula descanso costero con vida marítima activa.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onSelectArticle(nauticalArticle)}
          className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[4px] border border-[#0D0D0D] text-sm font-semibold text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#FFFFFF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Leer Crónica de Isla de Lobos</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {TOURISM_FILTERS.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`min-h-[44px] px-4 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                active
                  ? 'bg-[#0D0D0D] text-[#FFFFFF] border border-[#0D0D0D]'
                  : 'bg-[#FFFFFF] text-[#0D0D0D] border border-[#0D0D0D]/15 hover:border-[#0D0D0D]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Curated Experiences Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((exp) => (
          <article
            key={exp.id}
            className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 overflow-hidden flex flex-col transition-shadow duration-200 hover:editorial-shadow-level-2"
          >
            <EditorialImage
              src={exp.image}
              alt={exp.imageAlt}
              aspectClassName="aspect-[16/10]"
              className="rounded-none border-0"
            />

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#444748]">
                  <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                    {exp.kicker}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.season}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.duration}</span>
                </div>

                <div>
                  <h2 className="font-serif text-[26px] font-semibold leading-snug text-[#0D0D0D]">
                    {exp.title}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-[#444748] tabular-nums">
                    {exp.location} · {exp.coordinates}
                  </p>
                </div>

                <p className="text-[15px] leading-relaxed text-[#1c1c19]">{exp.summary}</p>
                <p className="text-sm leading-relaxed text-[#444748]">{exp.details}</p>

                <ul className="pt-3 border-t border-[#0D0D0D]/10 space-y-2 text-xs text-[#444748]">
                  {exp.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2">
                      <span className="text-[#7A5806] font-bold" aria-hidden="true">
                        —
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    onOpenInquiry({
                      subject: `Concierge Privado: ${exp.title}`,
                      category: exp.category,
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-xs font-semibold hover:bg-[#262626] transition-colors cursor-pointer"
                >
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  <span>Coordinar Itinerario Privado</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
