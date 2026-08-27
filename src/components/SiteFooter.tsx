import { advocate, INFORMATION_AS_ON } from "@/data/advocate";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper-deep">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">
          This page is an informational record under Rule 36 of the Bar Council
          of India Rules. It is not an advertisement or solicitation of work.
          Information is believed to be true as on {INFORMATION_AS_ON}.
        </p>
        <p className="font-deva mt-3 text-sm text-ink-muted">
          यह पृष्ठ विज्ञापन या कार्य हेतु आग्रह नहीं है।
        </p>
        <p className="mt-6 text-xs tracking-wide text-ink/45">
          {advocate.name} · {advocate.designation} · {advocate.locality}
        </p>
      </div>
    </footer>
  );
}
