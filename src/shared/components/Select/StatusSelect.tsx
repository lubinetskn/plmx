import React from 'react';
import {StyledStatusSelect} from './styled';

type TSelect = {
  value: string;
  label: string;
};

interface ISelect {
  options: TSelect[];
  defaultValue?: any;
  isDisabled?: Boolean;
  onChange?: (e: any) => void;
  placeholder?: string;
}

export const StatusSelect: React.FC<ISelect> = ({
  options,
  placeholder = 'Выбери...',
  defaultValue,
  onChange,
  isDisabled,
  ...props
}) => {
  return (
    <StyledStatusSelect
      classNamePrefix="plmx-select"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      isDisabled={isDisabled}
      defaultValue={defaultValue}
      props={props}
      isSearchable={false}
    />
  );
};
