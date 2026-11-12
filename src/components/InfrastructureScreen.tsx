import { Anchor, ArrowRight, Calculator } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  EDITORIAL_ARTICLES,
  PORT_FACILITY_METRICS,
} from '../data/editorialData';
import type {
  CurrencyCode,
  EditorialArticle,
  InquiryPreset,
} from '../types/editorial';
import { formatCurrency } from '../utils/formatters';
import { EditorialImage } from './EditorialImage';

interface InfrastructureScreenProps {
  currency: CurrencyCode;
  onSelectArticle: (article: EditorialArticle) => void;
  onOpenInquiry: (preset: InquiryPreset) => void;
}

type InvestmentThesis = 'logistics' | 'mixed-use' | 'coastal-hospitality';

const THESIS_PARAMS: Record<
  InvestmentThesis,
  { label: string; annualYieldPct: number; annualAppreciationPct: number; note: string }
> = {
  logistics: {
    label: 'Logística Portuaria y Patios',
    annualYieldPct: 9.8,
    annualAppreciationPct: 6.4,
    note: 'Contratos indexados con operadores portuarios, patios de contenedores y almacenes fiscales.',
  },
  'mixed-use': {
    label: 'Comercio y Usos Mixtos',
    annualYieldPct: 8.6,
    annualAppreciationPct: 7.2,
    note: 'Locales gastronómicos y suites corporativas sobre el Bulevar Ribereño con ocupación continua.',
  },
  'coastal-hospitality': {
    label: 'Hospitalidad y Residencial Náutico',
    annualYieldPct: 7.9,
    annualAppreciationPct: 6.9,
    note: 'Villas frente al mar y residencias con muelle privado orientadas a renta ejecutiva y vacacional.',
  },
};

export function InfrastructureScreen({
  currency,
  onSelectArticle,
  onOpenInquiry,
}: InfrastructureScreenProps) {
  const portArticle = EDITORIAL_ARTICLES[0];
  const [capitalMxn, setCapitalMxn] = useState(20000000);
  const [years, setYears] = useState(5);
  const [thesis, setThesis] = useState<InvestmentThesis>('logistics');

  const projection = useMemo(() => {
    const profile = THESIS_PARAMS[thesis];
    const totalRate = (profile.annualYieldPct + profile.annualAppreciationPct) / 100;
    const annualCashflow = capitalMxn * (profile.annualYieldPct / 100);
    const terminalAssetValue =
      capitalMxn * Math.pow(1 + profile.annualAppreciationPct / 100, years);
    const cumulativeCashflow = annualCashflow * years;
    const netGain = terminalAssetValue - capitalMxn + cumulativeCashflow;
    const compoundedTotal = capitalMxn * Math.pow(1 + totalRate, years);

    return {
      profile,
      annualCashflow,
      terminalAssetValue,
      cumulativeCashflow,
      netGain,
      compoundedTotal,
    };
  }, [capitalMxn, years, thesis]);

  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12 pt-10 lg:pt-14 space-y-16">
      {/* Header & Lead Maritime Brief */}
      <section className="space-y-8">
        <div className="pb-6 border-b border-[#B8860B]/60 space-y-2 max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
            INFRAESTRUCTURA PORTUARIA Y COMERCIO REGIONAL
          </p>
          <h1 className="font-serif text-[32px] sm:text-[40px] font-semibold leading-tight text-[#0D0D0D] text-balance">
            El Puerto Profundo Más Cercano al Valle de México
          </h1>
          <p className="text-[15px] leading-relaxed text-[#444748]">
            La convergencia entre terminal marítima de gran calado, enlace carretero directo de
            295 km hacia la Ciudad de México y reserva territorial plana consolida a Tuxpan como
            nodo logístico de primer orden en el Golfo de México.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <EditorialImage
              src={portArticle.image}
              alt={portArticle.imageAlt}
              aspectClassName="aspect-[16/9]"
              caption="Fig. 1 — Terminal portuaria en aguas profundas y patio intermodal en la bocana de Tuxpan."
            />
          </div>

          <div className="lg:col-span-5 rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/8 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                <Anchor className="h-4 w-4" aria-hidden="true" />
                <span>RESUMEN OPERATIVO DEL CORREDOR</span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#0D0D0D]">
                Conectividad Intermodal y Certidumbre Logística
              </h2>
              <p className="text-sm leading-relaxed text-[#444748]">
                A diferencia de puertos urbanos congestionados, el recinto portuario de Tuxpan
                mantiene ejes de expansión directa hacia parques industriales en el kilómetro 6 y
                autopista libre de cruces urbanos hacia el Altiplano Central.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#0D0D0D]/10">
              <button
                type="button"
                onClick={() => onSelectArticle(portArticle)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold hover:bg-[#262626] transition-colors cursor-pointer"
              >
                Leer Monografía Portuaria Completa
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenInquiry({
                    subject: 'Briefing de Inversión Portuaria y Parques Logísticos',
                    category: 'Infraestructura y Comercio',
                  })
                }
                className="w-full min-h-[44px] px-4 py-2.5 rounded-[4px] border border-[#0D0D0D] text-[#0D0D0D] text-sm font-semibold hover:bg-[#0D0D0D] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              >
                Solicitar Briefing Técnico
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data Matrix */}
      <section className="space-y-6">
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
            MATRIZ OPERATIVA · INFRAESTRUCTURA
          </p>
          <h2 className="font-serif text-[28px] font-semibold text-[#0D0D0D]">
            Terminales y Nodos del Corredor Tuxpan
          </h2>
        </div>

        <div className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#0D0D0D]/12 bg-[#f6f3ee]">
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748]">
                    Infraestructura / Nodo
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748]">
                    Especialización
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748] text-right">
                    Calado
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748]">
                    Capacidad
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748]">
                    Tránsito CDMX
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748] text-right">
                    Crecimiento
                  </th>
                  <th className="py-4 px-5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#444748]">
                    Estatus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0D0D0D]/8 text-sm">
                {PORT_FACILITY_METRICS.map((row) => (
                  <tr key={row.id} className="hover:bg-[#fcf9f4] transition-colors">
                    <td className="py-4 px-5 font-semibold text-[#0D0D0D]">{row.terminal}</td>
                    <td className="py-4 px-5 text-[#444748]">{row.sector}</td>
                    <td className="py-4 px-5 text-right font-semibold tabular-nums text-[#0D0D0D]">
                      {row.draftMeters.toFixed(1)} m
                    </td>
                    <td className="py-4 px-5 tabular-nums text-[#1c1c19]">{row.capacityLabel}</td>
                    <td className="py-4 px-5 tabular-nums text-[#1c1c19]">{row.transitCdmx}</td>
                    <td className="py-4 px-5 text-right font-semibold tabular-nums text-[#1B5E20]">
                      {row.annualGrowth}
                    </td>
                    <td className="py-4 px-5 text-xs font-semibold text-[#7A5806]">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Capital Allocation & Yield Simulator */}
      <section className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/10 p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#B8860B]/50">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
              <Calculator className="h-4 w-4" aria-hidden="true" />
              <span>MODELO FINANCIERO INTERACTIVO</span>
            </div>
            <h2 className="font-serif text-[28px] font-semibold text-[#0D0D0D]">
              Simulador de Asignación de Capital en Tuxpan
            </h2>
          </div>
          <p className="text-xs text-[#444748] max-w-sm">
            Ajuste el monto, horizonte y tesis sectorial para estimar flujo operativo y plusvalía
            compuesta basada en promedios históricos del corredor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#0D0D0D]">
                1. Tesis Sectorial
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {(Object.keys(THESIS_PARAMS) as InvestmentThesis[]).map((key) => {
                  const item = THESIS_PARAMS[key];
                  const active = thesis === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setThesis(key)}
                      className={`w-full text-left p-4 rounded-[4px] border transition-colors cursor-pointer ${
                        active
                          ? 'bg-[#0D0D0D] text-[#FFFFFF] border-[#0D0D0D]'
                          : 'bg-[#f6f3ee] text-[#0D0D0D] border-[#0D0D0D]/15 hover:border-[#0D0D0D]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold">{item.label}</span>
                        <span
                          className={`text-xs font-semibold tabular-nums ${
                            active ? 'text-[#fdce75]' : 'text-[#7A5806]'
                          }`}
                        >
                          {(item.annualYieldPct + item.annualAppreciationPct).toFixed(1)} % anual est.
                        </span>
                      </div>
                      <p
                        className={`mt-1 text-xs leading-relaxed ${
                          active ? 'text-[#e5e2dd]' : 'text-[#444748]'
                        }`}
                      >
                        {item.note}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="capital-range" className="font-semibold text-[#0D0D0D]">
                  2. Capital Asignado
                </label>
                <span className="font-bold text-[#7A5806] tabular-nums">
                  {formatCurrency(capitalMxn, currency)}
                </span>
              </div>
              <input
                id="capital-range"
                type="range"
                min={5000000}
                max={60000000}
                step={1000000}
                value={capitalMxn}
                onChange={(e) => setCapitalMxn(Number(e.target.value))}
                className="w-full accent-[#7A5806] cursor-pointer h-8"
              />
              <div className="flex justify-between text-[11px] text-[#444748] tabular-nums">
                <span>{formatCurrency(5000000, currency)}</span>
                <span>{formatCurrency(60000000, currency)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="horizon-range" className="font-semibold text-[#0D0D0D]">
                  3. Horizonte de Inversión
                </label>
                <span className="font-bold text-[#0D0D0D] tabular-nums">{years} años</span>
              </div>
              <input
                id="horizon-range"
                type="range"
                min={3}
                max={10}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[#0D0D0D] cursor-pointer h-8"
              />
              <div className="flex justify-between text-[11px] text-[#444748] tabular-nums">
                <span>3 años</span>
                <span>10 años</span>
              </div>
            </div>
          </div>

          {/* Live Output Panel */}
          <div className="lg:col-span-6 rounded-[8px] bg-[#fcf9f4] border border-[#B8860B]/50 p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                PROYECCIÓN ESTIMADA A {years} AÑOS
              </p>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#0D0D0D] tabular-nums">
                {formatCurrency(projection.compoundedTotal, currency)}
              </p>
              <p className="text-xs text-[#444748]">
                Valor patrimonial proyectado combinando renta operativa y plusvalía compuesta.
              </p>
            </div>

            <dl className="divide-y divide-[#0D0D0D]/10 text-sm">
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#444748]">Flujo anual por renta ({projection.profile.annualYieldPct} %)</dt>
                <dd className="font-semibold text-[#0D0D0D] tabular-nums">
                  {formatCurrency(projection.annualCashflow, currency)}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#444748]">Flujo acumulado en {years} años</dt>
                <dd className="font-semibold text-[#0D0D0D] tabular-nums">
                  {formatCurrency(projection.cumulativeCashflow, currency)}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-[#444748]">
                  Valor del activo por plusvalía ({projection.profile.annualAppreciationPct} %/año)
                </dt>
                <dd className="font-semibold text-[#0D0D0D] tabular-nums">
                  {formatCurrency(projection.terminalAssetValue, currency)}
                </dd>
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="font-semibold text-[#1B5E20]">Rendimiento neto estimado</dt>
                <dd className="font-bold text-[#1B5E20] tabular-nums">
                  +{formatCurrency(projection.netGain, currency)}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() =>
                onOpenInquiry({
                  subject: `Modelo Financiero: ${projection.profile.label} (${formatCurrency(
                    capitalMxn,
                    currency
                  )} a ${years} años)`,
                  category: projection.profile.label,
                })
              }
              className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-[4px] bg-[#7A5806] text-[#FFFFFF] text-sm font-semibold hover:bg-[#5E4304] transition-colors cursor-pointer"
            >
              <span>Solicitar Corrida Financiera Personalizada</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
