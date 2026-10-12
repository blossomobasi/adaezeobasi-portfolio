import Icon from "./Icon";
import { profile } from "@/data/profile";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const SocialIcons = () => {
	const links = [
		{ url: profile.socials.linkedin, title: "LinkedIn", Component: FaLinkedinIn },
		{ url: profile.socials.github, title: "Github", Component: FaGithub },
		{ url: profile.socials.x, title: "Twitter(X)", Component: FaXTwitter },
		{ url: profile.socials.instagram, title: "Instagram", Component: BsInstagram },
		{ url: profile.email && `mailto:${profile.email}`, title: "Email", Component: AiOutlineMail },
	].filter((link) => link.url);

	if (links.length === 0) return null;

	return (
		<div className="flex sm:justify-start justify-center mt-5 gap-3">
			{links.map(({ url, title, Component }) => (
				<Icon key={title} url={url} title={title}>
					<Component />
				</Icon>
			))}
		</div>
	);
};

export default SocialIcons;
