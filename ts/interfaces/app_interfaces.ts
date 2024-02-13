import { RecordType } from '@prisma/client';
import { LucideIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export interface AuthFormCardProps {
  children: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  cardFooterText: string;
  href: string;
  linkText: string;
  showSocial?: boolean;
}

export interface GenericFormProps<T extends FieldValues> {
  submit: SubmitHandler<T>;
  isEditing: boolean;
  initialValues?: T;
  isLoadingSubmit?: boolean;
  id?: string;
}

export interface AuthHeaderProps {
  label: string;
  buttonText: string;
  href: string;
}

export interface SidebarRoutesProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface SelectOptionsProps {
  value: string;
  label: string;
  icon: React.ComponentType;
}

export interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  initialValue?: string;
  disabled?: boolean;
}

export interface ActionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClick: () => void;
  isBtnDisabled: boolean;
  dialogTitle: string;
  dialogDescription: string;
  dialogBtnText: string;
}

export interface SearchAccountProps {
  sort?: string;
  title?: string;
}

export interface CashFlowWidgetProps {
  totalFlow: number;
  income: number;
  expenses: number;
  incomePrec: number;
  expensesPrec: number;
}

export interface DashWidgetProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export interface DashRecordItemProps {
  recordCategory: string;
  recordAmount: number;
  recordType: RecordType;
}

export interface FinancialData {
  totalRecords: number;
  totalAccounts: number;
  totalExpenses: number;
  totalBalance: number;
  cashFlow: {
    totalCashFlow: number;
    income: number;
    expenses: number;
    incomePrec: number;
    expensesPrec: number;
  };
}

export interface ChartDataItem {
  createdAt: Date | string[];
  _sum: {
    amount: number | null;
  };
}

export interface ChartProps {
  data: ChartDataItem[];
}

export interface BarDataItem {
  category: string;
  _sum: {
    amount: number | null;
  };
}

export interface BarProps {
  data: BarDataItem[];
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload?: { category: string; _sum: { amount: number } } }[];
}
