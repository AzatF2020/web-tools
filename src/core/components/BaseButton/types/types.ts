import { ButtonHTMLAttributes } from 'react';
import BaseButtonModel from '@/core/models/BaseButtonModel/BaseButtonModel';

interface IButtonProps extends BaseButtonModel, ButtonHTMLAttributes<HTMLButtonElement> {}

export type { IButtonProps };
