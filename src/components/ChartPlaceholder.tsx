// Stand-in illustration for projects that don't have screenshots yet
type Props = { variant?: "bar" | "line" | "pie" };

const ChartPlaceholder = ({ variant = "bar" }: Props) => {
	return (
		<div className="aspect-video w-full bg-stone-100 dark:bg-stone-950 flex items-center justify-center text-teal-600 dark:text-teal-500">
			<svg viewBox="0 0 320 180" className="w-3/4 h-3/4" fill="none">
				<line x1="20" x2="300" y1="160" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
				{variant === "bar" &&
					[60, 95, 75, 120, 105, 140].map((h, i) => (
						<rect key={i} x={35 + i * 45} y={160 - h} width="28" height={h} rx="4" fill="currentColor" fillOpacity={0.3 + i * 0.12} />
					))}
				{variant === "line" && (
					<>
						<path d="M25 130 L75 110 L125 120 L175 70 L225 85 L295 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M25 130 L75 110 L125 120 L175 70 L225 85 L295 30 L295 160 L25 160 Z" fill="currentColor" fillOpacity="0.15" />
					</>
				)}
				{variant === "pie" && (
					<>
						<circle cx="160" cy="88" r="60" fill="currentColor" fillOpacity="0.25" />
						<path d="M160 88 L160 28 A60 60 0 0 1 217 107 Z" fill="currentColor" fillOpacity="0.9" />
						<path d="M160 88 L217 107 A60 60 0 0 1 120 133 Z" fill="currentColor" fillOpacity="0.55" />
					</>
				)}
			</svg>
		</div>
	);
};

export default ChartPlaceholder;
