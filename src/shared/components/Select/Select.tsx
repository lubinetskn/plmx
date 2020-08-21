import React from 'react';
import {StyledSelect} from './styled';

type TSelect = {
  value: string;
  label: string;
};

interface ISelect {
  options: TSelect[];
  placeholder?: string;
}

export const Select: React.FC<ISelect> = ({options, placeholder = 'Выбери...'}) => {
  return <StyledSelect classNamePrefix="plmx-select" placeholder={placeholder} options={options} />;
};
