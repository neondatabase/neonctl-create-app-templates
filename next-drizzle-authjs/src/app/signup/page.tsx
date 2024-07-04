export default function SignUpPage() {
	return (
		<div className="min-h-screen bg-[#111111] text-[#b4b4b4] px-6 flex flex-col items-center justify-center">
			<div className="w-full max-w-md">
				<h1 className="text-2xl font-medium mb-3 text-[#eeeeee]">Sign up</h1>
				<form
					className="flex flex-col gap-3"
					method="post"
					action="/api/signup"
				>
					<div className="space-y-1">
						<label className="text-sm" htmlFor="name">
							Name
						</label>
						<input
							className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm placeholder:text-[#b4b4b4]/50 ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="name"
							name="name"
							required
							placeholder="Your name"
						/>
					</div>
					<div className="space-y-1">
						<label className="text-sm" htmlFor="email">
							Email
						</label>
						<input
							className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm placeholder:text-[#b4b4b4]/50 ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="email"
							name="email"
							type="email"
							placeholder="you@example.com"
							required
						/>
					</div>
					<div className="space-y-1">
						<label className="text-sm" htmlFor="password">
							Password
						</label>

						<input
							className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm placeholder:text-[#b4b4b4]/50 ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							id="password"
							name="password"
							type="password"
							placeholder="•••••••••••"
							required
						/>
					</div>
					<button
						type="submit"
						className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#B4B4B4] hover:text-[#EEEEEE] border border-[#3A3A3A] bg-[#111111] hover:border-[#484848] hover:bg-[#2A2A2A]"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}
