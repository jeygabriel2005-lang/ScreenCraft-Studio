import { ArrowRight, BookOpen } from 'lucide-react';
import {
  EDITORIAL_ARTICLES,
  HERO_FEATURE,
  PROPERTY_LISTINGS,
} from '../data/editorialData';
import type {
  CurrencyCode,
  EditorialArticle,
  PropertyListing,
  ScreenId,
} from '../types/editorial';
import { formatArea, formatCurrency } from '../utils/formatters';
import { EditorialImage } from './EditorialImage';

interface HomeScreenProps {
  currency: CurrencyCode;
  onNavigate: (screen: ScreenId) => void;
  onSelectArticle: (article: EditorialArticle) => void;
  onSelectProperty: (property: PropertyListing) => void;
}

export function HomeScreen({
  currency,
  onNavigate,
  onSelectArticle,
  onSelectProperty,
}: HomeScreenProps) {
  const leadArticle = EDITORIAL_ARTICLES[0];
  const secondaryArticles = EDITORIAL_ARTICLES.slice(1, 4);
  const featuredProperties = PROPERTY_LISTINGS.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="pt-8 lg:pt-12">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
          {/* Editorial Dateline Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#0D0D0D]/12 text-xs font-medium text-[#444748]">
            <span className="font-semibold tracking-[0.08em] uppercase text-[#7A5806]">
              {HERO_FEATURE.kicker}
            </span>
            <span className="tabular-nums">{HERO_FEATURE.mastheadDateline}</span>
          </div>

          {/* 2-Column Balanced Split */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <h1 className="font-serif text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#0D0D0D] text-balance">
                  {HERO_FEATURE.title}
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-[#444748] max-w-[60ch]">
                  {HERO_FEATURE.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('real-estate');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold whitespace-nowrap hover:bg-[#262626] transition-all duration-150 hover:-translate-y-px focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 cursor-pointer"
                >
                  <span>Explorar Portafolio</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectArticle(leadArticle)}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-[4px] border border-[#0D0D0D] bg-transparent text-[#0D0D0D] text-sm font-semibold whitespace-nowrap hover:bg-[#0D0D0D] hover:text-[#FFFFFF] transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2 cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  <span>Leer Crónica Principal</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="flex-1 min-h-[280px] lg:min-h-[380px]">
                <EditorialImage
                  src={HERO_FEATURE.image}
                  alt={HERO_FEATURE.imageAlt}
                  aspectClassName="aspect-[16/10] lg:aspect-auto lg:h-full"
                  caption={HERO_FEATURE.figureCaption}
                />
              </div>
            </div>
          </div>

          {/* 4-Column Full-Width KPI Strip */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 border border-[#0D0D0D]/10 rounded-[8px] bg-[#FFFFFF] divide-y lg:divide-y-0 lg:divide-x divide-[#0D0D0D]/10">
            {HERO_FEATURE.kpis.map((kpi) => (
              <div key={kpi.label} className="p-5 sm:p-6 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                  {kpi.label}
                </p>
                <p className="font-serif text-2xl sm:text-[28px] font-semibold text-[#0D0D0D] tabular-nums">
                  {kpi.value}
                </p>
                <p className="text-xs text-[#444748]">{kpi.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial 3-Tier Salience Section */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#B8860B]/60">
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
              EDICIÓN ACTUAL · DESPACHOS SELECTOS
            </p>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-semibold leading-tight text-[#0D0D0D]">
              Análisis Territorial y Crónica Económica
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              onNavigate('infrastructure');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#7A5806] hover:text-[#5E4304] whitespace-nowrap cursor-pointer"
          >
            <span>Consultar datos portuarios</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tier 1: Lead Story */}
          <article className="lg:col-span-7 group">
            <div className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 overflow-hidden transition-shadow duration-200 hover:editorial-shadow-level-2">
              <button
                type="button"
                onClick={() => onSelectArticle(leadArticle)}
                className="block w-full text-left cursor-pointer focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2"
              >
                <EditorialImage
                  src={leadArticle.image}
                  alt={leadArticle.imageAlt}
                  aspectClassName="aspect-[16/9]"
                  className="rounded-none border-0"
                />
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#444748]">
                    <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                      {leadArticle.kicker}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadArticle.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[28px] font-semibold leading-[1.25] text-[#0D0D0D] group-hover:text-[#7A5806] transition-colors">
                    {leadArticle.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#444748]">
                    {leadArticle.subtitle}
                  </p>

                  <div className="pt-4 border-t border-[#0D0D0D]/10 flex items-center justify-between text-xs font-medium text-[#1c1c19]">
                    <span>
                      Por {leadArticle.author} — {leadArticle.authorRole}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#7A5806]">
                      Leer artículo
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </article>

          {/* Tier 2: Secondary Features */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#0D0D0D]/10 rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8">
            {secondaryArticles.map((article) => (
              <article key={article.id} className="group">
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="w-full p-6 text-left flex flex-col sm:flex-row lg:flex-row gap-5 items-start cursor-pointer hover:bg-[#f6f3ee]/60 transition-colors focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2"
                >
                  <div className="w-full sm:w-32 lg:w-28 shrink-0">
                    <EditorialImage
                      src={article.image}
                      alt={article.imageAlt}
                      aspectClassName="aspect-[4/3]"
                    />
                  </div>
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#444748]">
                      <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                        {article.kicker}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-[#0D0D0D] group-hover:text-[#7A5806] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-[#444748] line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Pull Quote Band */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <blockquote className="py-10 px-6 sm:px-12 border-y border-[#B8860B] bg-[#fcf9f4] text-center space-y-4">
          <p className="font-serif italic text-xl sm:text-2xl lg:text-[28px] leading-relaxed text-[#0D0D0D] max-w-3xl mx-auto">
            “La verdadera solidez inmobiliaria en la costa del Golfo ocurre donde la vocación
            marítima del puerto respalda la plusvalía cotidiana del suelo residencial.”
          </p>
          <footer className="text-xs font-bold uppercase tracking-[0.1em] text-[#7A5806]">
            Consejo Editorial Tuxpan Alta Gama · Monografía de Mercado 2026
          </footer>
        </blockquote>
      </section>

      {/* Featured Real Estate Preview */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#0D0D0D]/12">
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
              BIENES RAÍCES · SELECCIÓN PATRIMONIAL
            </p>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-semibold leading-tight text-[#0D0D0D]">
              Activos Destacados en Cartera
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              onNavigate('real-estate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-[#7A5806] hover:text-[#5E4304] whitespace-nowrap cursor-pointer"
          >
            <span>Ver catálogo completo ({PROPERTY_LISTINGS.length})</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <article
              key={property.id}
              className="group flex flex-col rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 overflow-hidden transition-shadow duration-200 hover:editorial-shadow-level-2"
            >
              <button
                type="button"
                onClick={() => onSelectProperty(property)}
                className="flex flex-col h-full text-left cursor-pointer focus-visible:outline-3 focus-visible:outline-[#7A5806] focus-visible:outline-offset-2"
              >
                <EditorialImage
                  src={property.image}
                  alt={property.imageAlt}
                  aspectClassName="aspect-[4/3]"
                  className="rounded-none border-0"
                />

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#444748]">
                      <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                        {property.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{property.zone}</span>
                    </div>
                    <h3 className="font-serif text-[22px] font-semibold leading-snug text-[#0D0D0D] group-hover:text-[#7A5806] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#444748] line-clamp-2">
                      {property.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#B8860B]/40 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[11px] text-[#444748]">Superficie</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] tabular-nums">
                        {formatArea(property.areaSqm)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#444748]">ROI Est.</p>
                      <p className="text-sm font-semibold text-[#1B5E20] tabular-nums">
                        {property.roiPercent.toFixed(1)} %
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#444748]">Valor</p>
                      <p className="text-sm font-semibold text-[#0D0D0D] tabular-nums truncate">
                        {formatCurrency(property.priceMxn, currency)}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
