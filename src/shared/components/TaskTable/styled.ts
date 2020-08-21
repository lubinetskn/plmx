import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import theme from '../../theme';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import {Link as RouterLink} from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #2196f3;
`;

export const StyledPaper = styled(Paper)`
  box-shadow: none;
  background-color: transparent;
  .ProductTableBody > tr:nth-child(odd) > .MuiTableCell-body {
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
