# Arvind Kumar Sharma — Advocate, Aligarh

Informational website for **Arvind Kumar Sharma**, Advocate, practising at Civil Court, Aligarh. It is a digital visiting card, not a marketing page.

## Bar Council of India (keep this page compliant)

The site is limited to particulars allowed under **Rule 36** of the Bar Council of India Rules, as amended by **Resolution No. 50/2008**. Extra promotional content can be treated as professional misconduct under Section 35 of the Advocates Act, 1961.

### Allowed on this site

- Name, address, telephone, email
- Enrolment number, year of enrolment, State Bar Council
- Bar Association membership
- Certificate of Practice / AIBE number
- Academic qualifications
- Areas of practice (listed as categories, without superlatives)

### Not allowed (do not add)

- Photographs of the advocate (especially in connection with cases)
- Father’s name as a public field
- Testimonials, client names, success rates, fees
- Words such as “best”, “leading”, “expert”, “specialist”, “guaranteed”
- Chatbots, enquiry funnels, “book now” / WhatsApp campaign buttons
- Google Ads or paid promotion
- City-farm landing pages or keyword-stuffed metadata

### First-visit disclaimer

Visitors must choose **I Agree** or **I Do Not Agree** before using the page. Agreement is stored in `sessionStorage` for the browser tab only.

### Intimation to the Bar Council of India

The 2008 proviso requires the website to be set up **under intimation to and as approved by** the Bar Council of India. Publishing this site does not complete that step. The advocate must intimate BCI separately.

## Content source of truth

Edit [`src/data/advocate.ts`](src/data/advocate.ts) only. Do not duplicate particulars in other files.

### Academic qualifications placeholder

`qualifications` currently reads **To be updated**. Replace it with the actual degree, university and year when available, for example:

```ts
qualifications: [
  {
    label: "Academic qualifications",
    labelHi: "शैक्षणिक अर्हताएँ",
    value: "LL.B., [University], [year]",
  },
],
```

### Canonical URL

Set `NEXT_PUBLIC_SITE_URL` (no trailing slash) before production, e.g. `https://example.in`. Until then, sitemap and JSON-LD use `http://localhost:3000`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Stack

Next.js (App Router), TypeScript, Tailwind CSS. Static generation for the single informational page.
