import type { InputHTMLAttributes } from 'react';

interface IBaseCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
  className?: string;
}

export type { IBaseCheckboxProps };
