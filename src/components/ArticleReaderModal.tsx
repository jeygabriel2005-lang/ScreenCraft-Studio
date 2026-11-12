import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { EditorialArticle, InquiryPreset } from '../types/editorial';
import { EditorialImage } from './EditorialImage';

interface ArticleReaderModalProps {
  article: EditorialArticle | null;
  onClose: () => void;
  onOpenInquiry: (preset: InquiryPreset) => void;
}

export function ArticleReaderModal({
  article,
  onClose,
  onOpenInquiry,
}: ArticleReaderModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setScrollProgress(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [article]);

  if (!article) return null;

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    if (max <= 0) {
      setScrollProgress(100);
      return;
    }
    setScrollProgress(Math.min(100, Math.round((el.scrollTop / max) * 100)));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/60 backdrop-blur-[4px] p-0 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full h-full sm:h-auto sm:max-h-[92vh] max-w-[1040px] bg-[#fcf9f4] sm:rounded-[8px] border border-[#0D0D0D]/12 editorial-shadow-level-3 overflow-hidden">
        {/* Top Bar & Reading Progress */}
        <div className="shrink-0 bg-[#FFFFFF] border-b border-[#0D0D0D]/10">
          <div className="flex items-center justify-between gap-4 px-5 sm:px-8 h-16">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#7A5806] cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Volver a la edición</span>
            </button>

            <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
              {article.kicker}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar artículo"
              className="inline-flex items-center justify-center h-11 w-11 rounded-[4px] border border-[#0D0D0D]/15 text-[#0D0D0D] hover:bg-[#f6f3ee] cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-[2px] w-full bg-[#0D0D0D]/8">
            <div
              className="h-full bg-[#B8860B] transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Scrollable Editorial Body */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 sm:px-10 lg:px-14 py-8 sm:py-12 space-y-10"
        >
          {/* Article Crown */}
          <header className="max-w-3xl space-y-4 pb-8 border-b border-[#B8860B]/60">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#444748]">
              <span className="font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                {article.kicker}
              </span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{article.coordinates}</span>
            </div>

            <h1
              id="article-modal-title"
              className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.15] text-[#0D0D0D] text-balance"
            >
              {article.title}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#444748]">
              {article.subtitle}
            </p>

            <p className="text-xs font-semibold text-[#1c1c19] pt-2">
              Por {article.author} · <span className="font-normal text-[#444748]">{article.authorRole}</span>
            </p>
          </header>

          {/* Hero Photo */}
          <div>
            <EditorialImage
              src={article.image}
              alt={article.imageAlt}
              aspectClassName="aspect-[16/9]"
              caption={article.figureCaption}
            />
          </div>

          {/* 70/30 Asymmetric Reading Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 max-w-[68ch]">
              {article.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-5">
                  {section.heading && (
                    <h2 className="font-serif text-2xl font-semibold text-[#0D0D0D] pt-3">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-[16px] leading-[1.8] text-[#1c1c19] ${
                        sIdx === 0 && pIdx === 0
                          ? 'first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#0D0D0D]'
                          : ''
                      }`}
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))}

              {/* Editorial Pull Quote */}
              <blockquote className="my-8 py-6 border-y border-[#B8860B] font-serif italic text-xl sm:text-2xl leading-relaxed text-[#0D0D0D]">
                “{article.leadQuote}”
              </blockquote>
            </div>

            {/* Right Margin Notes */}
            <aside className="lg:col-span-4 space-y-5 lg:border-l lg:border-[#0D0D0D]/10 lg:pl-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
                NOTAS DE MARGEN Y DATOS
              </p>
              <div className="space-y-6">
                {article.marginNotes.map((note) => (
                  <div key={note.anchor} className="space-y-1.5 pb-5 border-b border-[#0D0D0D]/10 last:border-b-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#7A5806] tabular-nums">
                      {note.anchor}
                    </p>
                    <h3 className="text-sm font-semibold text-[#0D0D0D]">{note.title}</h3>
                    <p className="text-xs leading-relaxed text-[#444748]">{note.body}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/10 p-5 space-y-3">
                <p className="text-xs font-semibold text-[#0D0D0D]">
                  ¿Desea profundizar en este sector?
                </p>
                <p className="text-xs leading-relaxed text-[#444748]">
                  Solicite nuestro memorándum técnico con comparables vigentes en Tuxpan.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenInquiry({
                      subject: `Memorándum técnico: ${article.title}`,
                      category: article.relatedInterest,
                    });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-[4px] bg-[#7A5806] text-[#FFFFFF] text-xs font-semibold hover:bg-[#5E4304] transition-colors cursor-pointer"
                >
                  <span>Solicitar Memorándum</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
