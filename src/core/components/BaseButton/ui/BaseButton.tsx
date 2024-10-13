import { forwardRef } from 'react';
import type { IBaseButtonProps } from '@/core/components/BaseButton/types/types';
import styles from 'core/components/BaseButton/styles/BaseButton.module.scss';
import clsx from 'clsx';

const BaseButton = forwardRef<HTMLButtonElement, IBaseButtonProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      type = 'button',
      loading = false,
      label,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={clsx(
          styles.button,
          styles[`button--${size}`],
          styles[`button--${variant}`],
          loading && styles['button--loading'],
        )}
        {...props}>
        <span className={styles.button__label}>{label || children}</span>
      </button>
    );
  },
);

export default BaseButton;
