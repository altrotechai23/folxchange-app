import Navbar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section
        id="home"
        className="
          flex min-h-screen
          items-center justify-center
          px-6
          pt-24
        "
      >
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3157ed]">
            Simplify Your Finances
          </p>

          <h1 className="heading-xl max-w-4xl text-[#111a55]">
            Your digital assets.
            <br />
            <span className="text-[#3157ed]">
              Simply managed.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#667092] md:text-lg">
            Convert digital assets to fiat, pay your bills,
            manage your wallet and stay in control from one
            beautifully simple platform.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#signup"
              className="
                rounded-2xl bg-[#3157ed]
                px-7 py-4
                font-semibold text-white
                shadow-[0_15px_40px_rgba(49,87,237,0.22)]
              "
            >
              Get started
            </a>

            <a
              href="#features"
              className="
                rounded-2xl border border-[#111a55]/10
                bg-white px-7 py-4
                font-semibold text-[#111a55]
              "
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="min-h-screen bg-white px-6 py-32"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3157ed]">
            Why FolXchnage
          </p>

          <h2 className="heading-lg mt-5 text-[#111a55]">
            Finance without
            <br />
            unnecessary complexity.
          </h2>
        </div>
      </section>

      <section
        id="features"
        className="min-h-screen bg-[#eaf0ff] px-6 py-32"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3157ed]">
            Key features
          </p>

          <h2 className="heading-lg mt-5 text-[#111a55]">
            Everything you need.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="
          flex min-h-[70vh]
          items-center justify-center
          bg-[#111a55]
          px-6
        "
      >
        <div className="text-center text-white">
          <h2 className="heading-lg">
            Your finances.
            <br />
            Your control..
          </h2>
        </div>
      </section>
    </main>
  );
}