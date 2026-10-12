import { analysisTools, visualizationTools, workflowTools, Tool } from "@/data/techStack";
import TextHeader from "./TextHeader";
import { Slide } from "../../animation/Slide";

const TechStack = () => {
	return (
		<div className="mt-5">
			<TextHeader>Tools I work with</TextHeader>

			<DisplayStack data={analysisTools} title="Analysis & Querying" />
			<DisplayStack data={visualizationTools} title="Visualization & BI" />
			<DisplayStack data={workflowTools} title="Workflow" />
		</div>
	);
};

type DisplayStackProps = {
	title: string;
	data: Tool[];
};

const DisplayStack = ({ title, data }: DisplayStackProps) => {
	return (
		<div className="mt-5">
			<h2 className="text-2xl font-semibold py-5">{title}</h2>

			<div className="flex gap-x-5 gap-y-5 flex-wrap items-center flex-shrink-0">
				{data.map(({ Icon, label, color }, index) => (
					<Slide
						towards="left"
						key={label}
						delay={index * 0.1}
						className="border border-stone-300 bg-stone-100 dark:border-stone-800 dark:bg-[#0a0a0a] rounded-md p-2"
					>
						<div title={label} className="flex flex-col items-center justify-center gap-2 w-[76px] h-[76px] p-2">
							<Icon size={36} color={color} />
							<span className="text-[11px] font-medium text-center leading-tight">{label}</span>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default TechStack;
