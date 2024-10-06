import type { TBaseInputSize } from '@/core/components/BaseInput/types';

class BaseInputModel {
  invalid?: boolean;
  size?: TBaseInputSize;
  className?: string;
}

export default BaseInputModel;
