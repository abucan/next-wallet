'use client';

import qs from 'query-string';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';

const sortingOptions = [
  { value: 'a-z', label: 'Name (A-Z)' },
  { value: 'z-a', label: 'Name (Z-A)' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'newest', label: 'Newest First' },
  { value: 'balance-low', label: 'Balance (Low to High)' },
  { value: 'balance-high', label: 'Balance (High to Low)' },
];

const AccountSorting = () => {
  //   const searchParams = useSearchParams();
  //   const router = useRouter();
  //   const pathname = usePathname();

  //   const [value, setValue] = useState('');
  //   const currentSortOption = searchParams.get('sortOptions');

  //   useEffect(() => {
  //     const url = qs.stringifyUrl({
  //       url: pathname,
  //       query: {
  //         sortOptions: value,
  //       },
  //     });
  //     router.push(url);
  //   }, [router, pathname, currentSortOption, value]);

  return (
    <>
      <Select
      // onValueChange={field.onChange}
      // defaultValue={initialValue}
      >
        <SelectTrigger>
          <SelectValue placeholder='Sort' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortingOptions.map((item) => {
              return (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  //   onChange={() => setValue(item.value)}
                >
                  <div className='flex flex-row items-center capitalize'>
                    {item.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default AccountSorting;
