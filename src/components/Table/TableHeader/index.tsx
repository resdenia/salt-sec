import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TableContext } from '../TableWrapper';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TableHeaderWrapper = styled.div`
  background: var(--white-color);
  border-bottom: 1px solid var(--primary02);
  -webkit-box-align: stretch;
  align-items: stretch;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  align-items: stretch;
  padding: 0px;
  border-radius: 6px 6px 0px 0px;
`;
const childrenWithSize = (children: React.ReactNode, columnWidths: string[]) => {
  if (!columnWidths) return children;

  return React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, { width: columnWidths[index] });
    }
  });
};


const TableHeader: FunctionComponent<IProps> = ({ children }) => {
  return (
    <TableHeaderWrapper>
      <TableContext.Consumer>
        {({ columnWidths }) => {
          if (!columnWidths) return;
          return childrenWithSize(children, columnWidths);
        }}
      </TableContext.Consumer>
    </TableHeaderWrapper>
  );
};

export default TableHeader;
