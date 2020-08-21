import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  & + & {
    margin: 16px 0;
  }
  .plmx-select__placeholder {
    font-size: 14px;
    color: #8b8b8b;
  }
  .plmx-select__control {
    border-color: #8b8b8b;
    border-radius: 10px;
  }
  .plmx-select__indicator-separator {
    display: none;
  }
  .plmx-select__indicators {
  }
  .plmx-select__menu {
  }
  .plmx-select__menu-list {
  }
  .plmx-select__option {
  }
`;

export const StyledStatusSelect = styled(Select)`
  :focus {
    outline: none;
  }
  & + & {
    margin: 16px 0;
  }
  .plmx-select__placeholder {
    font-size: 14px;
    color: #8b8b8b;
  }
  .plmx-select__control {
    background-color: #f44336;
    color: white;
    text-transform: uppercase;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    padding: 2px 16px;
  }
  .plmx-select__indicator-separator {
    display: none;
  }
  .plmx-select__indicator,
  .plmx-select__dropdown-indicator,
  .plmx-select__indicators {
    color: #fff;
  }

  css-tlfecz-indicatorContainer .plmx-select__menu {
  }
  .plmx-select__menu-list {
  }
  .plmx-select__option {
  }
  .plmx-select__single-value,
  .plmx-select__placeholder {
    color: #fff;
    font-family: 'Open Sans', tahoma, sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33;
  }
`;

export const StyledResponsibleSelect = styled(Select)`
  & + & {
    margin: 16px 0;
  }
  .plmx-select__placeholder {
    font-size: 14px;
    color: #8b8b8b;
  }
  .plmx-select__control {
    border-color: #8b8b8b;
    border-radius: 10px;
  }
  .plmx-select__indicator-separator {
    display: none;
  }
  .plmx-select__indicators {
  }
  .plmx-select__menu {
  }
  .plmx-select__menu-list {
  }
  .plmx-select__option {
  }
`;

export const StyledDropdownFilter = styled(Select)`
  & + & {
    margin: 16px 0 0 8px;
  }

  .plmx-select__placeholder {
    font-size: 14px;
    color: #8b8b8b;
    white-space: nowrap;
  }
  .plmx-select__control {
    min-width: 150px;
    border-color: #8b8b8b;
    border-radius: 10px;
  }
  .plmx-select__indicator-separator {
    display: none;
  }
  .plmx-select__indicators {
  }
  .plmx-select__menu {
  }
  .plmx-select__menu-list {
  }
  .plmx-select__option {
  }
`;
