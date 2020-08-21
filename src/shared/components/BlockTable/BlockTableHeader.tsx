import React, {ReactElement} from 'react';
import {TableCell, TableSortLabel, Divider} from '@material-ui/core';
import {ITableHeader, ISortDirection} from './types';
import {VisuallyHidden} from './styled';

export default function BlockTableHeader({sortBy, sortDirection, label, dataKey, sort}: ITableHeader): ReactElement {
  const convertDirection = () => {
    if (!sortDirection) {
      return undefined;
    }
    if (sortDirection === 'ASC') {
      return 'asc';
    }
    return 'desc';
  };
  const direction: ISortDirection = convertDirection();
  return (
    <TableCell
      key={label}
      component="div"
      sortDirection={sortBy === dataKey ? direction : false}
      // className={clsx(classes.tableCell, classes.flexContainer)}
      variant="head"
      onClick={() => sort(dataKey, direction)}
      style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '8px'}}
    >
      <div style={{fontSize: '10px', flex: 1, cursor: 'pointer'}}>{label}</div>

      <TableSortLabel active={sortBy === dataKey} direction={sortBy === dataKey ? direction : 'asc'}>
        <VisuallyHidden>{direction === 'desc' ? 'sorted descending' : 'sorted ascending'}</VisuallyHidden>
      </TableSortLabel>
      <Divider orientation="vertical" flexItem />
    </TableCell>
  );
}
