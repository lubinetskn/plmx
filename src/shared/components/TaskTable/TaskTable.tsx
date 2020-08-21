import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from '@material-ui/core/styles';

import {StatusMap} from '../../utils/mappers';
import {ModalProduct} from '../Modal/ModalProduct';
import StatusLine from '../StatusLine';
import Tooltip from '../Tooltip';
import {StyledPaper} from './styled';

interface InnerTableRow {
  [key: string]: any;
  status: 'TASK_NEW' | 'TASK_DONE' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_CANCEL';
}

const useStyles = makeStyles({
  separatorRow: {
    height: 8,
    backgroundColor: 'transparent',
  },
  pointer: {
    cursor: 'pointer',
  },
});

function Row(props: {row: InnerTableRow; onClick: any}) {
  const {row, onClick} = props;
  const classes = useStyles();
  if (!row || row.length === 0) {
    return <p>Задач не найдено</p>;
  }

  return (
    <React.Fragment>
      <TableRow onClick={onClick}>
        <TableCell>{row.task.lifecycle_process.name}</TableCell>
        <TableCell>{row.task.name}</TableCell>
        <TableCell>{row.product.fin_code.name}</TableCell>
        <TableCell>{row.product.ui4.name}</TableCell>
        <TableCell>{row.product.name}</TableCell>
        <TableCell>{row.product.trade_mark.name}</TableCell>
        <TableCell>
          {row.responsible.first_name} {row.responsible.last_name}
        </TableCell>
        <TableCell align="right">{row.start_date}</TableCell>
        <TableCell align="right">{row.planned_completion_date}</TableCell>
        <TableCell align="right">{row.delay_in_days}</TableCell>
        <TableCell>
          <Tooltip placement="left" title={StatusMap[row.status]}>
            <span>
              <StatusLine className={row.status} />
            </span>
          </Tooltip>
        </TableCell>
      </TableRow>
      <TableRow className={classes.separatorRow} />
    </React.Fragment>
  );
}

interface IDataModalR {
  task_id: number;
}

export const TaskTable = ({tasks, filter, changeOrder}: any) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<IDataModalR>({
    task_id: -1,
  });

  useEffect(() => {
    localStorage.setItem('taskOrder', '');
  }, []);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  if (!tasks || tasks.length === 0) {
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
          <Skeleton animation="pulse" variant="rect" height={50} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={50} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={50} />
        </Box>

        <Box marginBottom="8px">
          <Skeleton animation="pulse" variant="rect" height={50} />
        </Box>
      </>
    );
  }

  return (
    <>
      <TableContainer component={StyledPaper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>ПРОЦЕСС</TableCell>
              <TableCell>ЗАДАЧА</TableCell>
              <TableCell>ФК</TableCell>
              <TableCell>УИ&nbsp;4</TableCell>
              <TableCell>ТОВАР</TableCell>
              <TableCell>ТМ</TableCell>
              <TableCell onClick={() => changeOrder('responsible')}>ОТВЕТСТВЕННЫЙ</TableCell>
              <TableCell className={classes.pointer} align="right" onClick={() => changeOrder('start_date')}>
                ДАТА СТАРТА ЗАДАЧИ
              </TableCell>
              <TableCell
                className={classes.pointer}
                align="right"
                onClick={() => changeOrder('planned_completion_date')}
              >
                ПЛАНОВАЯ ДАТА ЗАВЕРШЕНИЯ ЗАДАЧИ
              </TableCell>
              <TableCell align="right" colSpan={2}>
                ДНЕЙ ПРОСРОЧКИ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="ProductTableBody">
            {tasks.map((row: any) => (
              <Row
                key={uuidv4()}
                row={row}
                onClick={() => {
                  setModalData({
                    task_id: row.id,
                  });
                  setModalOpen(true);
                }}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalProduct data={modalData} open={modalOpen} onClose={handleModalClose} />
    </>
  );
};
