import React from "react";
import {
  INVALID_CREDENTIALS_ERROR_TYPE,
  InvalidCredentials,
  signIn,
} from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  // This might not be needed if Auth.js is properly reading cookies.
  const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";

  const error = searchParams["error"];

  return (
    <form
      action={async (formData) => {
        "use server";

        try {
          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),

            redirectTo: "/",
          });
        } catch (error) {
          if (error instanceof InvalidCredentials) {
            return redirect(`/signin?error=${error.type}`);
          }

          // Otherwise if a redirects happens NextJS can handle it
          // so you can just re-thrown the error and let NextJS handle it.
          // Docs:
          // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
          throw error;
        }
      }}
    >
      {error === INVALID_CREDENTIALS_ERROR_TYPE ? (
        <div>Wrong credentials!</div>
      ) : null}

      <input type="hidden" name="csrfToken" value={csrfToken} />

      <label className="text-base font-light text-neutral-800">
        Email
        <input
          className="block w-full flex-1 rounded-md border border-gray-200 p-3 font-normal transition placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
          required
          data-1p-ignore
          placeholder="email"
          name="email"
          type="email"
        />
      </label>

      <label className="text-base font-light text-neutral-800">
        Password
        <input
          className="block w-full flex-1 rounded-md border border-gray-200 p-3 font-normal transition placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm"
          required
          data-1p-ignore
          placeholder="password"
          name="password"
          type="password"
        />
      </label>

      <button type="submit">Sign in</button>
    </form>
  );
}
