import { Coins, CreditCard, Wallet } from 'lucide-react';

const iconMap: { [key: string]: React.FC } = {
  credit_card: CreditCard,
  general: Wallet,
  cash: Coins,
};

export const getIconComponent = (iconName: string) => {
  const IconComponent = iconMap[iconName] || 'QuestionMark';
  return IconComponent;
};
