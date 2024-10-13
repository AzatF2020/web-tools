import type { InputHTMLAttributes } from 'react';
import type { TSize } from '@/core/utils/types';

interface IBaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
  size?: Extract<TSize, 'sm' | 'md' | 'lg'> | number;
  className?: string;
}

export type { IBaseInputProps };
