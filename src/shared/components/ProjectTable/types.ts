export type ISortDirection = 'asc' | 'desc' | undefined;
export type IVirtualizedSortDirection = 'ASC' | 'DESC' | undefined;

export type ITableHeader = {
  columnData?: any;
  dataKey?: string;
  disableSort?: boolean;
  label?: any;
  sortBy?: string | undefined;
  sortDirection?: IVirtualizedSortDirection;
  numeric?: boolean;
  sort: (dataKey: string | undefined, sortDirection: ISortDirection) => void;
};

export type ITableProps<DataType> = {
  data: DataType[];
  columns: ColumnData[];
  filter: string;
  rowClick?: any;
};

export type ColumnData = {
  columnData?: object;
  dataKey: string;
  disableSort?: boolean;
  flexGrow?: number;
  flexShrink?: number;
  label: string;
  numeric?: boolean;
  maxWidth?: number;
  minWidth?: number;
  width: number;
};

export type Row = {
  index: number;
};
