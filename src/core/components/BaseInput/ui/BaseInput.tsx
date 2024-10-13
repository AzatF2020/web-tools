import { forwardRef } from 'react';
import type { IBaseInputProps } from '@/core/components/BaseInput/types/types';
import styles from '@/core/components/BaseInput/styles/BaseInput.module.scss';
import clsx from 'clsx';

const BaseInput = forwardRef<HTMLInputElement, IBaseInputProps>(
  ({ type = 'text', size = 'md', invalid = false, className, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        className={clsx(
          styles.input,
          styles[`input--${size}`],
          invalid && styles['input--invalid'],
          className,
        )}
        {...props}
      />
    );
  },
);

export default BaseInput;
