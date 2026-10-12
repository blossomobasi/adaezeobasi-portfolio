import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TextHeader from "@/components/TextHeader";
import { BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { Slide } from "../../../animation/Slide";
import { profile } from "@/data/profile";
import { analysisTools, visualizationTools, workflowTools } from "@/data/techStack";
import { certifications, competencies, education, experience, TimelineItem } from "@/data/about";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-2xl font-semibold mb-8">{children}</h2>
);

const Summary = () => {
	return (
		<Slide delay={0.5} towards="left" className="lg:w-[60%] text-stone-700 dark:text-stone-400">
			<p className="uppercase tracking-widest text-sm font-semibold text-teal-700 dark:text-teal-500">
				{profile.role}
			</p>
			<h1 className="sm:text-5xl text-4xl font-bold mt-3 text-stone-800 dark:text-stone-300">
				I&apos;m {profile.name}.
			</h1>
			<p className="mt-3 flex items-center gap-2 text-sm">
				<SlLocationPin /> {profile.location}
			</p>

			<div className="mt-6 space-y-5 leading-relaxed">
				<p>
					I&apos;m a data analyst who helps organisations turn raw data into decisions. I work across the full
					analytics workflow &mdash; asking the right questions, cleaning and modelling data with{" "}
					<span className="font-semibold text-black dark:text-stone-300">SQL, Excel and Python</span>, and presenting
					the results through interactive{" "}
					<span className="font-semibold text-black dark:text-stone-300">Power BI and Tableau</span> dashboards.
				</p>
				<p>
					I&apos;m detail-oriented by nature: I validate every number before it reaches a report, because small errors
					lead to big wrong decisions. I break complex problems into measurable questions, let the evidence guide the
					answer, and manage my time to deliver accurate work on schedule.
				</p>
				<p>
					Just as important, I can explain what I find. I work closely with stakeholders to understand their goals and
					define the metrics that matter. Then I turn the analysis into clear stories and practical recommendations
					that technical and non-technical audiences alike can act on.
				</p>
			</div>

			<div className="flex flex-wrap gap-3 mt-8">
				{profile.resume && (
					<div className="flex space-x-2 w-fit">
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href={profile.resume}
							className="dark:bg-stone-900 bg-stone-200 p-3 w-52 flex justify-center items-center space-x-2 font-semibold rounded-md"
						>
							<span>View Resume</span>
							<BiLinkExternal size={20} />
						</Link>
						<Link href={profile.resume} download className="p-3 bg-stone-200 dark:bg-stone-900 rounded-md">
							<BiSolidDownload size={20} />
						</Link>
					</div>
				)}
				<Link
					href="/contact"
					className="p-3 px-5 flex items-center gap-2 font-semibold rounded-md border border-stone-300 dark:border-stone-800 hover:border-stone-500"
				>
					<span>Let&apos;s work together</span>
					<BsArrowRight size={18} />
				</Link>
			</div>
		</Slide>
	);
};

const Portrait = () => {
	const initials = profile.name
		.split(" ")
		.map((part) => part[0])
		.join("");

	return (
		<Slide className="lg:w-[40%] w-full max-w-md" delay={0.5} towards="right">
			{profile.photo ? (
				<Image
					src={profile.photo}
					alt={profile.name}
					width={864}
					height={1080}
					quality={100}
					priority
					className="rounded-2xl w-full border-5 border-black"
				/>
			) : (
				<div className="rounded-2xl w-full aspect-square flex items-center justify-center bg-gradient-to-br from-teal-200 to-teal-700 dark:from-teal-900 dark:to-stone-950 text-white text-8xl font-extrabold tracking-widest">
					{initials}
				</div>
			)}
		</Slide>
	);
};

const Competencies = () => {
	return (
		<section className="md:mt-28 mt-16">
			<SectionTitle>What I bring</SectionTitle>
			<div className="grid sm:grid-cols-2 gap-5">
				{competencies.map((item, index) => (
					<Slide
						key={item.title}
						towards={index % 2 === 0 ? "left" : "right"}
						delay={index * 0.1}
						className="h-full border border-stone-200 dark:border-stone-900 rounded-md p-6 hover:border-stone-400 dark:hover:border-stone-700 transition-colors"
					>
						<span className="text-sm font-semibold text-teal-700 dark:text-teal-500">0{index + 1}</span>
						<h3 className="text-lg font-semibold mt-2 text-stone-800 dark:text-stone-300">{item.title}</h3>
						<p className="mt-2 text-sm leading-relaxed">{item.description}</p>
					</Slide>
				))}
			</div>
		</section>
	);
};

const Toolkit = () => {
	const groups = [
		{ title: "Analysis & Querying", tools: analysisTools },
		{ title: "Visualization & BI", tools: visualizationTools },
		{ title: "Workflow", tools: workflowTools },
	];

	return (
		<section className="md:mt-28 mt-16">
			<SectionTitle>Toolkit</SectionTitle>
			<div className="space-y-5">
				{groups.map((group) => (
					<div key={group.title} className="flex flex-col md:flex-row md:items-center gap-3">
						<h3 className="md:w-56 font-semibold text-stone-800 dark:text-stone-300 shrink-0">{group.title}</h3>
						<div className="flex flex-wrap gap-2">
							{group.tools.map(({ Icon, label, color }) => (
								<span
									key={label}
									className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800"
								>
									<Icon color={color} size={16} />
									{label}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const Timeline = ({ title, items }: { title: string; items: TimelineItem[] }) => {
	if (items.length === 0) return null;

	return (
		<section className="md:mt-28 mt-16">
			<SectionTitle>{title}</SectionTitle>
			<ol className="border-l-2 border-stone-200 dark:border-stone-800 space-y-10">
				{items.map((item, index) => (
					<Slide key={`${item.title}-${item.organization}`} towards="left" delay={index * 0.1}>
						<li className="relative pl-8">
							<span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-teal-600" />
							<p className="text-sm text-stone-500">{item.period}</p>
							<h3 className="text-lg font-semibold text-stone-800 dark:text-stone-300">{item.title}</h3>
							<p className="font-medium">{item.organization}</p>
							{item.description && <p className="mt-2 text-sm leading-relaxed">{item.description}</p>}
							{item.highlights && (
								<ul className="mt-2 text-sm list-disc pl-5 space-y-1">
									{item.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							)}
						</li>
					</Slide>
				))}
			</ol>
		</section>
	);
};

const Certifications = () => {
	if (certifications.length === 0) return null;

	return (
		<section className="md:mt-28 mt-16">
			<SectionTitle>Certifications</SectionTitle>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{certifications.map((cert) => (
					<div key={cert.name} className="border border-stone-200 dark:border-stone-900 rounded-md p-5">
						<h3 className="font-semibold text-stone-800 dark:text-stone-300">{cert.name}</h3>
						<p className="text-sm mt-1">
							{cert.issuer}
							{cert.year && ` · ${cert.year}`}
						</p>
						{cert.url && (
							<Link
								href={cert.url}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-flex items-center gap-1 text-sm text-teal-700 dark:text-teal-500 hover:underline"
							>
								View credential <BiLinkExternal />
							</Link>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export const metadata: Metadata = {
	title: "About Me | Adaeze Obasi",
	description: "Learn more about Adaeze Obasi, a data analyst who turns raw data into clear, actionable insights.",
};

const AboutPage = () => {
	return (
		<section className="py-10 max-w-[90rem] mx-auto">
			<TextHeader>About Me</TextHeader>

			<div className="flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center gap-10">
				<Summary />
				<Portrait />
			</div>

			<Competencies />
			<Timeline title="Experience" items={experience} />
			<Timeline title="Education" items={education} />
			<Certifications />
			<Toolkit />
		</section>
	);
};

export default AboutPage;
