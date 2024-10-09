import type { TButtonSize, TButtonVariant } from '@/core/models/BaseButtonModel/types';

class BaseButtonModel {
  public readonly label?: string;
  public readonly size?: TButtonSize;
  public readonly variant?: TButtonVariant;
  public readonly loading?: boolean;
  public className?: string;
}

export default BaseButtonModel;
