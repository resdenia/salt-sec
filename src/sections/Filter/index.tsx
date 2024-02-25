import React, { FunctionComponent, useState } from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Checkbox from 'src/components/Checkbox';
import Text from 'src/components/Text';
import SearchIcon from 'src/assets/search-icon.svg?react';
import { filterData, resetFilter } from 'src/store/slices/swaggerSlice/swaggerSlice';

import styled from 'styled-components';
import { IFilteredResults } from 'src/interfaces/swagger.interface';

const FilterWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
`;
const FilterInputWrapper = styled.div`
  width: 70%;
  background-color: var(--white-color);
  border: 1px solid var(--primary02);
  display: flex;
  border-radius: 6px 0px 0px 6px;
  align-items: center;
  padding: 0px 10px;
  > input {
    border: none;
    width: 100%;
    height: 100%;
  }
`;
const FilterControllersWrapper = styled.div`
  width: 90%;
  display: flex;
  margin-right: 10px;
`;
const SearchIconWrapped = styled(SearchIcon)`
  margin-right: 6px;
`;

const FilterControllers = styled.div`
  padding: 9px 10px;
  width: 30%;
  background-color: var(--white-color);
  border: 1px solid var(--primary02);
  display: flex;
  border-radius: 0 6px 6px 0;
  border-left: none;
`;

const ButtonWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextWrapper = styled.div`
  margin-left: 5px;

  > span {
    display: flex;
    line-height: 15px;
  }
`;

interface IProps {
  searchRelated: keyof IFilteredResults;
}

const Filter: FunctionComponent<IProps> = ({ searchRelated }) => {
  const [isPII, setIsPII] = useState(false);
  const [searchValue, setSearch] = useState('');
  const dispatch = useAppDispatch();

  const handleFilter = () => {
    dispatch(filterData({ searchValue, isPII, searchRelated }));
  };

  const handleCheckbox = (toggle: boolean) => {
    setIsPII(toggle);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const resetFilterHandler = () => {
    setIsPII(false);
    setSearch('');
    dispatch(resetFilter());
  };

  return (
    <FilterWrapper>
      <FilterControllersWrapper>
        <FilterInputWrapper>
          <SearchIconWrapped />
          <Input
            value={searchValue}
            placeholder={'Search'}
            onChange={(value) => {
              handleSearch(value);
            }}
          />
        </FilterInputWrapper>
        <FilterControllers>
          <Checkbox value={isPII} onClick={handleCheckbox} />{' '}
          <TextWrapper>
            <Text tag={'span'} color={'var(--neutral05)'}>
              Show PII Only
            </Text>
          </TextWrapper>
        </FilterControllers>
      </FilterControllersWrapper>
      <ButtonWrapper>
        <Button
          onClick={handleFilter}
          background="var(--primary05)"
          color="var(--white-color)"
          height="35px"
          width="100%">
          Apply Filter
        </Button>
        <Button
          onClick={resetFilterHandler}
          background="transparent"
          color="var(--neutral04)"
          height="35px"
          width="115px">
          Reset Filters
        </Button>
      </ButtonWrapper>
    </FilterWrapper>
  );
};

export default Filter;
