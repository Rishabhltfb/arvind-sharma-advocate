import { advocate } from "@/data/advocate";

const links = [
  { href: "#particulars", label: "Particulars" },
  { href: "#practice", label: "Areas of practice" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-ink"
        >
          {advocate.name}
        </a>
        <nav aria-label="Page sections" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-[0.8rem] tracking-[0.12em] text-ink-muted uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
