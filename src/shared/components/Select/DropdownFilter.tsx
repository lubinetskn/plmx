import React from 'react';
import {StyledDropdownFilter} from './styled';

type TSelect = {
  value: string;
  label: unknown;
};

interface ISelect {
  options: TSelect[];
  defaultValue?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
}

export const DropdownFilter: React.FC<ISelect> = ({
  options,
  placeholder = 'Выбери...',
  defaultValue,
  onChange,
  ...props
}) => {
  return (
    <StyledDropdownFilter
      classNamePrefix="plmx-select"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      props={props}
      closeMenuOnSelect={false}
      isMulti
    />
  );
};
