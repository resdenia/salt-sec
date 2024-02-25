import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const TableBodyWrapper = styled.div`
  background: #fff;
  border-radius: 0px 0px 6px 6px;
  & > div:last-child {
    border-radius: 0 0 6px 6px;
  }
`;

const TableBody: FunctionComponent<IProps> = ({ children }) => {
  return <TableBodyWrapper>{children}</TableBodyWrapper>;
};

export default TableBody;
