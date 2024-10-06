import type { TBaseInputSize } from '@/core/models/BsseInputModel/types';

class BaseInputModel {
  invalid?: boolean;
  size?: TBaseInputSize | number;
  className?: string;
}

export default BaseInputModel;
