import { v4 } from "uuid";
import { db } from "@/lib/db";
import * as schema from "@/lib/schema";
import { hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255 ||
    typeof email !== "string" ||
    typeof name !== "string"
  ) {
    return new Response("Invalid password", {
      status: 400,
    });
  }

  const userId = v4();
  const passwordHash = await hashPassword(password);

  await db.insert(schema.users).values({
    id: userId,
    name,
    email,
  });

  await db.insert(schema.passwords).values({
    userId,
    password: passwordHash,
  });

  return NextResponse.redirect(new URL("/", request.url));
}
