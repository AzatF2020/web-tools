import type { ButtonHTMLAttributes } from 'react';
import { TSize, TVariant } from '@/core/utils/types';

type TButtonSize = Extract<TSize, 'sm' | 'md' | 'lg'>;

type TButtonVariant = Extract<TVariant, 'primary' | 'secondary' | 'outlined' | 'link' | 'loading'>;

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: TButtonSize;
  variant?: TButtonVariant;
  loading?: boolean;
  className?: string;
}

export type { IBaseButtonProps, TButtonSize, TButtonVariant };
