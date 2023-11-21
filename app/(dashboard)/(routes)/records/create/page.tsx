'use client';

import RecordsForm from '@/components/RecordsForm';

const submit = () => {
  console.log('submit');
};

const CreateRecordPage = () => {
  return (
    <>
      <RecordsForm submit={submit} isEditing={false} />
    </>
  );
};

export default CreateRecordPage;
