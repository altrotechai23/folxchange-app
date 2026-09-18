import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";
import Navbar from "@/components/navigation/Navbar";

const currencies = [
  { code: "NGN", label: "Nigerian Naira", symbol: "₦" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "GBP", label: "British Pound", symbol: "£" },
  { code: "EUR", label: "Euro", symbol: "€" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="
          relative isolate
          min-h-screen
          overflow-hidden
          px-5 pb-16 pt-28
          sm:px-6 sm:pt-32
          lg:flex lg:min-h-[calc(100svh-80px)] lg:items-center
          lg:px-8 lg:py-30
        "
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            left-1/2 top-[-12rem]
            h-[28rem] w-[28rem]
            -translate-x-1/2
            rounded-full
            bg-[var(--primary)]
            opacity-[0.09]
            blur-[100px]
            lg:left-[18%]
            lg:top-[-10rem]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            bottom-[-12rem] right-[-8rem]
            h-[26rem] w-[26rem]
            rounded-full
            bg-[var(--accent)]
            opacity-[0.07]
            blur-[110px]
          "
        />

        <div className="container relative z-10">
          <div
            className="
              grid items-center gap-14
              lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)]
              lg:gap-16
            "
          >
            {/* Copy */}
            <div className="max-w-3xl">
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-3 py-2
                  text-xs font-semibold
                  text-[var(--muted)]
                  shadow-sm
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute inline-flex h-full w-full
                      animate-ping rounded-full
                      bg-[var(--accent)]
                      opacity-60
                    "
                  />
                  <span
                    className="
                      relative inline-flex h-2 w-2
                      rounded-full bg-[var(--accent)]
                    "
                  />
                </span>

                Built for a borderless financial life
              </div>

              <p
                className="
                  mb-5
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-[var(--primary)]
                  sm:text-sm
                "
              >
                Simplify your finances
              </p>

              <h1
                className="
                  heading-xl
                  max-w-4xl
                  text-[var(--foreground)]
                "
              >
                Move money.
                <br />
                <span className="text-gradient">
                  Without borders.
                </span>
              </h1>

              <p
                className="
                  mt-7 max-w-xl
                  text-base leading-7
                  text-[var(--muted)]
                  sm:text-lg sm:leading-8
                "
              >
                Exchange digital assets, move between currencies,
                manage your wallet and take care of everyday
                payments from one beautifully simple platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#signup"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl
                    bg-[var(--primary)]
                    px-6 py-4
                    text-sm font-bold text-white
                    shadow-[0_18px_50px_rgba(var(--shadow-color),0.24)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[var(--primary-hover)]
                  "
                >
                  Get started
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#features"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    px-6 py-4
                    text-sm font-bold
                    text-[var(--foreground)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--border-strong)]
                    hover:bg-[var(--surface-muted)]
                  "
                >
                  Explore FolXchange
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>

              {/* Trust points */}
              <div
                className="
                  mt-9
                  flex flex-wrap gap-x-5 gap-y-3
                  text-xs font-medium
                  text-[var(--muted)]
                "
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--accent)]" />
                  Secure by design
                </span>

                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[var(--accent)]" />
                  Fast transactions
                </span>

                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--accent)]" />
                  Transparent experience
                </span>
              </div>
            </div>

            {/* Exchange product visual */}
            <div className="relative mx-auto w-full max-w-[460px]">
              <div
                aria-hidden="true"
                className="
                  absolute inset-x-8 top-8
                  h-full
                  rounded-[2.5rem]
                  bg-[var(--primary)]
                  opacity-10
                  blur-3xl
                "
              />

              <div
                className="
                  card glow
                  relative overflow-hidden
                  rounded-[2.25rem]
                  p-4
                  sm:p-5
                "
              >
                {/* Card header */}
                <div className="flex items-center justify-between px-2 pb-5">
                  <div>
                    <p className="text-sm font-bold">
                      Exchange
                    </p>
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Simple. Fast. Borderless.
                    </p>
                  </div>

                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      bg-[var(--primary-soft)]
                      text-[var(--primary)]
                    "
                  >
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>

                {/* From */}
                <div
                  className="
                    rounded-[1.5rem]
                    border border-[var(--border)]
                    bg-[var(--surface-muted)]
                    p-4
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--muted)]">
                      You send
                    </span>

                    <span className="text-xs text-[var(--muted)]">
                      Balance available
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        0.025
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Bitcoin
                      </p>
                    </div>

                    <div
                      className="
                        flex items-center gap-2
                        rounded-full
                        bg-[var(--surface)]
                        px-3 py-2
                        text-sm font-bold
                        shadow-sm
                      "
                    >
                      <span
                        className="
                          flex h-7 w-7 items-center justify-center
                          rounded-full
                          bg-[#f7931a]/15
                          text-sm
                        "
                      >
                        ₿
                      </span>
                      BTC
                    </div>
                  </div>
                </div>

                {/* Exchange indicator */}
                <div className="relative z-10 -my-3 flex justify-center">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full
                      border-4 border-[var(--surface)]
                      bg-[var(--primary)]
                      text-white
                      shadow-lg
                    "
                  >
                    <ArrowDown className="h-4 w-4" />
                  </div>
                </div>

                {/* To */}
                <div
                  className="
                    rounded-[1.5rem]
                    border border-[var(--border)]
                    bg-[var(--surface)]
                    p-4
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[var(--muted)]">
                      You receive
                    </span>

                    <span className="text-xs text-[var(--muted)]">
                      Estimated
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        ₦4,125,000
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Nigerian Naira
                      </p>
                    </div>

                    <div
                      className="
                        flex items-center gap-2
                        rounded-full
                        bg-[var(--surface-muted)]
                        px-3 py-2
                        text-sm font-bold
                      "
                    >
                      <span
                        className="
                          flex h-7 w-7 items-center justify-center
                          rounded-full
                          bg-[var(--accent-soft)]
                          text-sm
                        "
                      >
                        ₦
                      </span>
                      NGN
                    </div>
                  </div>
                </div>

                {/* Rate */}
                <div
                  className="
                    mt-4
                    flex items-center justify-between
                    rounded-2xl
                    bg-[var(--primary-soft)]
                    px-4 py-3
                    text-xs
                  "
                >
                  <span className="text-[var(--muted)]">
                    Indicative rate
                  </span>

                  <span className="font-bold text-[var(--primary)]">
                    1 BTC ≈ ₦165M
                  </span>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="
                    mt-4 flex w-full items-center
                    justify-center
                    rounded-2xl
                    bg-[var(--foreground)]
                    px-5 py-4
                    text-sm font-bold
                    text-[var(--background)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:opacity-90
                  "
                >
                  Start an exchange
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>

                <p className="mt-3 text-center text-[10px] text-[var(--muted)]">
                  Rates shown are illustrative.
                </p>
              </div>

              {/* Floating status */}
              <div
                className="
                  absolute -bottom-5 -left-3
                  hidden
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-4 py-3
                  shadow-[0_18px_50px_rgba(var(--shadow-color),0.12)]
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-xl
                      bg-[var(--accent-soft)]
                      text-[var(--accent)]
                    "
                  >
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Ready to move
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                      Your money, your control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Currency rail */}
          <div className="mt-16 border-t border-[var(--border)] pt-6 lg:mt-20">
            <div
              className="
                flex flex-col gap-4
                sm:flex-row sm:items-center sm:justify-between
              "
            >
              <p className="text-xs font-medium text-[var(--muted)]">
                Built around the currencies and assets you use.
              </p>

              <div className="flex flex-wrap gap-2">
                {currencies.map((currency) => (
                  <span
                    key={currency.code}
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-[var(--border)]
                      bg-[var(--surface)]
                      px-3 py-2
                      text-xs font-semibold
                      text-[var(--foreground)]
                    "
                    title={currency.label}
                  >
                    <span className="text-[var(--primary)]">
                      {currency.symbol}
                    </span>
                    {currency.code}
                  </span>
                ))}

                <span
                  className="
                    rounded-full
                    border border-dashed border-[var(--border-strong)]
                    px-3 py-2
                    text-xs font-semibold
                    text-[var(--muted)]
                  "
                >
                  + more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FolXchange */}
            {/* Why FolXchange */}
      <section
        id="why"
        className="
          relative overflow-hidden
          border-t border-[var(--border)]
          bg-[var(--surface)]
          px-5 py-24
          sm:px-6 sm:py-32
          lg:px-8 lg:py-40
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            right-[-10rem] top-[-8rem]
            h-[28rem] w-[28rem]
            rounded-full
            bg-[var(--primary)]
            opacity-[0.045]
            blur-[110px]
          "
        />

        <div className="container relative z-10">
          {/* Section intro */}
          <div
            className="
              grid gap-8
              lg:grid-cols-[0.85fr_1.5fr]
              lg:items-end
              lg:gap-16
            "
          >
            <div>
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.22em]
                  text-[var(--primary)]
                "
              >
                Why FolXchange
              </p>

              <div
                className="
                  mt-5
                  flex items-center gap-2
                  text-xs font-medium
                  text-[var(--muted)]
                "
              >
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-[var(--accent)]
                  "
                />
                Finance, simplified
              </div>
            </div>

            <h2
              className="
                heading-lg
                max-w-4xl
                text-[var(--foreground)]
              "
            >
              Your money should feel
              <span className="text-[var(--primary)]">
                {" "}simple.
              </span>
            </h2>
          </div>

          <p
            className="
              mt-8 max-w-2xl
              text-base leading-7
              text-[var(--muted)]
              sm:text-lg sm:leading-8
            "
          >
            FolXchange brings the essential pieces of your
            financial life together, so moving between digital
            assets and everyday currencies feels clear,
            predictable and effortless.
          </p>

          {/* Product pillars */}
          <div
            className="
              mt-14 grid gap-4
              md:grid-cols-2
              lg:mt-20 lg:grid-cols-12
            "
          >
            {/* Primary card */}
            <article
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-[var(--border)]
                bg-[var(--surface-muted)]
                p-6
                sm:p-8
                lg:col-span-7
                lg:min-h-[430px]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[-5rem] top-[-5rem]
                  h-56 w-56
                  rounded-full
                  bg-[var(--primary)]
                  opacity-[0.08]
                  blur-3xl
                  transition-transform duration-700
                  group-hover:scale-125
                "
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-[var(--primary-soft)]
                      text-[var(--primary)]
                    "
                  >
                    <WalletCards className="h-5 w-5" />
                  </div>

                  <span
                    className="
                      rounded-full
                      border border-[var(--border)]
                      bg-[var(--surface)]
                      px-3 py-1.5
                      text-[10px] font-bold uppercase
                      tracking-[0.14em]
                      text-[var(--muted)]
                    "
                  >
                    One home
                  </span>
                </div>

                <div className="mt-auto pt-20">
                  <h3
                    className="
                      text-2xl font-bold
                      tracking-[-0.035em]
                      text-[var(--foreground)]
                      sm:text-3xl
                    "
                  >
                    Everything in one place.
                  </h3>

                  <p
                    className="
                      mt-4 max-w-lg
                      text-sm leading-6
                      text-[var(--muted)]
                      sm:text-base
                    "
                  >
                    Keep your digital assets and currencies
                    organized in one experience designed around
                    the way you actually move money.
                  </p>

                  <div
                    className="
                      mt-7 flex flex-wrap gap-2
                    "
                  >
                    {["BTC", "ETH", "USDT", "NGN", "USD", "GBP"].map(
                      (item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border border-[var(--border)]
                            bg-[var(--surface)]
                            px-3 py-2
                            text-[10px] font-bold
                            text-[var(--foreground)]
                          "
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* Confidence card */}
            <article
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-[var(--border)]
                bg-[var(--surface)]
                p-6
                sm:p-8
                lg:col-span-5
                lg:min-h-[430px]
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-[var(--accent-soft)]
                    text-[var(--accent)]
                  "
                >
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <ArrowUpRight
                  className="
                    h-5 w-5
                    text-[var(--muted)]
                    transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </div>

              <div className="mt-16">
                <p
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.18em]
                    text-[var(--accent)]
                  "
                >
                  Move with confidence
                </p>

                <h3
                  className="
                    mt-4
                    text-2xl font-bold
                    tracking-[-0.035em]
                    text-[var(--foreground)]
                    sm:text-3xl
                  "
                >
                  Clarity at every step.
                </h3>

                <p
                  className="
                    mt-4
                    text-sm leading-6
                    text-[var(--muted)]
                    sm:text-base
                  "
                >
                  Know what you are sending, what you are
                  receiving and where your transaction stands.
                </p>
              </div>

              <div
                className="
                  absolute bottom-8 left-6 right-6
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface-muted)]
                  p-4
                  sm:left-8 sm:right-8
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--muted)]">
                    Transaction status
                  </span>

                  <span
                    className="
                      inline-flex items-center gap-1.5
                      text-xs font-bold
                      text-[var(--accent)]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Clear
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                  <div
                    className="
                      h-full w-3/4
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />
                </div>
              </div>
            </article>

            {/* Everyday life card */}
            <article
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-[var(--border)]
                bg-[var(--foreground)]
                p-6
                text-[var(--background)]
                sm:p-8
                lg:col-span-12
                lg:min-h-[290px]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  bottom-[-8rem] right-[-4rem]
                  h-72 w-72
                  rounded-full
                  bg-[var(--primary)]
                  opacity-30
                  blur-[90px]
                "
              />

              <div
                className="
                  relative
                  grid gap-10
                  lg:grid-cols-[1fr_auto]
                  lg:items-end
                "
              >
                <div>
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-[var(--background)]/10
                      text-[var(--background)]
                    "
                  >
                    <Zap className="h-5 w-5" />
                  </div>

                  <p
                    className="
                      mt-8
                      text-xs font-bold uppercase
                      tracking-[0.18em]
                      opacity-60
                    "
                  >
                    Built for real life
                  </p>

                  <h3
                    className="
                      mt-4 max-w-2xl
                      text-3xl font-bold
                      tracking-[-0.045em]
                      sm:text-4xl
                    "
                  >
                    From digital assets to
                    everyday payments.
                  </h3>
                </div>

                <div className="max-w-sm">
                  <p
                    className="
                      text-sm leading-6
                      opacity-65
                      sm:text-base
                    "
                  >
                    Exchange what you have, pay for what you
                    need and keep your financial journey moving
                    without unnecessary friction.
                  </p>

                  <a
                    href="#features"
                    className="
                      mt-6 inline-flex items-center gap-2
                      text-sm font-bold
                      transition-opacity duration-300
                      hover:opacity-70
                    "
                  >
                    See what you can do
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="
          border-t border-[var(--border)]
          bg-[var(--surface-muted)]
          px-5 py-24
          sm:px-6 sm:py-32
          lg:px-8
        "
      >
        <div className="container">
          <p
            className="
              text-xs font-bold uppercase
              tracking-[0.22em]
              text-[var(--primary)]
            "
          >
            Key features
          </p>

          <h2
            className="
              heading-lg mt-5
              text-[var(--foreground)]
            "
          >
            Everything you need.
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="
          flex min-h-[70vh]
          items-center justify-center
          bg-[var(--foreground)]
          px-5
          sm:px-6
        "
      >
        <div className="text-center text-[var(--background)]">
          <h2 className="heading-lg">
            Your finances.
            <br />
            Your control.
          </h2>
        </div>
      </section>
    </main>
  );
}