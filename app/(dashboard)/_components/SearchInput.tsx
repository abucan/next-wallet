'use client';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

const SearchInput = () => {
  const [value, setValue] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSortOption = searchParams.get('sort');

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          sort: currentSortOption,
          title: value,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(url);
  }, [router, pathname, currentSortOption, value]);

  return (
    <div className='relative hidden lg:block'>
      <Search className='h-4 w-4 absolute top-2.5 left-3 text-slate-600' />
      <Input
        className='w-full md:w-[250px] pl-9 bg-slate-100 focus-visible:ring-slate-300'
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
