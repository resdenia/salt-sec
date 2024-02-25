import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const H1Section = styled.h1<{ fontWeight?: string; color?: string }>`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  font-size: var(--head-one-font-size);
  line-height: var(--head-one-line-height);
  color: ${({ color }) => color || 'var(--neutral06)'};
`;

const ParagraphSection = styled.p<{ fontWeight?: string; color?: string }>`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: var(--paragraph-font-size);
  line-height: var(--paragraph-line-height);
  color: ${({ color }) => color || 'var(--neutral06)'};
`;

const SpanSection = styled.span<{ fontWeight?: string; color?: string }>`
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-size: var(--span-font-size);
  line-height: var(--span-line-height);
  color: ${({ color }) => color || 'var(--neutral06)'};
`;

interface IProps {
  children: React.ReactNode;
  tag: string;
  color?: string;
  fontWeight?: string;
}

const Text: FunctionComponent<IProps> = ({ children, tag, color, fontWeight }) => {
  switch (tag) {
    case 'h1':
      return (
        <H1Section fontWeight={fontWeight} color={color}>
          {children}
        </H1Section>
      );

    case 'p':
      return (
        <ParagraphSection fontWeight={fontWeight} color={color}>
          {children}
        </ParagraphSection>
      );
    case 'span':
      return (
        <SpanSection fontWeight={fontWeight} color={color}>
          {children}
        </SpanSection>
      );
    default:
      return (
        <ParagraphSection fontWeight={fontWeight} color={color}>
          {children}
        </ParagraphSection>
      );
  }
};

export default Text;
