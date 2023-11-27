import { SelectOptionsProps } from '@/ts/interfaces/app_interfaces';
import { MdSavings, MdMuseum } from 'react-icons/md';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaMoneyBillWheat } from 'react-icons/fa6';
import { SiWebmoney } from 'react-icons/si';
import { RiRefundFill } from 'react-icons/ri';
import { BiSolidCreditCardAlt } from 'react-icons/bi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';

export const accountTypes: SelectOptionsProps[] = [
  {
    value: 'BANK_ACCOUNT',
    label: 'Bank Account',
    icon: FaWallet,
  },
  {
    value: 'cash',
    label: 'Cash Account',
    icon: FaMoneyBillAlt,
  },
  {
    value: 'CREDIT_CARD',
    label: 'Credit Card',
    icon: BiSolidCreditCardAlt,
  },
  {
    value: 'SAVINGS',
    label: 'Savings Account',
    icon: MdSavings,
  },
  {
    value: 'CHECKING',
    label: 'Checking Account',
    icon: MdMuseum,
  },
  {
    value: 'INVESTMENT',
    label: 'Investment Account',
    icon: FaMoneyBillTrendUp,
  },
  {
    value: 'LOAN',
    label: 'Loan Account',
    icon: GiReceiveMoney,
  },
  {
    value: 'RETIREMENT',
    label: 'Retirement Account',
    icon: FaMoneyBillWheat,
  },
  {
    value: 'CRYPTO',
    label: 'Crypto Account',
    icon: SiWebmoney,
  },
  {
    value: 'EMERGENCY_FUND',
    label: 'Emergency Fund Account',
    icon: RiRefundFill,
  },
];

const typesMap = accountTypes.reduce((acc, { value, label }) => {
  acc[value.toUpperCase()] = label;
  return acc;
}, {} as { [key: string]: string });

const iconsMap = accountTypes.reduce(
  (acc, { value, icon }) => {
    acc[value.toUpperCase()] = icon;
    return acc;
  },
  {} as { [key: string]: React.ComponentType },
);

export const getAccountType = (iconName: string) => {
  const AccountType = typesMap[iconName] || 'No Account Type';
  return AccountType;
};

export const getAccountIcon = (iconName: string) => {
  const IconComponent = iconsMap[iconName] || 'FaWallet';
  return IconComponent;
};
