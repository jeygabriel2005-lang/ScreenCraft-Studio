import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { InquiryPreset } from '../types/editorial';

interface InquiryModalProps {
  isOpen: boolean;
  preset: InquiryPreset | null;
  onClose: () => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  consent?: string;
}

const BRACKETS = [
  '$10M — $20M MXN',
  '$20M — $40M MXN',
  '$40M+ MXN (Institucional)',
];

export function InquiryModal({ isOpen, preset, onClose }: InquiryModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bracket, setBracket] = useState(BRACKETS[1]);
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedFolio, setSubmittedFolio] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSubmittedFolio(null);
      setErrors({});
      if (preset?.subject) {
        setNotes(preset.subject + (preset.assetCode ? ` (Clave: ${preset.assetCode})` : ''));
      }
    }
  }, [isOpen, preset]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 3) {
      nextErrors.fullName = 'Ingrese su nombre completo o razón social.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Ingrese un correo electrónico válido.';
    }
    if (phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Ingrese un número telefónico de al menos 10 dígitos.';
    }
    if (!consent) {
      nextErrors.consent = 'Confirme la autorización para recibir el dossier confidencial.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setSubmittedFolio(`TXP-2026-${randomDigits}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/60 backdrop-blur-[4px] p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[600px] max-h-[92vh] overflow-y-auto rounded-[8px] bg-[#FFFFFF] border border-[#0D0D0D]/12 editorial-shadow-level-3">
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-[#0D0D0D]/10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#7A5806]">
              MESA PATRIMONIAL · TUXPAN
            </p>
            <h2
              id="inquiry-modal-title"
              className="font-serif text-2xl font-semibold text-[#0D0D0D]"
            >
              Solicitar Dossier Confidencial
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="inline-flex items-center justify-center h-11 w-11 rounded-[4px] border border-[#0D0D0D]/15 text-[#0D0D0D] hover:bg-[#f6f3ee] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submittedFolio ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-[8px] bg-[#fcf9f4] border border-[#1B5E20]/30 p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#1B5E20] font-semibold text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Solicitud registrada con éxito</span>
              </div>
              <p className="font-serif text-2xl font-semibold text-[#0D0D0D]">
                Folio de atención: <span className="tabular-nums">{submittedFolio}</span>
              </p>
              <p className="text-sm leading-relaxed text-[#444748]">
                Nuestro equipo editorial y de estructuración patrimonial enviará la documentación
                solicitada a <strong className="text-[#0D0D0D]">{email}</strong> dentro de las
                próximas horas hábiles.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[48px] px-5 py-3 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold hover:bg-[#262626] cursor-pointer"
            >
              Regresar a la publicación
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="inq-name" className="block text-xs font-bold uppercase tracking-[0.06em] text-[#0D0D0D]">
                Nombre Completo o Firma
              </label>
              <input
                id="inq-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Lic. Fernando Salgado / Grupo Costero"
                className={`w-full min-h-[48px] px-4 rounded-[4px] bg-[#FFFFFF] text-[15px] text-[#0D0D0D] placeholder:text-[#0D0D0D]/45 border ${
                  errors.fullName
                    ? 'border-[#C62828] outline-3 outline-[#C62828]'
                    : 'border-[#0D0D0D]/20 focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806]'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs font-medium text-[#C62828]">{errors.fullName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="inq-email" className="block text-xs font-bold uppercase tracking-[0.06em] text-[#0D0D0D]">
                  Correo Electrónico
                </label>
                <input
                  id="inq-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@empresa.mx"
                  className={`w-full min-h-[48px] px-4 rounded-[4px] bg-[#FFFFFF] text-[15px] text-[#0D0D0D] placeholder:text-[#0D0D0D]/45 border ${
                    errors.email
                      ? 'border-[#C62828] outline-3 outline-[#C62828]'
                      : 'border-[#0D0D0D]/20 focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs font-medium text-[#C62828]">{errors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="inq-phone" className="block text-xs font-bold uppercase tracking-[0.06em] text-[#0D0D0D]">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="inq-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+52 55 1234 5678"
                  className={`w-full min-h-[48px] px-4 rounded-[4px] bg-[#FFFFFF] text-[15px] text-[#0D0D0D] placeholder:text-[#0D0D0D]/45 border ${
                    errors.phone
                      ? 'border-[#C62828] outline-3 outline-[#C62828]'
                      : 'border-[#0D0D0D]/20 focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs font-medium text-[#C62828]">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Radio Options with 44x44px touch targets */}
            <fieldset className="space-y-2">
              <legend className="text-xs font-bold uppercase tracking-[0.06em] text-[#0D0D0D]">
                Rango de Asignación Estimado
              </legend>
              <div className="grid grid-cols-1 gap-1.5">
                {BRACKETS.map((option) => {
                  const selected = bracket === option;
                  return (
                    <label
                      key={option}
                      className="flex items-center gap-2 min-h-[44px] px-3 rounded-[4px] border border-[#0D0D0D]/12 bg-[#fcf9f4] cursor-pointer hover:border-[#0D0D0D]/40"
                    >
                      <span className="inline-flex h-11 w-11 -ml-2 items-center justify-center shrink-0">
                        <input
                          type="radio"
                          name="bracket"
                          value={option}
                          checked={selected}
                          onChange={() => setBracket(option)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`h-5 w-5 rounded-full border-2 border-[#0D0D0D] flex items-center justify-center bg-[#FFFFFF]`}
                        >
                          {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#0D0D0D]" />}
                        </span>
                      </span>
                      <span className="text-sm font-medium text-[#0D0D0D] tabular-nums">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="space-y-1.5">
              <label htmlFor="inq-notes" className="block text-xs font-bold uppercase tracking-[0.06em] text-[#0D0D0D]">
                Interés Específico o Clave de Propiedad
              </label>
              <textarea
                id="inq-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Indique si requiere planos topográficos, corrida financiera o agenda de visita."
                className="w-full p-3.5 rounded-[4px] bg-[#FFFFFF] text-[15px] text-[#0D0D0D] placeholder:text-[#0D0D0D]/45 border border-[#0D0D0D]/20 focus:border-[#7A5806] focus:outline-3 focus:outline-[#7A5806]"
              />
            </div>

            {/* Checkbox with 44x44px touch target */}
            <div className="space-y-1">
              <label className="flex items-start gap-1.5 cursor-pointer">
                <span className="inline-flex h-11 w-11 -ml-2.5 -mt-1 items-center justify-center shrink-0">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`h-5 w-5 rounded-[4px] border-2 border-[#0D0D0D] flex items-center justify-center ${
                      consent ? 'bg-[#0D0D0D] text-[#FFFFFF]' : 'bg-[#FFFFFF]'
                    }`}
                  >
                    {consent && (
                      <svg viewBox="0 0 12 10" className="h-3 w-3 stroke-current fill-none" strokeWidth="2">
                        <path d="M1 5l3 3 7-7" />
                      </svg>
                    )}
                  </span>
                </span>
                <span className="text-xs leading-relaxed text-[#444748] pt-1">
                  Autorizo a Tuxpan Alta Gama Editorial a remitir el dossier técnico y agendar
                  contacto confidencial conforme al aviso de privacidad.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs font-medium text-[#C62828]">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full min-h-[48px] px-6 py-3 rounded-[4px] bg-[#0D0D0D] text-[#FFFFFF] text-sm font-semibold hover:bg-[#262626] transition-colors cursor-pointer"
            >
              Enviar Solicitud de Dossier
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
