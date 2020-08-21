import React from 'react';
import {StyledResponsibleSelect} from './styled';

type TSelect = {
  value: string;
  label: string;
};

interface ISelect {
  options: TSelect[];
  defaultValue?: any;
  isDisabled?: boolean;
  onChange?: (e: any) => void;
  placeholder?: string;
}

export const ResponsibleSelect: React.FC<ISelect> = ({
  options,
  placeholder = 'Выбери...',
  onChange,
  defaultValue,
  isDisabled,
  ...props
}) => {
  return (
    <StyledResponsibleSelect
      classNamePrefix="plmx-select"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      defaultValue={defaultValue}
      props={props}
      isDisabled={isDisabled}
    />
  );
};
