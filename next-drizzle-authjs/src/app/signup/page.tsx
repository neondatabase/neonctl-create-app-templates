export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111111] px-6 text-[#b4b4b4]">
      <div className="w-full max-w-md">
        <h1 className="mb-3 text-2xl font-medium text-[#eeeeee]">Sign up</h1>
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
              className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm ring-offset-[#111111] transition-colors placeholder:text-[#b4b4b4]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
              className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm ring-offset-[#111111] transition-colors placeholder:text-[#b4b4b4]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
              className="flex h-10 w-full rounded-lg border border-[#3A3A3A] bg-[#222222] px-3 py-2 text-sm ring-offset-[#111111] transition-colors placeholder:text-[#b4b4b4]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              name="password"
              type="password"
              placeholder="•••••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg border border-[#3A3A3A] bg-[#111111] px-4 py-2 text-sm font-medium text-[#B4B4B4] ring-offset-[#111111] transition-colors hover:border-[#484848] hover:bg-[#2A2A2A] hover:text-[#EEEEEE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e599] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
