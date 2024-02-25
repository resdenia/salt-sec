import React, { FunctionComponent } from 'react';
import ProjectHeader from 'src/sections/ProjectHeader';
import styled from 'styled-components';
import TabProject from 'src/containers/TabProject';

const PageWrapper = styled.div``;
const Project: FunctionComponent = () => {
  return (
    <PageWrapper>
      <ProjectHeader />
      <TabProject />
    </PageWrapper>
  );
};

export default Project;
