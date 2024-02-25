import React, { ButtonHTMLAttributes, memo } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
}

const ButtonElement = styled.button<ButtonProps>`
  width: ${({ width }) => width || '30px'};
  height: ${({ height }) => height || '30px'};
  background: ${({ background }) => background || 'var(--white-color)'};
  border: none;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => color || 'var(--neutral06)'};
  cursor: pointer;
  padding: 0;
  transition: 0.3s;
`;

const Button = memo((props: ButtonProps) => {
  const {
    children,

    disabled,
    ...otherProps
  } = props;

  return (
    <ButtonElement {...otherProps} disabled={disabled}>
      {children}
    </ButtonElement>
  );
});

export default Button;
