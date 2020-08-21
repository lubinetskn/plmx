import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import theme from '../../theme';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const StyledTableRowSeparator = styled(TableRow)`
  height: 8px;
  background-color: transparent;
`;
export const StyledPaper = styled(Paper)`
  box-shadow: none;
  background-color: transparent;
  .ProductTableBody > tr:nth-child(3n + 1) > .MuiTableCell-body {
    &:last-child {
      width: 8px;
      padding: 0px;
      position: relative;
      background-color: transparent;
    }
  }
  .ProductTableBody > tr > .MuiTableCell-body {
    background-color: #fff;
    transition: background-color 0.5s;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  .MuiTableCell-root {
    border: none;
  }
`;

export const StyledTableRow = styled(TableRow)<{expand: boolean}>`
  ${props =>
    props.expand &&
    `
    td:not(:last-child) {background-color: #99c973 !important;
    }`};
`;

export const InnerTable = styled(Table)`
  .MuiTableCell-root {
    border-bottom: 1px solid #000;
  }
  .MuiTableBody-root .MuiTableRow-root:last-child .MuiTableCell-root {
    border-bottom: none;
  }
`;

export const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`
  translate: 'rotate(90deg)';
`;
