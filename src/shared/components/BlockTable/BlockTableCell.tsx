import React, {ReactElement} from 'react';
import {TableCell, Theme} from '@material-ui/core';
import {getHighlightedText} from '../../utils/helpers';

interface IBlockTableCell {
  cellData: any;
  columnData: any;
  columnIndex: number;
  rowHeight: number;
  filter: string;
  theme: Theme;
}

export default function BlockTableCell({
  cellData,
  columnIndex,
  rowHeight,
  filter,
  theme,
}: IBlockTableCell): ReactElement {
  const highlightColor = theme.palette.primary.main;
  return (
    <TableCell
      key={cellData + columnIndex}
      component="div"
      // className={clsx(classes.tableCell, classes.flexContainer)}
      variant="body"
      style={{height: rowHeight, display: 'flex', flex: 1, justifyContent: 'start', padding: '8px'}}
      // align={(columnIndex != null && columnData.numeric) || false ? 'right' : 'left'}
    >
      <div>{getHighlightedText(cellData, filter, highlightColor)}</div>
    </TableCell>
  );
}
