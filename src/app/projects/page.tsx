import TextHeader from "@/components/TextHeader";
import { Metadata } from "next";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = {
	title: "Projects | Adaeze Obasi",
	description:
		"Data analysis projects by Adaeze Obasi — dashboards, SQL analyses and data stories that turn raw data into actionable insights.",
};

const ProjectsPage = () => {
	return (
		<section className="max-w-[90rem] my-14 mx-auto">
			<TextHeader>Projects</TextHeader>
			<p className="md:w-[35rem] -mt-4 mb-5 dark:text-stone-400">
				Here are some of the analyses and dashboards I&apos;m most proud of. Each one starts with a business question
				and ends with insights people can act on.
			</p>

			<ProjectsList />
		</section>
	);
};

export default ProjectsPage;
