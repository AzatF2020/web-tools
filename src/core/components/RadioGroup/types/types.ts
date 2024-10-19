import type { InputHTMLAttributes } from 'react';
import type { TVariant } from '@/core/utils/types';

type TRadioItemVariant = Extract<TVariant, 'outlined' | 'filled'>;

interface IRadioItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: TRadioItemVariant;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  value?: string;
  checked?: boolean;
}

export type { IRadioItemProps, TRadioItemVariant };
