import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const TabContainerWrapper = styled.div`
  padding: 20px;
`;

interface TabControllerProps {
  children: React.ReactNode;
}

const TabContainer: FunctionComponent<TabControllerProps> = ({ children }) => {
  return <TabContainerWrapper>{children}</TabContainerWrapper>;
};

export default TabContainer;
