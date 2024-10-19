import { forwardRef } from 'react';
import type { IRadioItemProps } from '@/core/components/RadioGroup/types/types';
import styles from '@/core/components/RadioGroup/styles/RadioItem.module.scss';
import clsx from 'clsx';
import '../styles/_radio-group-global.scss';

const RadioItem = forwardRef<HTMLInputElement, IRadioItemProps>(
  (
    {
      variant = 'outlined',
      value = '',
      invalid = false,
      disabled = false,
      checked = false,
      className = '',
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={styles.radioItem}>
        <input
          type="radio"
          ref={ref}
          className={styles.radioItem__component}
          disabled={disabled}
          value={value}
          checked={checked}
          onChange={onChange}
          aria-invalid={invalid}
          aria-checked={checked}
          {...props}
        />
        <div
          className={clsx(
            styles.radioItem__box,
            styles[`radioItem__box--${variant}`],
            invalid && styles['radioItem__box--invalid'],
            disabled && styles['radioItem__box--disabled'],
            className,
          )}></div>
      </div>
    );
  },
);

export default RadioItem;
