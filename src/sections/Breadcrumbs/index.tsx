import  { FunctionComponent } from 'react';
import styled from 'styled-components';
import ArrowIcon from 'src/assets/arrow.svg?react';
import Text from 'src/components/Text';

const breadcrumbs = ['Inventory', 'Endpoints Group', 'Endpoints Details'];

const BreadcrumbSeparator = styled.div`
  transform: rotate(-90deg);
`;

const BreadCrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
  }
`;

const Breadcrumbs: FunctionComponent = () => {
  const renderBreadcrumbs = () =>
    breadcrumbs.map((item, index) => {
      return (
        <BreadCrumbsWrapper key={`${item}_${index}`}>
          <Text
            color={`${index === breadcrumbs.length - 1 ? 'var(--neutral06)' : 'var(--primary05)'}`}
            fontWeight={`${index === breadcrumbs.length - 1 ? '400' : '600'}`}
            tag={'span'}>
            {item}
          </Text>
          {index !== breadcrumbs.length - 1 && (
            <BreadcrumbSeparator>
              <ArrowIcon />
            </BreadcrumbSeparator>
          )}
        </BreadCrumbsWrapper>
      );
    });

  return <>{renderBreadcrumbs()}</>;
};
export default Breadcrumbs;
