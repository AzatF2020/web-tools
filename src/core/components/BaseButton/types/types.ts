import type { ButtonHTMLAttributes } from 'react';
import { TSize, TButtonVariant } from '@/core/utils/types';

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: Extract<TSize, 'sm' | 'md' | 'lg'>;
  variant?: Extract<TButtonVariant, 'primary' | 'secondary' | 'outlined' | 'link' | 'loading'>;
  loading?: boolean;
  className?: string;
}

export type { IBaseButtonProps };
