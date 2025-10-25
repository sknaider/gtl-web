export const siteConfig = {
  name: "GTL Consulting",
  description: "Consultoría en comercio exterior y operaciones logísticas integrales",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/company/gtlconsulting",
  },
  contact: {
    email: "contacto@gtlconsulting.com",
    phone: "+51 XXX XXX XXX",
    address: "Lima, Perú",
  },
}

export type SiteConfig = typeof siteConfig