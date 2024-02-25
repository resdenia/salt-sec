import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '../'; 

describe('Tag Component', () => {
  test('renders children content', () => {
    render(<Tag>Test Content</Tag>);
    const tagElement = screen.getByText('Test Content');
    expect(tagElement).toBeInTheDocument();
  });

  test('applies default background and text color', () => {
    render(<Tag>Default Style</Tag>);
    const tagElement = screen.getByText('Default Style');
    expect(tagElement).toHaveStyle('background: #e7e7e7');
    expect(tagElement).toHaveStyle('color: var(--white-color)');
  });

  test('applies custom color and text type', () => {
    render(<Tag color="#123456" texttype="custom">Custom Style</Tag>);
    const tagElement = screen.getByText('Custom Style');
    expect(tagElement).toHaveStyle('background: #123456');
    expect(tagElement).toHaveStyle('color: custom');
  });

  test('applies className and reacts to onClick event', () => {
    const handleClick = jest.fn();
    render(<Tag className="custom-class" onClick={handleClick}>Clickable</Tag>);
    const tagElement = screen.getByText('Clickable');
    expect(tagElement).toHaveClass('custom-class');
    tagElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with outline style when class outline is applied', () => {
    render(<Tag className="outline" color="#123456">Outline Style</Tag>);
    const tagElement = screen.getByText('Outline Style');
    expect(tagElement).toHaveStyle('background: rgb(18, 52, 86)');
    expect(tagElement).toHaveStyle('color: #123456');
  });
});