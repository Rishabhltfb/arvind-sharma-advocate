/**
 * BCI Rule 36 / Resolution No. 50/2008 Schedule — permitted website particulars only.
 * Do not add testimonials, fees, photographs, success rates, or promotional copy.
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
  address: "Civil Court, Aligarh",
  addressHi: "सिविल कोर्ट, अलीगढ़",
  locality: "Aligarh",
  localityHi: "अलीगढ़",
  region: "Uttar Pradesh",
  country: "IN",
  phoneDisplay: "+91 86505 04691",
  phoneTel: "+918650504691",
  email: "advocatearvindsharma2000@gmail.com",
  enrolmentNumber: "UP10239/2024",
  enrolmentYear: "2024",
  stateBarCouncilOriginal: "Bar Council of Uttar Pradesh",
  stateBarCouncilCurrent: "Bar Council of Uttar Pradesh",
  barAssociation: "Aligarh Bar Association",
  copAibe: "302866/2025",
  qualifications: [
    {
      label: "Academic qualifications",
      labelHi: "शैक्षणिक अर्हताएँ",
      value: "To be updated",
    },
  ],
  areasOfPractice: [
    { en: "Criminal", hi: "आपराधिक" },
    { en: "Family / Matrimonial", hi: "पारिवारिक / वैवाहिक" },
    { en: "Consumer", hi: "उपभोक्ता" },
  ],
} as const;

export const metadataCopy = {
  title: "Arvind Kumar Sharma | Advocate, Aligarh",
  description:
    "Arvind Kumar Sharma, Advocate, enrolled 2024 with the Bar Council of Uttar Pradesh. Practising at Civil Court, Aligarh. Areas of practice: Criminal, Family / Matrimonial, Consumer.",
};
