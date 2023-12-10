import { LucideIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export interface AuthFormCard {
  children: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  cardFooterText: string;
  href: string;
  linkText: string;
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
