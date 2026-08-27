/**
 * BCI Rule 36 / Resolution No. 50/2008 Schedule — permitted website particulars only.
 * Do not add testimonials, fees, success rates, years-of-practice marketing,
 * or promotional copy.
 * Portrait: professional identification image only — not in connection with any case.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const INFORMATION_AS_ON = "27 August 2026";

export const advocate = {
  name: "Arvind Kumar Sharma",
  nameHi: "अरविन्द कुमार शर्मा",
  designation: "Advocate",
  designationHi: "अधिवक्ता",
  chamber: "Chamber-19",
  streetAddress: "Chamber-19, District and Session Court",
  address: "Chamber-19, District and Session Court, Aligarh, Uttar Pradesh",
  addressHi: "चैम्बर-19, जिला एवं सत्र न्यायालय, अलीगढ़, उत्तर प्रदेश",
  court: "District and Session Court, Aligarh",
  courtHi: "जिला एवं सत्र न्यायालय, अलीगढ़",
  locality: "Aligarh",
  localityHi: "अलीगढ़",
  region: "Uttar Pradesh",
  postalCode: "202001",
  country: "IN",
  phoneDisplay: "+91 86505 04691",
  phoneTel: "+918650504691",
  email: "advocatearvindsharma2000@gmail.com",
  enrolmentNumber: "UP10239/2024",
  enrolmentYear: "2024",
  stateBarCouncilOriginal: "Bar Council of Uttar Pradesh",
  stateBarCouncilCurrent: "Bar Council of Uttar Pradesh",
  stateBarCouncilSeat: "Prayagraj",
  barAssociation: "Aligarh Bar Association, Aligarh",
  copAibe: "302866/2025",
  portrait: {
    src: "/images/arvind-kumar-sharma.jpg",
    alt: "Arvind Kumar Sharma, Advocate",
  },
  qualifications: [
    {
      label: "Academic qualifications",
      labelHi: "शैक्षणिक अर्हताएँ",
      value: "LL.B., Dr. Bhim Rao Ambedkar University (2000)",
    },
  ],
  areasOfPractice: [
    {
      en: "Criminal",
      hi: "आपराधिक",
      matters: [
        "Bail / anticipatory bail",
        "Quashing of FIR",
        "Offences relating to person and property",
        "NDPS",
      ],
    },
    {
      en: "Family / Matrimonial",
      hi: "पारिवारिक / वैवाहिक",
      matters: [
        "Marriage (including court marriage and Special Marriage Act)",
        "Divorce and judicial separation",
        "Child custody",
        "Maintenance and alimony",
        "Protection from domestic violence",
      ],
    },
    {
      en: "Consumer",
      hi: "उपभोक्ता",
      matters: [
        "Consumer disputes",
        "Negotiable Instruments (cheque bounce)",
      ],
    },
  ],
} as const;

export const metadataCopy = {
  title: "Arvind Kumar Sharma | Advocate, Aligarh",
  description:
    "Arvind Kumar Sharma, Advocate, enrolled 2024 with the Bar Council of Uttar Pradesh. Chamber-19, District and Session Court, Aligarh. Areas of practice: Criminal, Family / Matrimonial, Consumer. LL.B., Dr. Bhim Rao Ambedkar University (2000).",
};
