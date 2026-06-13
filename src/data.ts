export interface Dish {
  title: string
  tag: string
  origin: string
  spice: string
  serving: string
  color: string
  image: string
  description: string
}

export const dishes: Dish[] = [
  {
    title: "Rawon Iga",
    tag: "Signature",
    origin: "Jawa Timur",
    spice: "Deep keluak broth",
    serving: "Best for dinner",
    color: "oklch(28% 0.04 52)",
    image:
      "assets/rawon.avif",
    description:
      "Slow beef rib in keluak broth, bean sprouts, salted egg, lime, and a small bowl of sambal terasi. Built around the dark, earthy flavor Surabaya diners know well.",
  },
  {
    title: "Ayam Bakar Rempah",
    tag: "Grill",
    origin: "Charcoal",
    spice: "Sweet soy spice paste",
    serving: "Family sharing",
    color: "oklch(62% 0.13 38)",
    image:
      "assets/ayam-bakar.avif",
    description:
      "Charred spice-marinated chicken with urap sayur, warm rice, cucumber, basil, and sweet soy glaze. Smoky, aromatic, and easy to share at the center of the table.",
  },
  {
    title: "Nasi Daun Nusantara",
    tag: "Lunch set",
    origin: "Banana leaf",
    spice: "Fresh herbs and sambal",
    serving: "Lunch or takeaway",
    color: "oklch(50% 0.1 135)",
    image:
      "assets/nasi-daun.avif",
    description:
      "Banana-leaf rice set with seasonal vegetables, fried tempeh, serundeng, and a rotating house sambal. Designed as a complete plate for lunch, takeaway, or a quick first visit.",
  },
]
