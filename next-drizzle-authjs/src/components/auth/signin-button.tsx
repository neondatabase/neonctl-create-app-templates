import { signIn } from "@/lib/auth";

export function SignIn() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn();
			}}
		>
			<button
				type="submit"
				className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-[#111111] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#B4B4B4] hover:text-[#EEEEEE] border border-[#3A3A3A] bg-[#111111] hover:border-[#484848] hover:bg-[#2A2A2A]"
			>
				Sign in
			</button>
		</form>
	);
}
