import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../';

describe('Checkbox', () => {
  it('renders without errors', () => {
    render(<Checkbox value={false} onClick={() => {}} />);
  });

  it('toggles the checkbox when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Checkbox value={false} onClick={handleClick} />);
    const checkbox = getByTestId('checkbox');

    fireEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledWith(false);
  });
});