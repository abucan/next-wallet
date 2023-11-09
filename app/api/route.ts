import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({
    authnticated: !!session,
    current_id: session?.user,
  });
}
