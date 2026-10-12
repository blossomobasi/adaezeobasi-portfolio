// Animated analytics chart: bars plus a trend line that reuses the `.path` stroke animation from globals.css
const bars = [180, 260, 220, 340, 300, 420, 380, 500];

export default function HeroSvg() {
	return (
		<svg viewBox="0 0 640 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[450px] w-full h-full">
			{/* Grid */}
			{[100, 200, 300, 400, 500].map((y) => (
				<line key={y} x1="40" x2="620" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="4 6" />
			))}
			<line x1="40" x2="620" y1="520" y2="520" stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />

			{/* Bars */}
			{bars.map((h, i) => (
				<rect
					key={i}
					x={60 + i * 70}
					y={520 - h}
					width="44"
					height={h}
					rx="6"
					fill="url(#bar-gradient)"
					fillOpacity={0.35 + i * 0.07}
				/>
			))}

			{/* Trend line */}
			<path
				className="path"
				d="M82 360 L152 290 L222 320 L292 210 L362 240 L432 140 L502 170 L572 60"
				stroke="url(#line-gradient)"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			{[
				[82, 360],
				[292, 210],
				[432, 140],
				[572, 60],
			].map(([cx, cy]) => (
				<circle key={cx} cx={cx} cy={cy} r="7" fill="#0d9488" />
			))}

			<defs>
				<linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
					<stop stopColor="#2dd4bf" />
					<stop offset="1" stopColor="#115e59" />
				</linearGradient>
				<linearGradient id="line-gradient" x1="82" y1="360" x2="572" y2="60" gradientUnits="userSpaceOnUse">
					<stop stopColor="#134e4a" />
					<stop offset="0.6" stopColor="#0d9488" />
					<stop offset="1" stopColor="#5eead4" />
				</linearGradient>
			</defs>
		</svg>
	);
}
