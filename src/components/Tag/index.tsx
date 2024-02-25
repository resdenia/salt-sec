import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  texttype?: string;
  onClick?: () => void;
}

interface ITagStyledProps {
  color?: string;
  texttype?: string;
}

const TagWrapper = styled.span<ITagStyledProps>`
  background: ${({ color }) => color || `#e7e7e7`};
  color: ${({ texttype }) => texttype || 'var(--white-color)'};
  border: 1px solid ${({ color }) => color || `#e7e7e7`};
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 2px 10px;

  &.outline {
    background: var(--white-color);
    color: ${({ color }) => color || `#e7e7e7`};
  }
`;

const Tag: FunctionComponent<IProps> = ({ children, ...props }) => {
  return <TagWrapper {...props}>{children}</TagWrapper>;
};

export default Tag;
