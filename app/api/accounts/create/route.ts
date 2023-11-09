import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { name, color, type, balance } = await req.json();

    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const numBalance = Number(balance);
    const post = await prisma.account.create({
      data: {
        name,
        color,
        type,
        balance: numBalance,
        userId: session?.user?.id,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log("[ACCOUNTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
