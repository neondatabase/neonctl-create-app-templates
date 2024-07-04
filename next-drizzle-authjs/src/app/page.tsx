import { SignIn } from "@/components/auth/signin-button";
import { SignOut } from "@/components/auth/signout-button";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const session = await auth();

	return (
		<main className="min-h-screen flex items-center justify-center bg-[#111111] text-[#b4b4b4] px-6">
			<div>
				{
					// Show the sign out button if the user is signed in
					session?.user ? (
						<div>
							<div>Hello {session.user.name}!</div>
							<SignOut />
						</div>
					) : (
						<div>
							<p className="mb-3">You are not signed in</p>
							<div className="flex items-center gap-3">
								<Link
									className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#B4B4B4] hover:text-[#EEEEEE] border border-[#3A3A3A] bg-[#111111] hover:border-[#484848] hover:bg-[#2A2A2A]"
									href="/signup"
								>
									Sign Up
								</Link>
								<SignIn />
							</div>
						</div>
					)
				}

				<h2 className="text-2xl font-medium mt-10 mb-3 text-[#eeeeee]">
					Get Started
				</h2>
				<ol className="list-decimal list-inside leading-7">
					<li>
						Start by editing the{" "}
						<code className="text-sm rounded-md text-[#eeeeee] px-1 py-0.5 bg-[#00e599]/30">
							`src/app/page.tsx`
						</code>{" "}
						file
					</li>
					<li>Save and view your changes instantly</li>
				</ol>

				<h2 className="text-2xl font-medium mt-10 mb-3 text-[#eeeeee]">
					Resources
				</h2>
				<ul className="flex flex-col gap-3">
					<li className="flex items-center gap-2">
						<Image
							className="h-5 w-auto shrink-0 invert p-0.5"
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
							className="hover:text-[#00e599] text-[#eeeeee] ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
						>
							{" "}
							Neon Documentation{" "}
							<svg
								className="inline w-4 h-4 mb-2 -ml-1 stroke-[#00e599]"
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
							className="hover:text-[#00e599] text-[#eeeeee] ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
						>
							{" "}
							Next.js Documentation{" "}
							<svg
								className="inline w-4 h-4 mb-2 -ml-1 stroke-[#00e599]"
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
						<img
							className="h-5 w-auto shrink-0 grayscale"
							src="https://authjs.dev/img/etc/logo-sm.webp"
							width="36"
							height="36"
							alt="Auth.js logo"
							loading="eager"
						/>
						<a
							href="https://authjs.dev/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-[#00e599] text-[#eeeeee] ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2"
						>
							{" "}
							Auth.js Documentation{" "}
							<svg
								className="inline w-4 h-4 mb-2 -ml-1 stroke-[#00e599]"
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
							className="hover:text-[#00e599] text-[#eeeeee]"
						>
							{" "}
							Drizzle ORM Documentation{" "}
							<svg
								className="inline w-4 h-4 mb-2 -ml-1 stroke-[#00e599]"
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
						href="/"
						className="hover:text-[#00e599] text-[#eeeeee] ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 rounded-md"
					>
						Neon Discord Community{" "}
						<svg
							className="inline w-4 h-4 mb-2 -ml-1 stroke-[#00e599]"
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
