// Central place for Adaeze's personal details.
// Anything left as an empty string is hidden on the site, so fill these in as they become available.

export const profile = {
	name: "Adaeze Obasi",
	firstName: "Adaeze",
	role: "Data Analyst",
	location: "Galway, Ireland",
	email: "obasi.adaeze98@gmail.com",
	phone: "+353 89 964 2468",
	whatsapp: "", // TODO: digits only, e.g. "353850000000"
	photo: "/adaeze-headshot.jpeg",
	resume: "", // TODO: add a PDF to /public and set e.g. "/Adaeze-Obasi-Data-Analyst.pdf"
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://adaezeobasi.vercel.app",
	socials: {
		linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/<handle>"
		github: "https://github.com/Adaezethetechie",
		x: "",
		instagram: "",
	},
};
