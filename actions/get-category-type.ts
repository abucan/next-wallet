import { SelectOptionsProps } from '@/ts/interfaces/app_interfaces';
import { FaHouseUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { MdElectricalServices } from 'react-icons/md';
import { MdFastfood } from 'react-icons/md';
import { FaHospitalAlt } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import { SiPlaywright } from 'react-icons/si';
import { FaBath } from 'react-icons/fa6';
import { MdSavings } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaArrowCircleUp } from 'react-icons/fa';

export const categoryTypes: SelectOptionsProps[] = [
  { value: 'HOUSING', label: 'House Bills', icon: FaHouseUser },
  {
    value: 'TRANSPORTATION',
    label: 'Transportation Expenses',
    icon: FaCar,
  },
  {
    value: 'UTILITIES',
    label: 'Utility Bills',
    icon: MdElectricalServices,
  },
  {
    value: 'FOOD_GROCERIES',
    label: 'Food & Groceries',
    icon: MdFastfood,
  },
  {
    value: 'HEALTHCARE',
    label: 'Healthcare Expenses',
    icon: FaHospitalAlt,
  },
  {
    value: 'EDUCATION',
    label: 'Education',
    icon: IoSchool,
  },
  {
    value: 'ENTERTAINMENT',
    label: 'Entertainment',
    icon: SiPlaywright,
  },
  {
    value: 'PERSONAL_CARE',
    label: 'Personal Care',
    icon: FaBath,
  },
  {
    value: 'SAVINGS_INVESTMENTS',
    label: 'Savings & Investments',
    icon: MdSavings,
  },
  {
    value: 'DEPT_REPAYMENT',
    label: 'Debt & Repayment',
    icon: GiPayMoney,
  },
];

export const recordTypes: SelectOptionsProps[] = [
  { value: 'INCOME', label: 'Income', icon: FaArrowCircleUp },
  { value: 'EXPENSE', label: 'Expense', icon: FaArrowCircleDown },
];

const categoryMap = categoryTypes.reduce((acc, { value, label }) => {
  acc[value.toUpperCase()] = label;
  return acc;
}, {} as { [key: string]: string });

const categoryIconsMap = categoryTypes.reduce(
  (acc, { value, icon }) => {
    acc[value.toUpperCase()] = icon;
    return acc;
  },
  {} as { [key: string]: React.ComponentType },
);

export const getCategoryName = (value: string) => {
  const CategoryName =
    categoryMap[value.toUpperCase()] || 'Unknown Category';
  return CategoryName;
};

export const getCategoryIcon = (iconName: string) => {
  const IconComponent = categoryIconsMap[iconName] || 'GiPayMoney';
  return IconComponent;
};
