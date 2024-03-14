import prisma from '../public/prisma.svg';
import nextjs from '../public/nextjs.svg';
import typescript from '../public/typescript.svg';
import tailwind from '../public/tailwind.svg';
import postgresql from '../public/postgresql.svg';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { TooltipIcon } from './TooltipIcon';

export const TechList = () => {
  const iconWidth = 25;
  return (
    <Card className='w-96'>
      <CardHeader>
        <div className='flex flex-col space-y-4 items-center justify-center'>
          <p className='font-mono font-light text-sm'>
            Designed and developed using
          </p>
          <div className='flex flex-row space-x-4'>
            <TooltipIcon text='Prisma'>
              <Image src={prisma} alt='prisma logo' width={iconWidth} />
            </TooltipIcon>
            <TooltipIcon text='Next.js'>
              <Image src={nextjs} alt='nextjs logo' width={iconWidth} />
            </TooltipIcon>
            <TooltipIcon text='Typescript'>
              <Image src={typescript} alt='typescript logo' width={iconWidth} />
            </TooltipIcon>
            <TooltipIcon text='Tailwind CSS'>
              <Image src={tailwind} alt='prisma logo' width={iconWidth} />
            </TooltipIcon>
            <TooltipIcon text='PostgreSQL'>
              <Image src={postgresql} alt='prisma logo' width={iconWidth} />
            </TooltipIcon>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
