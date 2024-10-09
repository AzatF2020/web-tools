import type { TBaseInputSize } from '@/core/models/BsseInputModel/types';

class BaseInputModel {
  public readonly invalid?: boolean;
  public readonly size?: TBaseInputSize | number;
  public className?: string;
}

export default BaseInputModel;
