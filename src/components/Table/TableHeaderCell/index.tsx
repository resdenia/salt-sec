import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}
interface ITableCellStyledProps {
  width?: string;
}

const TableHeaderCellWrapper = styled.div<ITableCellStyledProps>`
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  min-height: 45px;
  width: 100%;
  display: flex;
  word-break: break-word;

  flex: 1 ${({ width }) => width || 'auto'};

  &:first-child {
    &:before {
      content: none;
    }
  }
  &:before {
    content: ' ';
    height: 25px;
    width: 1px;
    margin: 10px 0px;
    background-color: var(--primary02);
  }
`;
const TitleWrapper = styled.span`
  display: flex;
  padding: 0px 32px;
  min-height: 20px;
  flex: 1 1 170px;
  flex-direction: column;
  line-height: 1.3;
  word-break: break-word;
  font-weight: 500;
  color: black;
  min-width: 0px;
  font-size: 14px;
`;

const TableHeaderCell: FunctionComponent<IProps> = ({ children, ...props }) => {
  return (
    <TableHeaderCellWrapper {...props}>
      <TitleWrapper>{children}</TitleWrapper>
    </TableHeaderCellWrapper>
  );
};

export default TableHeaderCell;
