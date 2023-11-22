import { LucideIcon } from "lucide-react";

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

export interface AccountProps {
  id?: string;
  name: string;
  color: string;
  type: string;
  balance: number;
}

export interface RecordProps {
  id?: string;
  accountId: string;
  recordType: string;
  amount: number;
  category: string;
  createdAt: Date;
}

export interface AccountCardProps {
  account: AccountProps;
  searchParams?: Record<string, string> | null | undefined;
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

export interface ColorInputProps {
  name: string;
  label?: string;
  placeholder: string;
  initialValue?: string;
}

export interface AccountInputProps {
  name: string;
  label: string;
  placeholder: string;
  initialValue?: string;
}

export interface PageHeaderProps {
  title: string;
  href: string;
}
