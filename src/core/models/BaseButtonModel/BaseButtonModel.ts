import { TButtonSize, TButtonVariant } from '@/core/models/BaseButtonModel/types';

class BaseButtonModel {
  label?: string;
  size?: TButtonSize;
  variant?: TButtonVariant;
  className?: string;
}

export default BaseButtonModel;
