import type { FC } from 'react';
import type { IButtonProps } from '@/core/components/BaseButton/types/types';
import styles from 'core/components/BaseButton/styles/BaseButton.module.scss';
import clsx from 'clsx';

const BaseButton: FC<IButtonProps> = ({
  size = 'md',
  variant = 'primary',
  type = 'button',
  label,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[`button--${size}`], styles[`button--${variant}`])}
      {...props}>
      {label}
    </button>
  );
};

export default BaseButton;
