import React from "react";
import Link from "next/link";

import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import TextHeader from "@/components/TextHeader";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
	title: "Contact | Adaeze Obasi",
	description: "Get in touch with Adaeze Obasi, a data analyst who turns raw data into clear, actionable insights.",
};

const Contact = () => {
	return (
		<section className="md:my-20 my-10 max-w-[90rem] mx-auto">
			<TextHeader>Contact Me</TextHeader>

			<div className="flex lg:flex-row flex-col lg:gap-20 gap-10">
				<div className="lg:w-[38%] space-y-10 text-stone-600 dark:text-stone-300">
					<div>
						<h1 className="text-3xl font-bold text-stone-800 dark:text-stone-300">Let&apos;s turn your data into decisions.</h1>
						<p className="mt-3 text-stone-600 dark:text-stone-400 leading-relaxed">
							Whether you&apos;re hiring, need help making sense of your data, or want a dashboard your team will
							actually use, I&apos;d love to hear from you. Share a few details and I&apos;ll get back to you within
							1&ndash;2 business days.
						</p>
						<p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-700 dark:text-teal-500">
							<span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
							Open to full-time roles and freelance projects
						</p>
					</div>

					{profile.phone && (
						<div className="flex items-center gap-5">
							<Icon>
								<BsPhone size={20} />
							</Icon>
							<div>
								<h3 className="text-xl font-semibold">Call:</h3>
								<Link href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-teal-600 font-medium">
									{profile.phone}
								</Link>
							</div>
						</div>
					)}
					{profile.email && (
						<div className="flex items-center gap-5">
							<Icon>
								<AiOutlineMail size={20} />
							</Icon>
							<div>
								<h3 className="text-xl font-semibold">Email:</h3>
								<Link href={`mailto:${profile.email}`} className="text-teal-600 font-medium">
									{profile.email}
								</Link>
							</div>
						</div>
					)}
					<div className="flex items-center gap-5">
						<Icon>
							<SlLocationPin size={20} />
						</Icon>
						<div>
							<h3 className="text-xl font-semibold">Location:</h3>
							<span className="text-stone-500">{profile.location}</span>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="lg:w-[62%] w-full border border-stone-200 dark:border-stone-900 rounded-xl p-5 sm:p-8 bg-white/60 dark:bg-stone-950/40">
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
