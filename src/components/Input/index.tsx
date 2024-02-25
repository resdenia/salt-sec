import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const InputElement = styled.input``;

const Input = memo((props: InputProps) => {
  const {
    value,
    className,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current!.focus();
    }
  }, [autofocus]);

  const onBlur = () => {};
  const onFocus = () => {};

  return (
    <>
      <InputElement
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        {...otherProps}
      />
    </>
  );
});

export default Input;
