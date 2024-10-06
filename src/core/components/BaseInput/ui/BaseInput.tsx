import type { FC } from 'react';
import type { IBaseInputProps } from '@/core/components/BaseInput/types/types';
import styles from '@/core/components/BaseInput/styles/BaseInput.module.scss';
import clsx from 'clsx';

const BaseInput: FC<IBaseInputProps> = ({
  type,
  size = 'md',
  invalid = false,
  className,
  ...props
}) => {
  return (
    <>
      <input
        type={type}
        className={clsx(
          styles.input,
          styles[`input--${size}`],
          styles[`input--${invalid && 'invalid'}`],
          className,
        )}
        {...props}
      />
    </>
  );
};

export default BaseInput;
