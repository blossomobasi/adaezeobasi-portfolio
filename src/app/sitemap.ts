import { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
	return ["", "/about", "/projects", "/contact"].map((path) => ({
		url: `${profile.siteUrl}${path}`,
		lastModified: new Date(),
	}));
}
