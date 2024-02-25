import  { FunctionComponent } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import styled from 'styled-components';
import ArrowIcon from 'src/assets/arrow.svg?react';
import Button from 'src/components/Button';
import Text from 'src/components/Text';
import Breadcrumbs from 'src/sections/Breadcrumbs';
import { Link } from 'react-router-dom';

const BackButton = styled(Button)`
  transform: rotate(90deg);
  margin-right: 20px;
  margin-top: 2px;
  svg {
    display: flex;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  border-bottom: 1px solid var(--primary02);
  background-color: var(--white-color);
`;

const TitleRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const BreadcrumbsRow = styled.div`
  display: flex;
  max-height: 18px;
`;
const TitleBreadcrumbsColumn = styled.div`
  flex-direction: column;
  display: flex;
`;
const ProjectHeader: FunctionComponent = () => {
  const { method = '', path } = useAppSelector((state) => state.swaggerSlice);

  return (
    <HeaderContainer>
      <BackButton>
        <Link to="/">
        <ArrowIcon />
          </Link>
      </BackButton>
      <TitleBreadcrumbsColumn>
        <TitleRow>
          <Text tag={'h1'}>
            {method.toUpperCase()} {path}
          </Text>
        </TitleRow>
        <BreadcrumbsRow>
          <Breadcrumbs />
        </BreadcrumbsRow>
      </TitleBreadcrumbsColumn>
    </HeaderContainer>
  );
};
export default ProjectHeader;
