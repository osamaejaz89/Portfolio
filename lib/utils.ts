import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classnames safely (conditional + de-duplicated).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
