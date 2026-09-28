import Image from "next/image";
import Script from "next/script";
import RsvpForm from "@/components/RsvpForm";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80";
const STORY_IMAGE =
  "https://images.unsplash.com/photo-1522673607200-164a1a3e8c45?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <main>
      <script src="https://chatwidgetjs.vercel.app/widget.js" data-widget-id="01M3HVW5G1AKGRMEWRHFE5CCMF" data-color="#7C3AED" data-launcher-icon="mail" data-position="bottom-right" data-tags="wedding-1" async></script>
      {/* Hero — one composition, brand first */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Couple walking together at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/20" />
        <div className="animate-soft-glow absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(15,28,26,0.35)_100%)]" />

        <div className="relative z-10 w-full px-6 pb-16 pt-28 text-center text-pearl sm:pb-20 sm:pt-32">
          <p className="animate-fade-up text-xs uppercase tracking-[0.45em] text-champagne-soft">
            Together with their families
          </p>
          <h1 className="animate-fade-up-delay mt-4 font-[family-name:var(--font-script)] text-[clamp(3.5rem,12vw,7rem)] leading-none text-pearl">
            Meera &amp; Arjun
          </h1>
          <div className="animate-line-grow mx-auto mt-5 h-px w-24 bg-champagne" />
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-md font-[family-name:var(--font-display)] text-xl font-light tracking-wide text-pearl/90 sm:text-2xl">
            We&apos;re getting married — and you&apos;re invited to celebrate
            with us.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#celebration"
              className="bg-pearl px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-ink transition hover:bg-champagne-soft"
            >
              Wedding details
            </a>
            <a
              href="#rsvp"
              className="border border-pearl/50 px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-pearl transition hover:border-champagne hover:text-champagne-soft"
            >
              RSVP
            </a>
          </div>
          <p className="animate-fade-up-delay-2 mt-10 text-sm tracking-[0.3em] text-pearl/70 uppercase">
            12 · 12 · 2026
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-pearl">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={STORY_IMAGE}
              alt="Soft floral wedding florals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sage">
              Our story
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-forest sm:text-5xl">
              A quiet beginning, a lifelong promise
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 font-light">
              What started as late-night chai and shared playlists grew into a
              love that feels like home. On a quiet December evening, we say
              yes — again — in front of the people who shaped us.
            </p>
          </div>
        </div>
      </section>

      {/* Celebration */}
      <section
        id="celebration"
        className="section-pad relative overflow-hidden bg-forest text-pearl"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-champagne/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-champagne-soft">
            The celebration
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium sm:text-5xl">
            When &amp; where
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pearl/75 font-light">
            Join us for vows under the evening sky, followed by dinner and
            dancing.
          </p>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="font-[family-name:var(--font-script)] text-3xl text-champagne-soft">
                Ceremony
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-pearl/60">
                Saturday, December 12
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                5:30 in the evening
              </p>
              <p className="mt-4 text-pearl/70 font-light leading-relaxed">
                The Royal Pavilion
                <br />
                Amer Road, Jaipur
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-script)] text-3xl text-champagne-soft">
                Reception
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-pearl/60">
                Same evening
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                7:30 onwards
              </p>
              <p className="mt-4 text-pearl/70 font-light leading-relaxed">
                Garden Lawn &amp; Courtyard
                <br />
                Dinner · Music · Celebration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="section-pad bg-mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sage">
            Kindly reply
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-forest sm:text-5xl">
            Will you be there?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink/70 font-light">
            Please RSVP by November 15 so we can save you a seat at the table.
          </p>
          <RsvpForm />
        </div>
      </section>

      <footer className="bg-ink px-6 py-12 text-center text-pearl/50">
        <p className="font-[family-name:var(--font-script)] text-3xl text-champagne-soft">
          Meera &amp; Arjun
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em]">
          With love · 12.12.2026
        </p>
      </footer>
    </main>
  );
}
