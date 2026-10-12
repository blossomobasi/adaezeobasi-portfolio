"use client";

import Image from "next/image";
import { useState } from "react";
import { IProjects, projects } from "@/data/projects";

import { FaGithub } from "react-icons/fa6";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import ChartPlaceholder from "@/components/ChartPlaceholder";
import { Slide } from "../../animation/Slide";

const ProjectsList = () => {
	const [selectedProject, setSelectedProject] = useState<{ images: string[]; alt: string } | null>(null);

	const handleImageClick = (project: IProjects) => {
		if (project.images && project.images.length > 0) {
			setSelectedProject({ images: project.images, alt: project.alt });
		}
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	return (
		<>
			<div className="space-y-10 md:space-y-10">
				{projects.map((project, i) => (
					<div
						key={project.alt}
						className={`${
							i % 2 === 1 && "flex-row-reverse md:flex-row-reverse"
						} flex items-center flex-col md:flex-row gap-x-10 gap-y-5 p-3 rounded-sm h-full`}
					>
						<div
							onClick={() => handleImageClick(project)}
							className={`flex-1 w-full z-10 border border-stone-200 hover:border-stone-400 dark:border-stone-900 p-2 relative ${
								project.images && "cursor-pointer"
							}`}
						>
							{project.images ? (
								<Image
									src={project.images[0]}
									alt={project.alt}
									width={1000}
									height={1000}
									priority={i === 0}
								/>
							) : (
								<ChartPlaceholder variant={project.placeholder} />
							)}
							{project.collaboration && (
								<span className="absolute bottom-0 right-0 bg-purple-100 text-purple-500 border border-purple-500 dark:text-purple-700 dark:bg-purple-200 dark:border-purple-700 rounded-tl-full px-1.5 pl-3 text-sm">
									Collaboration
								</span>
							)}
							{/* Show indicator if multiple images */}
							{project.images && project.images.length > 1 && (
								<span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
									+{project.images.length - 1} more
								</span>
							)}
						</div>
						<Slide className="flex-1" towards={i % 2 === 0 ? "right" : "left"} delay={i * 0.1}>
							<h2 className="text-2xl font-semibold">{project.title}</h2>
							<p className="mt-5 mb-2 text-sm text-stone-700 dark:text-stone-500">{project.content}</p>

							{project.insights && (
								<ul className="mb-3 text-sm list-disc pl-5 space-y-1 text-stone-700 dark:text-stone-400">
									{project.insights.map((insight) => (
										<li key={insight}>{insight}</li>
									))}
								</ul>
							)}

							{/* Currently In Development */}
							{project.development && (
								<small className="block mb-3 text-red-500">This project is currently in progress.</small>
							)}

							<div className="flex gap-2 py-2 text-sm dark:text-stone-300 flex-wrap">
								{project.stacks?.map((stack) => (
									<span
										key={stack}
										className="px-2 py-0.5 rounded-full border border-teal-600/40 text-teal-700 dark:text-teal-400"
									>
										{stack}
									</span>
								))}
							</div>

							{(project.href || project.report || project.githubLink) && (
								<div className="flex items-center space-x-3 mt-2">
									{project.href && <Button url={project.href}>View Dashboard</Button>}
									{project.report && <Button url={project.report}>View Report (PDF)</Button>}
									{project.githubLink && (
										<Icon title="Github" url={project.githubLink}>
											<FaGithub />
										</Icon>
									)}
								</div>
							)}
						</Slide>
					</div>
				))}
			</div>
			{selectedProject && (
				<ImageGalleryModal
					images={selectedProject.images}
					alt={selectedProject.alt}
					isOpen={!!selectedProject}
					onClose={closeModal}
				/>
			)}
		</>
	);
};

export default ProjectsList;
