import { ReactNode } from "react";

export interface Description {
  id: number;
  title: string;
  paragraphs: string[];
}
export interface LinkData {
  href: string;
  icon: ReactNode;
  ariaLabel?: string;
}
