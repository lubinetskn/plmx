import React, {useState, useEffect} from 'react';
import 'react-virtualized/styles.css'; // only needs to be imported once
import './styles.css';
import {AutoSizer, Column, Table, SortDirection} from 'react-virtualized';
import {useTheme} from '@material-ui/core/styles';
import {filterTableData, usePrevious} from '../../utils/helpers';
import clsx from 'clsx';
import _ from 'lodash';
import BlockTableHeader from './BlockTableHeader';
import BlockTableCell from './BlockTableCell';
import {ISortDirection, ITableProps} from './types';
import {classes} from './styled';

const rowHeight = 40;
const headerHeight = 40;

export default function BlockTable<DataType>({data, columns, filter = '', rowClick}: ITableProps<DataType>) {
  const [sortBy, setSort] = useState<string>('customer');
  const [sortDirection, setSortDirection] = useState<'ASC' | 'DESC'>(SortDirection.ASC);
  const [dataTable, setTableData] = useState(data);

  const sort = (key: string = 'plu', direction: ISortDirection = 'asc') => {
    const newVDirection = direction === 'asc' ? 'DESC' : 'ASC';
    const newDirection = direction === 'asc' ? 'desc' : 'asc';
    const newData = _.orderBy(dataTable, [key], [newDirection]);
    setSortDirection(newVDirection);
    setTableData(newData);
    setSort(key);
  };

  const prevAmount = usePrevious({filter});
  useEffect(() => {
    if (prevAmount?.filter !== filter) {
      setTableData(filterTableData(data, filter));
    }
  }, [filter]);
  const theme = useTheme();

  return (
    <AutoSizer style={{outline: 'none'}}>
      {({height, width}) => (
        <Table
          height={height}
          gridStyle={{
            direction: 'inherit',
          }}
          onRowClick={({index, rowData}) => rowClick(index, rowData)}
          className={clsx(classes.table)}
          headerHeight={headerHeight!}
          width={width}
          rowHeight={rowHeight!}
          rowCount={dataTable.length}
          sortBy={sortBy}
          sortDirection={sortDirection}
          rowGetter={({index}) => dataTable[index]}
        >
          {columns.map(item => (
            <Column
              key={item.label + item.dataKey}
              style={{
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                margin: 0,
              }}
              {...item}
              minWidth={100}
              headerStyle={{width: '100%'}}
              headerRenderer={({dataKey, columnData, label}) =>
                BlockTableHeader({
                  dataKey,
                  columnData,
                  sort,
                  sortDirection,
                  label,
                  sortBy,
                  numeric: item.numeric,
                })
              }
              cellRenderer={({cellData, columnIndex, columnData}) =>
                BlockTableCell({cellData, columnIndex, columnData, rowHeight, filter, theme})
              }
            />
          ))}
        </Table>
      )}
    </AutoSizer>
    // </div>
  );
}
