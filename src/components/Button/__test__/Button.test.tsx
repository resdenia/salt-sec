import { render, fireEvent } from '@testing-library/react';
import Button from '../';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Test Button</Button>);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Test Button</Button>
    );
    fireEvent.click(getByText('Test Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Test Button</Button>);
    expect(getByText('Test Button')).toBeDisabled();
  });
});