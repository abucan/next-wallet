import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 },
      );

      const record = await prisma.record.findFirst({
      where: {
        userId: session?.user?.id,
        id: params.id,
      },
    });

    return NextResponse.json(record, { status: 200 });
  } catch (error) {
    console.log('[GET_RECORD]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
