import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="
          flex min-h-screen
          items-center justify-center
          bg-[var(--background)]
          px-6
          pt-24
          transition-colors duration-300
        "
      >
        <div className="text-center">
          <p
            className="
              mb-4
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[var(--primary)]
            "
          >
            Simplify Your Finances
          </p>

          <h1
            className="
              heading-xl
              max-w-4xl
              text-[var(--foreground)]
            "
          >
            Your digital assets.
            <br />
            <span className="text-[var(--primary)]">
              Simply managed.
            </span>
          </h1>

          <p
            className="
              mx-auto mt-6
              max-w-xl
              text-base leading-7
              text-[var(--muted)]
              md:text-lg
            "
          >
            Convert digital assets to fiat, pay your bills,
            manage your wallet and stay in control from one
            beautifully simple platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#signup"
              className="
                rounded-2xl
                bg-[var(--primary)]
                px-7 py-4
                font-semibold text-white
                shadow-[0_15px_40px_rgba(var(--shadow-color),0.22)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--primary-hover)]
              "
            >
              Get started
            </a>

            <a
              href="#features"
              className="
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--surface)]
                px-7 py-4
                font-semibold
                text-[var(--foreground)]
                transition-all duration-300
                hover:border-[var(--border-strong)]
                hover:bg-[var(--surface-muted)]
              "
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      {/* Why FolXchange */}
      <section
        id="why"
        className="
          min-h-screen
          bg-[var(--surface)]
          px-6 py-32
          transition-colors duration-300
        "
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[var(--primary)]
            "
          >
            Why FolXchange
          </p>

          <h2
            className="
              heading-lg mt-5
              text-[var(--foreground)]
            "
          >
            Finance without
            <br />
            unnecessary complexity.
          </h2>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="
          min-h-screen
          bg-[var(--surface-muted)]
          px-6 py-32
          transition-colors duration-300
        "
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
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
          px-6
          transition-colors duration-300
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