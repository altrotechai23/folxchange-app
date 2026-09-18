export const currencies = {
  NGN: {
    code: "NGN",
    symbol: "₦",
    name: "Nigerian Naira",
    locale: "en-NG",
    type: "fiat",
  },

  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    locale: "en-US",
    type: "fiat",
  },

  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    locale: "en-GB",
    type: "fiat",
  },

  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro",
    locale: "en-IE",
    type: "fiat",
  },

  BTC: {
    code: "BTC",
    symbol: "₿",
    name: "Bitcoin",
    locale: "en-US",
    type: "crypto",
  },

  ETH: {
    code: "ETH",
    symbol: "Ξ",
    name: "Ethereum",
    locale: "en-US",
    type: "crypto",
  },

  USDT: {
    code: "USDT",
    symbol: "₮",
    name: "Tether",
    locale: "en-US",
    type: "crypto",
  },

  USDC: {
    code: "USDC",
    symbol: "$",
    name: "USD Coin",
    locale: "en-US",
    type: "crypto",
  },
} as const;

export type CurrencyCode = keyof typeof currencies;