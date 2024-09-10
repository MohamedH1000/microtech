import Accounts from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request) {
  try {
    connectToDatabase();
    const response = await Accounts.find({});

    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
