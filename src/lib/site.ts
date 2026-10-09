export const SITE = {
  name: "Benzo Generics Pharmacy",
  phoneDisplay: "+234 803 897 2269",
  phoneTel: "+2348038972269",
  whatsappNumber: "2348038972269", // international format, no + or spaces
  addressLines: ["120 Okporo Road", "Rumuodara, Port Harcourt", "Rivers State, Nigeria"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Benzo+Generics+Pharmacy+120+Okporo+Road+Rumuodara+Port+Harcourt",
};

export const WA_MESSAGES = {
  medicine:
    "Hi, I came from your website and I want to ask about a medicine.\n\nPlease let me know if it's available.\nMedicine name:\nQuantity:",
  supplies:
    "Hi, I came from your website and I want to ask about medical supplies.\n\nSupplies needed:\nQuantity:",
  wholesale:
    "Hi, I came from your website and I want to make a wholesale enquiry.\n\nBusiness/organisation:\nProducts needed:\nQuantity:",
  prescription:
    "Hi, I came from your website and I have a prescription I'd like to enquire about.\n\nPlease let me know how I can send it for review.",
  general:
    "Hi, I came from your website and I would like to ask a question about your products or services.",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}