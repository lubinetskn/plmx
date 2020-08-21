import React, {useState} from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StatusLine from '../StatusLine';
import Tooltip from '../Tooltip';
import {ModalProduct} from '../Modal/ModalProduct';

import {StyledPaper, StyledTableRow, InnerTable} from './styled';
import {makeStyles} from '@material-ui/core/styles';
import {StatusMap, ProductMap, PLMX_DEPARTMENTS} from '../../utils/mappers';
import {Product} from '../../types/api-types';
import {isEmpty} from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {useSelector} from 'react-redux';

interface InnerTableRow {
  [key: string]: any;
  status: 'TASK_NEW' | 'TASK_DONE' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_CANCEL';
}

const useStyles = makeStyles({
  title: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  SeparatorRow: {
    height: 8,
    backgroundColor: 'transparent',
  },
  firstCell: {
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: '#f8fef3',
  },
  IconButton: {
    border: ' 1px solid #4caf50',
  },
  KeyboardArrowUpIcon: {
    translate: 'rotate(90deg)',
  },
  attention: {
    color: 'red',
  },
});

function Row(props: {row: Product; onTableRowClick: (task_id: number) => void}) {
  const {row, onTableRowClick} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useSelector((state: any) => state.tasks.tasks.filter((item: any) => item.product.id === row.id));

  if (isEmpty(row)) {
    return null;
  }

  return (
    <React.Fragment>
      <StyledTableRow open={open} onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" className={classes.IconButton}>
            {open ? <KeyboardArrowUpIcon className={classes.KeyboardArrowUpIcon} /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.project?.name}</TableCell>
        <TableCell>
          {row.problem_tasks && row.problem_tasks.length > 0
            ? row?.problem_tasks?.map(
                (
                  item: {
                    [key: string]: any;
                    department:
                      | 'DEVELOPMENT_DEPARTMENT'
                      | 'QUALITY_CONTROL_DEPARTMENT'
                      | 'MARKETING_DEPARTMENT'
                      | 'CATEGORY_DEPARTMENT';
                  },
                  index: number
                ) => (
                  <span key={uuidv4()} className={classes.attention}>
                    {index + 1}. {item.task.name}. ({PLMX_DEPARTMENTS[item.department]})<br />
                  </span>
                )
              )
            : row.active_processes?.map((item: any) => (
                <span key={uuidv4()}>
                  {item[0]}
                  <br />
                </span>
              ))}
        </TableCell>
        <TableCell>{row.fin_code?.name}</TableCell>
        <TableCell>{row.ui4?.name}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.trade_mark?.name}</TableCell>
        <TableCell>{row.supplier?.name}</TableCell>
        <TableCell align="right">{row.purchase_price}</TableCell>
        <TableCell align="right">{row.delay_in_days}</TableCell>
        <TableCell align="right">{row.sell_start_date}</TableCell>
        <TableCell align="right">{row.sell_start_date}</TableCell>
        <TableCell rowSpan={2}>
          <Tooltip placement="left" title={ProductMap[row.status]}>
            <span>
              <StatusLine className={row.status} />
            </span>
          </Tooltip>
        </TableCell>
      </StyledTableRow>

      <TableRow>
        {history?.length > 0 && (
          <TableCell className={classes.firstCell} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <InnerTable size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography className={classes.title}>ПРОЦЕСС</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.title}>ЗАДАЧА</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.title}>ОТВЕТСТВЕННЫЙ</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography className={classes.title}>ДАТА НАЧАЛА</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography className={classes.title}>ПЛАНОВАЯ ДАТА ВЫПОЛЕНИЯ</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography className={classes.title}>ДНЕЙ ПРОСРОЧКИ</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.title}>СТАТУС</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {history.map((historyRow: InnerTableRow) => {
                      const tooltipStatus = `Статус: ${StatusMap[historyRow.status]}`;
                      const tooltipComment = historyRow?.comments[historyRow?.comments?.length - 1]?.comment
                        ? `Комментарий: ${historyRow?.comments[historyRow?.comments?.length - 1]?.comment}`
                        : '';

                      const tooltipText = `${tooltipStatus} 
                           ${tooltipComment}`;
                      return (
                        <Tooltip key={uuidv4()} placement="bottom" title={tooltipText}>
                          <TableRow onClick={() => onTableRowClick(historyRow?.id)}>
                            <TableCell component="th" scope="row">
                              <Typography>{historyRow.task.lifecycle_process?.name}</Typography>
                            </TableCell>
                            <TableCell>{historyRow?.task?.name}</TableCell>
                            <TableCell>
                              {historyRow.responsible?.first_name} {historyRow.responsible?.last_name}
                            </TableCell>
                            <TableCell align="right">{historyRow.start_date}</TableCell>
                            <TableCell align="right">{historyRow.planned_completion_date}</TableCell>
                            <TableCell align="right">{historyRow.delay_in_days}</TableCell>
                            <TableCell>{StatusMap[historyRow.status]}</TableCell>
                          </TableRow>
                        </Tooltip>
                      );
                    })}
                  </TableBody>
                </InnerTable>
              </Box>
            </Collapse>
          </TableCell>
        )}
      </TableRow>
      <TableRow className={classes.SeparatorRow}></TableRow>
    </React.Fragment>
  );
}

export const ProductTable = ({products}: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    task_id: -1,
  });
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const onTableRowClick = (task_id: number) => {
    setModalData({
      task_id,
    });

    setModalOpen(true);
  };
  if (!products || products.length === 0) {
    return (
      <>
        <Box display="flex" justifyContent="space-between" marginBottom="16px">
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
          <Skeleton animation="wave" variant="text" width={100} height={40} />
        </Box>
        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={61} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={61} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={61} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={61} />
        </Box>
      </>
    );
  }

  return (
    <TableContainer component={StyledPaper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ПРОЕКТ</TableCell>
            <TableCell>ПРОЦЕСС</TableCell>
            <TableCell>ФК</TableCell>
            <TableCell>УИ&nbsp;4</TableCell>
            <TableCell>товар</TableCell>
            <TableCell>ТМ</TableCell>
            <TableCell>ПОСТАВЩИК</TableCell>
            <TableCell align="right">ЦЕНА ЗАКУПКИ</TableCell>
            <TableCell align="right">дней просрочки</TableCell>
            <TableCell align="right">Прогноз старта продаж</TableCell>
            <TableCell align="right" colSpan={2}>
              ПЛАН СТАРТА ПРОДАЖ
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="ProductTableBody">
          {products.map((row: Product) => (
            <Row key={row.id + row.name} row={row} onTableRowClick={onTableRowClick} />
          ))}
        </TableBody>
      </Table>
      <ModalProduct data={modalData} open={modalOpen} onClose={() => handleModalClose()} />
    </TableContainer>
  );
};
