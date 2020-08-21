import React from 'react';
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
import StatusLine from '../StatusLine';
import Tooltip from '../Tooltip';
import {StyledPaper, StyledTableRow, InnerTable, StyledKeyboardArrowUpIcon, StyledTableRowSeparator} from './styled';
import {makeStyles} from '@material-ui/core/styles';
import {v4 as uuidv4} from 'uuid';

function createData(
  project: string,
  fc: string,
  ui: string,
  tm: string,
  plu: string,
  pto: string,
  plan: string,
  prediction: string,
  created: string,
  status: string,
  statusText: string
) {
  return {
    project,
    fc,
    ui,
    tm,
    plu,
    pto,
    plan,
    prediction,
    created,
    status,
    statusText,
    history: [
      {
        process: 'Подготовка требований к продукту',
        task: 'Заполнить требования о качестве',
        responsible: 'Мария Ляпун',
        start: '2020-03-21',
        plan: '2020-03-22',
        delay: 0,
        status: 'new',
        statusText: 'Свежачок подъехал',
      },
      {
        process: 'Проведение тендера',
        task: 'Информирование о проведении торгов ',
        responsible: 'Михаил Сидоренко',
        start: '2020-04-10',
        plan: '2020-03-28',
        delay: 18,
        status: 'problem',
        statusText: 'Поставщик пропал, пытаемся найти',
      },
    ],
  };
}

const useStyles = makeStyles({
  title: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  firstCell: {
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: '#f8fef3',
  },
  IconButton: {
    border: ' 1px solid #4caf50',
  },
});

function Row(props: {row: ReturnType<typeof createData>}) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <StyledTableRow expand={Boolean(open)} onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" className={classes.IconButton}>
            {open ? <StyledKeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.project}</TableCell>
        <TableCell>{row.fc}</TableCell>
        <TableCell>{row.ui}</TableCell>
        <TableCell>{row.tm}</TableCell>
        <TableCell>{row.plu}</TableCell>
        <TableCell align="right">{row.pto}</TableCell>
        <TableCell align="right">{row.plan}</TableCell>
        <TableCell align="right">{row.prediction}</TableCell>
        <TableCell align="right">{row.plan}</TableCell>
        <TableCell align="right">{row.created}</TableCell>
        <TableCell rowSpan={2}>
          <Tooltip className="" placement="left" title="KKKAKA">
            <span>
              <StatusLine className={row.status} />
            </span>
          </Tooltip>
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell className={classes.firstCell} colSpan={11}>
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
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.process}>
                      <TableCell component="th" scope="row">
                        <Typography>{historyRow.process}</Typography>
                      </TableCell>
                      <TableCell>{historyRow.task}</TableCell>
                      <TableCell>{historyRow.responsible}</TableCell>
                      <TableCell align="right">{historyRow.start}</TableCell>
                      <TableCell align="right">{historyRow.plan}</TableCell>
                      <TableCell align="right">{historyRow.delay}</TableCell>
                      <TableCell>{historyRow.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </InnerTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <StyledTableRowSeparator />
    </React.Fragment>
  );
}

const rows = [
  createData(
    'Мельницы',
    'G5',
    'Специи, приправы, мар.',
    'Маркет Перекресток',
    '2',
    '1,53',
    '22 cен 2020',
    '18 фев 2020',
    'Шевченко Д.',
    'new',
    'Новое'
  ),
  createData(
    'Волжанка — СЦС',
    'S3',
    'Сыры мягкие',
    'Маркет Перекресток',
    '4',
    '1,4',
    '22 авг 2020',
    '22 мар 2020',
    'Ляпун М.',
    'problem',
    'Поставщик пропал, пытаемся найти'
  ),
];

export const ProjectTable = () => {
  return (
    <TableContainer component={StyledPaper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Проект</TableCell>
            <TableCell>ФК</TableCell>
            <TableCell>УИ&nbsp;4</TableCell>
            <TableCell>ТМ</TableCell>
            <TableCell>PLU, ШТ.</TableCell>
            <TableCell>РТО, млн мес.</TableCell>
            <TableCell align="right">ПЛАН СТАРТА ПРОДАЖ</TableCell>
            <TableCell align="right">ПРОГНОЗ СТАРТА ПРОДАЖ</TableCell>
            <TableCell align="right">Инициатор</TableCell>
            <TableCell align="right" colSpan={2}>
              Создан
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="ProductTableBody">
          {rows.map(row => (
            <Row key={uuidv4()} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
