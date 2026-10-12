// Content for the About page.
// Each list below is hidden on the site while it's empty, so add entries as they become available.

export type TimelineItem = {
	title: string; // e.g. "Data Analyst" or "B.Sc. Statistics"
	organization: string; // e.g. company or school
	period: string; // e.g. "2023 — Present"
	description?: string;
	highlights?: string[];
};

export type Certification = {
	name: string; // e.g. "Google Data Analytics Professional Certificate"
	issuer: string; // e.g. "Google / Coursera"
	year?: string;
	url?: string; // credential link
};

// TODO: add Adaeze's work experience, internships or volunteer analytics work (most recent first)
export const experience: TimelineItem[] = [];

// TODO: add Adaeze's education
export const education: TimelineItem[] = [];

// TODO: add certifications (e.g. Google Data Analytics, Microsoft PL-300, IBM Data Analyst)
export const certifications: Certification[] = [];

export const competencies = [
	{
		title: "Data Cleaning & Preparation",
		description:
			"Turning messy, incomplete data from spreadsheets, databases and exports into reliable, analysis-ready datasets.",
	},
	{
		title: "Exploratory & Statistical Analysis",
		description:
			"Uncovering trends, segments and drivers using SQL, Excel and Python, and testing whether patterns actually hold up.",
	},
	{
		title: "Dashboards & Reporting",
		description:
			"Building interactive Power BI and Tableau dashboards and automated reports that track the KPIs that matter.",
	},
	{
		title: "Data Storytelling",
		description:
			"Translating findings into clear narratives, visuals and recommendations that non-technical stakeholders can act on.",
	},
];
