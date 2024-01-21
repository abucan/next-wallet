const AccountsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className='md:pr-12 flex flex-col'>{children}</div>
    </>
  );
};

export default AccountsLayout;
