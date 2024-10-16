import type { InputHTMLAttributes } from 'react';
import type { TSize } from '@/core/utils/types';

type TBaseInputSize = Extract<TSize, 'sm' | 'md' | 'lg'> | number;

interface IBaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
  size?: TBaseInputSize;
  className?: string;
}

export type { IBaseInputProps, TBaseInputSize };
