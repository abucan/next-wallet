import { getRecords } from '@/actions/get-records';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const Records = async () => {
  const records = await getRecords();
  return (
    <div className='space-y-4 lg:space-y-8'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary flex justify-center md:justify-start mb-2'>
        My Records
      </h1>
      <DataTable columns={columns} data={records} />
    </div>
  );
};

export default Records;
