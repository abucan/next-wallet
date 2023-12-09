import { getRecords } from '@/actions/get-records';
import { DataTable } from './_components/data-table';
import { columns } from './_components/columns';

const Records = async () => {
  const records = await getRecords();
  return (
    <div className='md:pr-12'>
      <DataTable columns={columns} data={records} />
    </div>
  );
};

export default Records;
