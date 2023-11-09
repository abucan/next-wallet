import { LucideIcon } from 'lucide-react';

export interface AuthFormCard {
  children: React.ReactNode;
  cardTitle: string;
  cardDescription: string;
  cardFooterText: string;
  href: string;
  linkText: string;
}

export interface AuthHeaderProps {
  label: string;
  buttonText: string;
  href: string;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface SidebarRoutesProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface AddDialogAccountProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface AccountProps {
  name: string;
  color: string;
  type: string;
  balance: string;
}

export interface AccountCardProps {
  name: string;
  color: string;
  type: string;
  balance: number;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface LogoProps {
  width?: number;
}

export interface SessionProviderProps {
  children: React.ReactNode;
}

export interface QueryProviderProps {
  children: React.ReactNode;
}

export interface FormFieldSelectInputProps {
  name: string;
  label?: string;
  placeholder: string;
}
