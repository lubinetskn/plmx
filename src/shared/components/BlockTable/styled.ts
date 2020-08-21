import styled from 'styled-components';
import {Column} from 'react-virtualized';
import theme from '../../theme';

export const StyledColumn = styled(Column)`
  display: 'flex';
  align-items: 'center';
  box-sizing: 'border-box';
`;

export const classes = {
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454

    '& .ReactVirtualized__Grid': {
      outline: 'none',
      ':focus': {
        outline: 'none',
      },
    },
    width: '100%',
    margin: 0,
  },
  tableRow: {
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
};

export const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1;
  margin: -1;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 20;
  width: 1;
`;
