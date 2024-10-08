import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { BaseInput } from '@/core/components/BaseInput';
import { sizes } from '@/core/utils/constants';
import type { IBaseInputProps } from '@/core/components/BaseInput/types/types';
import type { TBaseInputSize } from '@/core/models/BsseInputModel/types';

const renderInput = (props: IBaseInputProps = { placeholder: 'Write text' }) => {
  return render(<BaseInput {...props} />);
};

describe('BaseInput test component', () => {
  const placeholder = 'Write text';

  describe('test prop size', () => {
    test.each(sizes)('should render component with size %s', (size) => {
      const { getByPlaceholderText } = renderInput({ size: size as TBaseInputSize, placeholder });
      expect(getByPlaceholderText(placeholder)).toHaveClass(`input--${size}`);
    });
  });

  it('should render component with default props', () => {
    const { getByPlaceholderText } = renderInput({
      placeholder,
      size: 'md' as TBaseInputSize,
      type: 'text',
      name: 'text',
      value: 'text for test',
      disabled: false,
      readOnly: false,
      invalid: false,
      onChange: vi.fn(),
    });

    expect(getByPlaceholderText('Write text')).toMatchSnapshot();
  });

  it('should render with incorrect prop', () => {
    const { getByPlaceholderText } = renderInput({
      placeholder,
      size: 'md' as TBaseInputSize,
    });

    expect(getByPlaceholderText(placeholder)).not.toHaveClass('input--sm');
  });

  it('should render with disabled or readonly attribute', () => {
    const { getByPlaceholderText } = renderInput({
      placeholder,
      disabled: true,
      readOnly: true,
    });

    const input = getByPlaceholderText(placeholder);

    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('readonly');
  });

  it('should test onChange function', async () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = renderInput({ onChange, placeholder });

    await fireEvent.change(getByPlaceholderText(placeholder), {
      target: { value: 'value for test' },
    });

    expect(onChange).toHaveBeenCalledOnce();
  });

  it('should test onChange function with correct value', async () => {
    const { getByPlaceholderText } = renderInput();

    const input = getByPlaceholderText(placeholder);
    await fireEvent.change(input, { target: { value: 'value for test' } });
    expect(input).toHaveValue('value for test');
  });
});
