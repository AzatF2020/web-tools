import type { HTMLInputAttributes } from 'react';
import BaseInputModel from '@/core/models/BaseButtonModel/BaseButtonModel.ts';

interface IBaseInputProps extends BaseInputModel, HTMLInputAttributes<HTMLInputElement> {}

export type { IBaseInputProps };
