'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

const sortingMap = {
  az: 'Name (A-Z)',
  za: 'Name (Z-A)',
  newest: 'Newest',
  oldest: 'Oldest',
  highest: 'Highest balance',
  lowest: 'Lowest balance',
};

export const AccountSortingOptions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTitle = searchParams.get('title');

  const onClick = (value: string) => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          sort: value,
          title: currentTitle,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  // TODO: Maybe make a component later for records
  return (
    <Select onValueChange={(value) => onClick(value)}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(sortingMap).map(([key, value]) => {
            return (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
