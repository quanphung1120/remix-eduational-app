import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SuccessFault<T, R = true | false> = {
  success: R;
  message: string;
  errors?: Record<string, string>;
  data: T;
};

interface SuccessFaultArgs<T> {
  message?: string;
  data?: T;
  errors?: Record<string, string>;
}

export const success = <T extends Record<string, unknown> | undefined>({
  message = "",
  data,
}: SuccessFaultArgs<T>) =>
  ({
    success: true,
    message,
    errors: undefined,
    data,
  } as SuccessFault<T, true>);

export const fault = <T extends Record<string, unknown> | undefined>({
  message = "",
  errors,
  data,
}: SuccessFaultArgs<T>) =>
  ({
    success: false,
    message,
    errors,
    data,
  } as SuccessFault<T, false>);
