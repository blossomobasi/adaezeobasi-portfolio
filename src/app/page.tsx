"use client";

import HeroSvg from "@/components/HeroSvg";
import SocialIcons from "@/components/SocialIcons";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "../../animation/Slide";
import { profile } from "@/data/profile";

const HomePage = () => {
	return (
		<section className="p-2 md:mb-0 mb-20 max-w-[90rem] mx-auto">
			<div className="flex items-center md:py-32 py-20 gap-x-10 gap-y-5 flex-col lg:flex-row">
				<Slide towards="left" delay={0.5} className="text-sm w-full sm:text-start text-center">
					<div className="mb-5 text-lg font-medium italic">
						<Typewriter
							words={[`Hey There, I'm ${profile.firstName} 👋🏻`, "Lovely meeting you😊", "Let's talk data 📊"]}
							cursor={true}
							cursorStyle="_"
							typeSpeed={100}
							deleteSpeed={100}
							loop={true}
						/>
					</div>
					<h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold">Data Analyst</h1>
					<p className="mt-3 text-stone-700 dark:text-stone-500 text-lg">
						I&apos;m <span className="font-semibold text-black dark:text-stone-300">{profile.name}</span>, I turn raw,
						messy data into clear insights and compelling stories. From cleaning and modelling data to building
						interactive dashboards, I help teams understand what&apos;s happening, why it&apos;s happening, and what to
						do next.
					</p>

					{/* Social media links */}
					<SocialIcons />
					<div className="my-5 font-medium text-stone-800 dark:text-stone-400 flex sm:justify-start justify-center gap-6">
						{profile.whatsapp ? (
							<Link
								href={`https://wa.me/${profile.whatsapp}`}
								target="_blank"
								className="uppercase hover:underline flex items-center space-x-3"
							>
								<span>Chat me up</span>
								<span>
									<FaWhatsapp size={23} />
								</span>
							</Link>
						) : (
							<Link href="/contact" className="uppercase hover:underline flex items-center space-x-3">
								<span>Get in touch</span>
								<BsArrowRight size={20} />
							</Link>
						)}
						<Link href="/projects" className="uppercase hover:underline flex items-center space-x-3">
							<span>See my work</span>
							<BsArrowRight size={20} />
						</Link>
					</div>
				</Slide>

				<Slide towards="right" delay={0.5} className="md:w-[55%] h-full -z-10">
					<HeroSvg />
				</Slide>
			</div>

			<TechStack />
		</section>
	);
};

export default HomePage;
