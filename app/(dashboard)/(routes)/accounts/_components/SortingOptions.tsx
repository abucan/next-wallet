'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';

const sortingMap = {
  AZ: 'Name (A-Z)',
  ZA: 'Name (Z-A)',
  NEWEST: 'Newest',
  OLDEST: 'Oldest',
  HIGHEST: 'Highest balance',
  LOWEST: 'Lowest balance',
};

const SortingOptions = () => {
  return (
    <Select onValueChange={(value) => console.log(value)}>
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

export default SortingOptions;
