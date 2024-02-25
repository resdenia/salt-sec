import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../'; // Adjust the import path to where your Text component is located.

describe('Text Component', () => {
  test('renders h1 tag with custom color and fontWeight', () => {
    const customColor = '#ff6347';
    const customFontWeight = '800';
    render(<Text tag="h1" color={customColor} fontWeight={customFontWeight}>Heading 1</Text>);
    const headingElement = screen.getByText('Heading 1');
    expect(headingElement.tagName).toBe('H1');
    expect(headingElement).toHaveStyle(`color: ${customColor}`);
    expect(headingElement).toHaveStyle(`font-weight: ${customFontWeight}`);
  });

  test('renders paragraph with default styles', () => {
    render(<Text tag="p">Paragraph</Text>);
    const paragraphElement = screen.getByText('Paragraph');
    expect(paragraphElement.tagName).toBe('P');
    expect(paragraphElement).toHaveStyle('color: var(--neutral06)');
    expect(paragraphElement).toHaveStyle('font-weight: 400');
  });

  test('renders span with custom styles', () => {
    const customColor = '#008000';
    const customFontWeight = '600';
    render(<Text tag="span" color={customColor} fontWeight={customFontWeight}>Span Text</Text>);
    const spanElement = screen.getByText('Span Text');
    expect(spanElement.tagName).toBe('SPAN');
    expect(spanElement).toHaveStyle(`color: ${customColor}`);
    expect(spanElement).toHaveStyle(`font-weight: ${customFontWeight}`);
  });

  test('falls back to paragraph tag for unknown tag type', () => {
    render(<Text tag="unknown">Fallback</Text>);
    const fallbackElement = screen.getByText('Fallback');
    expect(fallbackElement.tagName).toBe('P');
  });
});
