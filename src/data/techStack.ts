import { IconType } from "react-icons";
import {
	SiGit,
	SiGithub,
	SiGooglebigquery,
	SiGooglesheets,
	SiJupyter,
	SiLooker,
	SiMicrosoftexcel,
	SiMysql,
	SiNumpy,
	SiPandas,
	SiPlotly,
	SiPostgresql,
	SiPowerbi,
	SiPython,
	SiR,
	SiTableau,
} from "react-icons/si";

// TODO: trim these lists to the tools Adaeze actually uses.
export type Tool = { Icon: IconType; label: string; color: string };

export const analysisTools: Tool[] = [
	{ Icon: SiMicrosoftexcel, label: "Excel", color: "#217346" },
	{ Icon: SiMysql, label: "MySQL", color: "#4479A1" },
	{ Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
	{ Icon: SiPython, label: "Python", color: "#3776AB" },
	{ Icon: SiPandas, label: "Pandas", color: "#7A5CC0" },
	{ Icon: SiNumpy, label: "NumPy", color: "#4DABCF" },
	{ Icon: SiR, label: "R", color: "#276DC3" },
];

export const visualizationTools: Tool[] = [
	{ Icon: SiPowerbi, label: "Power BI", color: "#E8B100" },
	{ Icon: SiTableau, label: "Tableau", color: "#E97627" },
	{ Icon: SiLooker, label: "Looker Studio", color: "#4285F4" },
	{ Icon: SiPlotly, label: "Plotly", color: "#6E63F2" },
	{ Icon: SiGooglesheets, label: "Google Sheets", color: "#34A853" },
];

export const workflowTools: Tool[] = [
	{ Icon: SiJupyter, label: "Jupyter", color: "#F37626" },
	{ Icon: SiGooglebigquery, label: "BigQuery", color: "#669DF6" },
	{ Icon: SiGit, label: "Git", color: "#F05032" },
	{ Icon: SiGithub, label: "GitHub", color: "currentColor" },
];
