export const locales = {
  "en-NG": {
    code: "en-NG",
    name: "Nigeria",
    language: "English",
    currency: "NGN",
    flag: "🇳🇬",
  },

  "en-GB": {
    code: "en-GB",
    name: "United Kingdom",
    language: "English",
    currency: "GBP",
    flag: "🇬🇧",
  },

  "en-US": {
    code: "en-US",
    name: "United States",
    language: "English",
    currency: "USD",
    flag: "🇺🇸",
  },

  "en-EU": {
    code: "en-EU",
    name: "Europe",
    language: "English",
    currency: "EUR",
    flag: "🇪🇺",
  },
} as const;

export type LocaleCode = keyof typeof locales;