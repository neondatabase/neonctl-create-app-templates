import { v4 } from "uuid";
import { db } from "@/lib/db";
import * as schema from "@/lib/schema";
import { hashPassword } from "@/lib/auth";
import { eq } from "drizzle-orm";

export const runtime = "edge";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  if (
    typeof password !== "string" ||
    password.length < 1 ||
    password.length > 255 ||
    typeof email !== "string" ||
    typeof name !== "string"
  ) {
    return new Response(null, {
      status: 400,
      statusText: "Invalid password",
    });
  }

  const emailExists = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.email, email));

  if (emailExists.length > 0) {
    return new Response(null, {
      status: 400,
      statusText: "An account with this email already exists",
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

  return new Response(null, { status: 200 });
}
