import { EXCHANGE_RATE_MXN_USD } from '../data/editorialData';
import type { CurrencyCode } from '../types/editorial';

export function formatCurrency(amountMxn: number, currency: CurrencyCode): string {
  const value = currency === 'USD' ? amountMxn / EXCHANGE_RATE_MXN_USD : amountMxn;
  const formatted = new Intl.NumberFormat('es-MX', {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
  return `$${formatted} ${currency}`;
}

export function formatArea(sqm: number): string {
  return `${new Intl.NumberFormat('es-MX').format(sqm)} m²`;
}
