import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import { advocate } from "@/data/advocate";

const particulars = [
  {
    label: "Enrolment number",
    labelHi: "नामांकन संख्या",
    value: advocate.enrolmentNumber,
  },
  {
    label: "Year of enrolment",
    labelHi: "नामांकन वर्ष",
    value: advocate.enrolmentYear,
  },
  {
    label: "State Bar Council (original)",
    labelHi: "राज्य बार काउंसिल (मूल)",
    value: `${advocate.stateBarCouncilOriginal}, ${advocate.stateBarCouncilSeat}`,
  },
  {
    label: "State Bar Council (current roll)",
    labelHi: "राज्य बार काउंसिल (वर्तमान)",
    value: `${advocate.stateBarCouncilCurrent}, ${advocate.stateBarCouncilSeat}`,
  },
  {
    label: "Bar Association",
    labelHi: "बार एसोसिएशन",
    value: advocate.barAssociation,
  },
  {
    label: "Certificate of Practice / AIBE",
    labelHi: "प्रैक्टिस प्रमाणपत्र / ए.आई.बी.ई.",
    value: advocate.copAibe,
  },
];

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <main id="main">
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(17rem,0.92fr)_minmax(0,1.18fr)] lg:gap-14 lg:py-20">
            <Portrait />

            <div>
              <p className="font-deva text-[0.75rem] tracking-[0.28em] text-gold uppercase">
                {advocate.designationHi} · {advocate.designation} ·{" "}
                {advocate.localityHi}
              </p>
              <h1 className="mt-5 font-heading text-[2.65rem] leading-[1.08] font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
                {advocate.name}
              </h1>
              <p className="font-deva mt-3 text-xl text-ink-muted sm:text-2xl">
                {advocate.nameHi}
              </p>
              <div className="mt-8 h-px w-24 bg-gold" />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
                Advocate practising at {advocate.court}, Uttar Pradesh.
                <span className="font-deva mt-1 block text-base">
                  अधिवक्ता, {advocate.courtHi}, उत्तर प्रदेश।
                </span>
              </p>
              <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
                This page records professional particulars permitted to be
                published on an advocate’s website. It is intended so that a
                person already seeking this information may verify name, place
                of practice, enrolment and areas of practice.
              </p>
            </div>
          </div>
        </section>

        <section
          id="particulars"
          className="border-b border-ink/10"
          aria-labelledby="particulars-heading"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <h2
                id="particulars-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Professional particulars
              </h2>
              <p className="font-deva mt-2 text-sm tracking-wide text-ink-muted">
                व्यावसायिक विवरण
              </p>
            </Reveal>

            <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {particulars.map((row, index) => (
                <Reveal key={row.label} delayMs={index * 40}>
                  <div className="grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8 sm:py-6">
                    <dt>
                      <span className="text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
                        {row.label}
                      </span>
                      <span className="font-deva mt-1 block text-xs text-ink/45">
                        {row.labelHi}
                      </span>
                    </dt>
                    <dd className="text-lg text-ink sm:text-xl">{row.value}</dd>
                  </div>
                </Reveal>
              ))}
              {advocate.qualifications.map((row) => (
                <Reveal key={row.label} delayMs={particulars.length * 40}>
                  <div className="grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8 sm:py-6">
                    <dt>
                      <span className="text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
                        {row.label}
                      </span>
                      <span className="font-deva mt-1 block text-xs text-ink/45">
                        {row.labelHi}
                      </span>
                    </dt>
                    <dd className="text-lg text-ink sm:text-xl">{row.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="practice"
          className="border-b border-ink/10 bg-paper-deep"
          aria-labelledby="practice-heading"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <h2
                id="practice-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Areas of practice
              </h2>
              <p className="font-deva mt-2 text-sm tracking-wide text-ink-muted">
                अभ्यास के क्षेत्र
              </p>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ink/70">
                The following categories of work are recorded as areas of
                practice.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-4 lg:grid-cols-3">
              {advocate.areasOfPractice.map((area, index) => (
                <Reveal key={area.en} delayMs={index * 70}>
                  <li className="h-full border border-ink/12 bg-paper px-5 py-6">
                    <p className="font-heading text-2xl font-semibold text-ink">
                      {area.en}
                    </p>
                    <p className="font-deva mt-2 text-sm text-ink-muted">
                      {area.hi}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                      {area.matters.map((matter) => (
                        <li
                          key={matter}
                          className="text-sm leading-snug text-ink/80"
                        >
                          {matter}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <h2
                id="contact-heading"
                className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Address and contact
              </h2>
              <p className="font-deva mt-2 text-sm tracking-wide text-ink-muted">
                पता और संपर्क
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <Reveal>
                <p className="text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
                  Address
                </p>
                <p className="mt-2 text-lg leading-snug text-ink">
                  {advocate.address}
                </p>
                <p className="font-deva mt-1 text-sm text-ink-muted">
                  {advocate.addressHi}
                </p>
              </Reveal>
              <Reveal delayMs={70}>
                <p className="text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
                  Telephone
                </p>
                <a
                  href={`tel:${advocate.phoneTel}`}
                  className="mt-2 inline-block text-lg text-ink underline decoration-gold/50 underline-offset-4 transition-colors duration-300 hover:decoration-gold"
                >
                  {advocate.phoneDisplay}
                </a>
              </Reveal>
              <Reveal delayMs={140}>
                <p className="text-[0.7rem] tracking-[0.16em] text-ink-muted uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${advocate.email}`}
                  className="mt-2 inline-block break-all text-lg text-ink underline decoration-gold/50 underline-offset-4 transition-colors duration-300 hover:decoration-gold"
                >
                  {advocate.email}
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
