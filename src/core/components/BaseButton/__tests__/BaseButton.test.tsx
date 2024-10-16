import BaseButton from '../ui/BaseButton';
import type {
  IBaseButtonProps,
  TButtonSize,
  TButtonVariant,
} from '@/core/components/BaseButton/types/types';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { sizes, variants } from '@/core/utils/constants';

const renderButton = (props: IBaseButtonProps = { label: 'button' }) => {
  return render(<BaseButton {...props} />);
};

describe('Button test component', () => {
  it('should render component with props', () => {
    renderButton({
      size: 'lg',
      variant: 'primary',
      type: 'submit',
      label: 'Click on me',
      disabled: false,
    });
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  describe('test prop size', () => {
    test.each(sizes)('render with prop size %s', (size) => {
      renderButton({ size: size as TButtonSize });
      expect(screen.getByRole('button')).toHaveClass(`button--${size}`);
    });
  });

  describe('test prop variant', () => {
    test.each(variants)('render with prop variant %s', (variant) => {
      renderButton({ variant: variant as TButtonVariant });
      expect(screen.getByRole('button')).toHaveClass(`button--${variant}`);
    });
  });

  it('should render component', () => {
    renderButton();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render attribute disabled', () => {
    renderButton({ disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render with right prop label', () => {
    renderButton({ label: 'Click on me' });
    expect(screen.getByText('Click on me')).toBeInTheDocument();
  });

  it('should render with empty prop label', () => {
    renderButton({ label: '' });
    expect(screen.getByRole('button').textContent).toHaveLength(0);
  });

  it('calls onClick prop when clicked', () => {
    const onClick = vi.fn();
    renderButton({ onClick });
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });

  it('calls onClick prop when clicked', () => {
    const onClick = vi.fn();
    renderButton({ onClick });
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalledOnce();
  });
});
