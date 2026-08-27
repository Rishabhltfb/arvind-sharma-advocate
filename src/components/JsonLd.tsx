import { advocate, SITE_URL } from "@/data/advocate";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: advocate.name,
    jobTitle: advocate.designation,
    url: SITE_URL,
    email: advocate.email,
    telephone: advocate.phoneTel,
    image: `${SITE_URL}${advocate.portrait.src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Civil Court",
      addressLocality: advocate.locality,
      addressRegion: advocate.region,
      addressCountry: advocate.country,
    },
    memberOf: [
      {
        "@type": "Organization",
        name: advocate.stateBarCouncilCurrent,
      },
      {
        "@type": "Organization",
        name: advocate.barAssociation,
      },
    ],
    knowsAbout: advocate.areasOfPractice.map((area) => area.en),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
