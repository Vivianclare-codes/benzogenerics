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
    "Hi Benzo Generics, I'd like to ask about a medicine.\nMedicine name:\nQuantity:",
  supplies:
    "Hi Benzo Generics, I'd like to ask about medical supplies.\nSupplies needed:\nQuantity:",
  wholesale:
    "Hi Benzo Generics, I'd like to make a wholesale enquiry.\nBusiness/organisation:\nProducts needed:\nQuantity:",
  prescription:
    "Hi Benzo Generics, I have a prescription I'd like to enquire about. Please let me know how I can send it for review.",
  general: "Hi Benzo Generics, I have a question.",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}