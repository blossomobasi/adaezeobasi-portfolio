export interface IProjects {
	href?: string;
	report?: string;
	images?: string[];
	alt: string;
	title: string;
	development?: boolean;
	collaboration?: boolean;
	content: string;
	insights?: string[];
	stacks?: string[];
	githubLink?: string;
	placeholder?: "bar" | "line" | "pie";
}

// Define default props
const defaultProps: Partial<IProjects> = {
	development: false,
	collaboration: false,
};

// Function to merge actual props with default props
function createProject(props: IProjects): IProjects {
	return { ...defaultProps, ...props } as IProjects;
}

// Add new projects here (most impressive first).
// - `images`: screenshots in /public/images (the first one is the cover; click opens a gallery)
// - `href`: link to a live dashboard (Power BI, Tableau Public, Looker Studio...)
// - `report`: link to a PDF export in /public
// - `insights`: the key findings, ideally with numbers
// Without `images`, a chart illustration is shown instead (choose with `placeholder`).
export const projects: IProjects[] = [
	createProject({
		alt: "Unicorn Analysis",
		title: "Unicorn Analysis - What It Takes to Reach a $1B Valuation",
		content:
			"An end-to-end Power BI analysis of 1,074 global unicorns (private startups valued at $1B+) across 15 industries, worth a combined $3.711T on $591.82bn of funding. The three-page report explores industry trends, funding-to-valuation ROI, regional performance and investor activity.",
		insights: [
			"Cleaned the raw data in Power Query: stripped currency symbols, converted M/B values to numbers and derived a \"Years to $1B\" metric",
			"Built DAX measures for ROI multiplier, YoY growth and average years to $1B",
			"Unicorn creation peaked in 2021 with 520 new companies, up from 108 in 2020",
			"Auto & transportation reaches $1B fastest (5 years on average); African fintechs do it in just 3",
			"Sequoia Capital leads investors by portfolio value ($228B across 47 unicorns), ahead of Accel and Andreessen Horowitz",
		],
		stacks: ["Power BI", "Power Query", "DAX", "Data Modelling"],
		images: ["/images/unicorn-analysis-1.png", "/images/unicorn-analysis-2.png", "/images/unicorn-analysis-3.png"],
		report: "/Unicorn-Analysis-Adaeze-Obasi.pdf",
		githubLink: "https://github.com/Adaezethetechie/Unicorn-Analysis",
	}),
	createProject({
		title: "Coming Soon",
		content: "I'm currently working on a couple of new analyses. I'll update this section as soon as they're done.",
		images: ["/under_construction.svg"],
		alt: "Coming Soon",
	}),
];
