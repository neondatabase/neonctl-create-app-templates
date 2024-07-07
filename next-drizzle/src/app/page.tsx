export const runtime = "edge";

import Image from "next/image";

export default async function Home() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-[#b4b4b4]">
			<div>
				<h2 className="mb-3 text-2xl font-medium text-[#eeeeee]">
					Get Started
				</h2>
				<ol className="list-inside list-decimal leading-7">
					<li>
						Start by editing the{" "}
						<code className="rounded-md bg-[#00e599]/30 px-1 py-0.5 text-sm text-[#eeeeee]">
							`src/app/page.tsx`
						</code>{" "}
						file
					</li>
					<li>Save and view your changes instantly</li>
				</ol>

				<h2 className="mb-3 mt-10 text-2xl font-medium text-[#eeeeee]">
					Resources
				</h2>
				<ul className="flex flex-col gap-3">
					<li className="flex items-center gap-2">
						<Image
							className="h-5 w-auto shrink-0 p-0.5 invert"
							src="https://neon.tech/images/technology-logos/neon-logo.svg"
							width="36"
							height="36"
							alt="Neon logo"
							loading="eager"
						/>
						<a
							href="https://neon.tech/docs"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#eeeeee] ring-offset-[#111111] transition-colors hover:text-[#00e599] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
						>
							{" "}
							Neon Documentation{" "}
							<svg
								className="-ml-1 mb-2 inline h-4 w-4 stroke-[#00e599]"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M7 17L17 7"></path>
								<path d="M7 7h10v10"></path>
							</svg>
						</a>
					</li>
					<li className="flex items-center gap-2">
						<Image
							className="h-5 w-auto shrink-0"
							src="https://neon.tech/images/technology-logos/nextjs-logo.svg"
							width="36"
							height="36"
							alt="Next.js logo"
							loading="eager"
						/>
						<a
							href="https://nextjs.org/docs"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#eeeeee] ring-offset-[#111111] transition-colors hover:text-[#00e599] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
						>
							{" "}
							Next.js Documentation{" "}
							<svg
								className="-ml-1 mb-2 inline h-4 w-4 stroke-[#00e599]"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M7 17L17 7"></path>
								<path d="M7 7h10v10"></path>
							</svg>
						</a>
					</li>
					<li className="flex items-center gap-2">
						<Image
							className="h-5 w-auto shrink-0 invert"
							src="https://neon.tech/images/technology-logos/drizzle-logo.svg"
							width="36"
							height="36"
							alt="Drizzle ORM logo"
							loading="eager"
						/>
						<a
							href="https://orm.drizzle.team/docs/overview"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#eeeeee] hover:text-[#00e599]"
						>
							{" "}
							Drizzle ORM Documentation{" "}
							<svg
								className="-ml-1 mb-2 inline h-4 w-4 stroke-[#00e599]"
								fill="none"
								height="24"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M7 17L17 7"></path>
								<path d="M7 7h10v10"></path>
							</svg>
						</a>
					</li>
				</ul>

				<p className="mt-16">
					Need help? Reach out in the{" "}
					<a
						href="https://neon.tech/discord"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#eeeeee] ring-offset-[#111111] transition-colors hover:text-[#00e599] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
					>
						Neon Discord Community{" "}
						<svg
							className="-ml-1 mb-2 inline h-4 w-4 stroke-[#00e599]"
							fill="none"
							height="24"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							viewBox="0 0 24 24"
							width="24"
						>
							<path d="M7 17L17 7"></path>
							<path d="M7 7h10v10"></path>
						</svg>
					</a>
				</p>
			</div>
		</main>
	);
}
