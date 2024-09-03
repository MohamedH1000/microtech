import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const response = await prisma.accounts.findMany();

    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
