import {
  currencies,
  type CurrencyCode,
} from "@/config/currencies";

export function formatCurrency(
  amount: number,
  currency: CurrencyCode,
) {
  const config = currencies[currency];

  if (config.type === "crypto") {
    return new Intl.NumberFormat(config.locale, {
      maximumFractionDigits: 8,
    }).format(amount) + ` ${config.symbol}`;
  }

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    maximumFractionDigits: 2,
  }).format(amount);
}