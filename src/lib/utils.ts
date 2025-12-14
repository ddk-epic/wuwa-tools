import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPercentage(number: number) {
  return `${(number * 100).toFixed(1)}\u2009%`;
}
