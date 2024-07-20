import { v4 } from "uuid";
import { hashPassword } from "@/lib/auth";
import { prisma } from "@/lib/db";

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
    return new Response(JSON.stringify({ message: "Invalid password" }), {
      status: 400,
    });
  }

  const emailExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (emailExists) {
    return new Response(
      JSON.stringify({ message: "An account with this email already exists" }),
      {
        status: 400,
      },
    );
  }

  const userId = v4();
  const passwordHash = await hashPassword(password);

  await prisma.user.create({
    data: {
      id: userId,
      name,
      email,
    },
  });

  await prisma.password.create({
    data: {
      userId,
      password: passwordHash,
    },
  });

  return new Response(null, { status: 200 });
}
