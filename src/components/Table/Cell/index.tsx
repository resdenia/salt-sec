import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  display?: string;
  onClick?: () => void;
}
interface ITableCellStyledProps {
  width?: string;
  color?: string;
  display?: string;
}

const CellWrapper = styled.div<ITableCellStyledProps>`
  padding: 10px;
  flex: 1 ${({ width }) => width || 'auto'};
  position: relative;
  display: ${({ display }) => display || 'flex'};
  align-items: center;
  color: ${({ color }) => color || 'var(--neutral06)'};
  flex-direction: row;
  height: 50px;
`;
const Cell: FunctionComponent<IProps> = ({ children, ...props }) => {
  return <CellWrapper {...props}>{children}</CellWrapper>;
};

export default Cell;
