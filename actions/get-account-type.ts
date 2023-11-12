const iconMap: { [key: string]: string } = {
  credit_card: 'Credit Card',
  general: 'General Account',
  cash: 'Cash Account',
};

export const getAccountType = (iconName: string) => {
  const AccountType = iconMap[iconName] || 'No Account Type';
  return AccountType;
};
