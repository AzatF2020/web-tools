import { forwardRef } from 'react';
import type { IBaseCheckboxProps } from '@/core/components/BaseCheckbox/types/types';
import styles from '@/core/components/BaseCheckbox/styles/BaseCheckbox.module.scss';
import clsx from 'clsx';
import '../styles/_checkbox-global.scss';

const BaseCheckbox = forwardRef<HTMLInputElement, IBaseCheckboxProps>(
  (
    {
      className = '',
      value = '',
      disabled = false,
      invalid = false,
      checked = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={styles.checkbox}>
        <input
          {...props}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          role="checkbox"
          ref={ref}
          className={clsx(styles.checkbox__component)}
          aria-invalid={invalid}
          aria-checked={checked}
        />
        <span
          className={clsx(
            styles.checkbox__checkmark,
            disabled && styles['checkbox__checkmark--disabled'],
            invalid && styles[`checkbox__checkmark--invalid`],
            className,
          )}></span>
      </div>
    );
  },
);

export default BaseCheckbox;
