import { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 3px;
  display: flex;
  border: 1px solid var(--neutral04);
  cursor: pointer;

  &.checked {
    background-color: var(--primary02);
  }
`;

interface IProps {
  value: boolean;
  onClick: (value: boolean) => void;
}

const Checkbox: FunctionComponent<IProps> = ({ onClick, value = false }) => {
  const [toggleCheck, setToggleCheck] = useState(value);

  const onClickCheckbox = () => {
    setToggleCheck(!toggleCheck);
    onClick(!toggleCheck);
  };

  useEffect(() => {
    setToggleCheck(value);
  }, [value]);
  return (
    <CheckboxWrapper
      data-testid="checkbox"
      onClick={onClickCheckbox}
      className={toggleCheck ? 'checked' : ''}></CheckboxWrapper>
  );
};

export default Checkbox;
