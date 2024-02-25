import React, { FunctionComponent } from 'react';
import Text from 'src/components/Text';
import styled from 'styled-components';

const TabControllerWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--white-color);
`;
interface TabControllerProps {
  controllers: string[];
  setActiveTabHandler: (tab: string) => void | undefined;
  activeTab?: string;
}
const TabElement = styled.div`
  cursor: pointer;
  display: flex;
  padding: 12px 20px;
  margin-bottom: 3px;
  z-index: 100;
  &.active {
    border-bottom: 3px solid var(--primary05);
    margin-bottom: 0px;
  }
`;

const TabController: FunctionComponent<TabControllerProps> = ({
  controllers,
  activeTab,
  setActiveTabHandler
}) => {
  const renderTabControllers = () => {
    return controllers.map((tab, index) => {
      return (
        <TabElement
          key={`${tab}_${index}`}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTabHandler(tab)}>
          <Text tag={'p'} color={activeTab === tab ? 'var(--primary05)' : 'var(--neutral06)'}>
            {tab}
          </Text>
        </TabElement>
      );
    });
  };
  return <TabControllerWrapper>{renderTabControllers()}</TabControllerWrapper>;
};

export default TabController;
