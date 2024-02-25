import { render, fireEvent } from '@testing-library/react';

import Input from '../';

describe('Input', () => {
 

  it('handles onChange', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Test input" onChange={handleChange} />);
    fireEvent.change(getByPlaceholderText('Test input'), { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalledWith('test value');
  });

  it('handles onFocus and onBlur', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Test input" onFocus={handleFocus} onBlur={handleBlur} />);
    const input = getByPlaceholderText('Test input');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });
});