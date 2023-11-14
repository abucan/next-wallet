import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { accountSchema } from "@/ts/form-schemas/form-schemas";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);

  try {
    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const sortOptions = {
      newest: "-createdAt",
      oldest: "createdAt",
      highest: "-balance",
      lowest: "balance",
    };

    const sortKey = sortOptions.lowest;

    const accounts = await prisma.account.findMany({
      where: {
        userId: session?.user?.id,
      },
      orderBy: {
        [sortKey]: "asc",
      },
    });

    return NextResponse.json(accounts, { status: 200 });
  } catch (error) {
    console.log("[GET_ACCOUNTS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const body = await req.json();
    const { name, color, type, balance } = accountSchema.parse(body);

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
    console.log("[POST_ACCOUNT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
