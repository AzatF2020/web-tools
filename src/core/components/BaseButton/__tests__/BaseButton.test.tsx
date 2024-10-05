import BaseButton from '../ui/BaseButton';
import type { IButtonProps } from '@/core/components/BaseButton/types/types';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TButtonSize, TButtonVariant } from '@/core/models/BaseButtonModel/types';

const factory = (props: IButtonProps = { label: 'button' }) => {
  return render(<BaseButton {...props} />);
};

describe('Button test component', () => {
  const sizes: TButtonSize[] = ['sm', 'md', 'lg'];
  const variants: TButtonVariant[] = ['primary', 'secondary', 'link', 'outlined'];

  describe('test prop size', () => {
    test.each(sizes)('render with prop size %s', (size) => {
      factory({ size });
      expect(screen.getByRole('button')).toHaveClass(`button--${size}`);
    });
  });

  describe('test prop variant', () => {
    test.each(variants)('render with prop variant %s', (variant) => {
      factory({ variant });
      expect(screen.getByRole('button')).toHaveClass(`button--${variant}`);
    });
  });

  it('should render component', () => {
    factory();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render attribute disabled', () => {
    factory({ disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render with right prop label', () => {
    factory({ label: 'Click on me' });
    expect(screen.getByText('Click on me')).toBeInTheDocument();
  });

  it('should render with empty prop label', () => {
    factory({ label: '' });
    expect(screen.getByRole('button').textContent).toHaveLength(0);
  });

  it('calls onClick prop when clicked', () => {
    const onClick = vi.fn();
    factory({ onClick });
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });

  it('calls onClick prop when clicked', () => {
    const onClick = vi.fn();
    factory({ onClick });
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });
});
