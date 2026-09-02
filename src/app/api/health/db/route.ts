import { db } from "@/lib/db";

export async function GET() {
  try {
    await db.connect();

    return Response.json({
      success: true,
      database: "connected",
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    return Response.json(
      {
        success: false,
        database: "disconnected",
      },
      { status: 500 }
    );
  }
}