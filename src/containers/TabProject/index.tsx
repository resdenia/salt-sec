import React, { FunctionComponent, useState } from 'react';

import Tab from 'src/components/Tab';
import { PROJECT_TABS } from 'src/utils/constants';
import Request from 'src/sections/Request';
import Response from 'src/sections/Response';
import styled from 'styled-components';

const TabControllerWrapper = styled.div`
  border-bottom: 1px solid var(--primary02);
`;

const TabProject: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>(PROJECT_TABS[0]);

  const renderTab = () => {
    switch (activeTab) {
      case 'Request':
        return <Request />;
      case 'Response':
        return <Response />;
      default:
        return <>No Data</>;
    }
  };

  const setActiveTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabControllerWrapper>
        <Tab.TabController
          controllers={PROJECT_TABS}
          activeTab={activeTab}
          setActiveTabHandler={setActiveTabHandler}
        />
      </TabControllerWrapper>

      <Tab.TabContainer>{renderTab()}</Tab.TabContainer>
    </>
  );
};

export default TabProject;
