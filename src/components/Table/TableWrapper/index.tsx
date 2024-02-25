import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type TableContextType = {
  columnWidths?: string[];
}

export const TableContext = React.createContext<TableContextType>({});

interface IProps {
  children: React.ReactNode;
  columnWidths?: string[];
  onClick?: () => void;
}

const DivTableWrapper = styled.div`
  border: 1px solid var(--primary02);
  border-radius: 6px;
`;

const TableWrapper: FunctionComponent<IProps> = ({ children, columnWidths }) => {
  return (
    <TableContext.Provider
      value={{
        columnWidths
      }}>
      <DivTableWrapper>{children}</DivTableWrapper>
    </TableContext.Provider>
  );
};

export default TableWrapper;
