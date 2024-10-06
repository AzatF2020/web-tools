import type { InputHTMLAttributes } from 'react';
import BaseInputModel from '@/core/models/BsseInputModel/BaseInputModel';

interface IBaseInputProps
  extends BaseInputModel,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}

export type { IBaseInputProps };
