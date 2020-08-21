import React, {useState, useRef} from 'react';
import {spacing} from '@material-ui/system';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Separator} from './styled';
import {ModalPLMX} from './Modal';
import {getModalStyle, transformForSelect} from '../../utils/helpers';

import {StatusSelect} from '../Select/StatusSelect';
import {ResponsibleSelect} from '../Select/ResponsibleSelect';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

import isEmpty from 'lodash/isEmpty';
import {
  updateTaskByStatusAction,
  updateTaskByResponsibleAction,
  sendCommentAction,
  getTasksRequest,
} from '../../../app/redux/stores/tasks/tasksSlice';
import {ReactComponent as CloseIcon} from '../../../assets/icons/close.svg';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {TRANSITION_STATUS, StatusMap} from '../../utils/mappers';
import {ProductTask} from '../../types/api-types';
import {format, parseISO} from 'date-fns';
import ru from 'date-fns/locale/ru';
import {v4 as uuidv4} from 'uuid';
import {orderBy} from 'lodash';
import {getUserInfo} from '../../../app/redux/stores/user/getters';
import {getProductWidgetRequest} from '../../../app/redux/stores/widget/widgetSlice';
import {getProductsRequest} from '../../../app/redux/stores/products/productsSlice';

interface IDataModal {
  id?: number;
  task_id?: number;
  commentary: string;
  responsible: string;
  start_date: string;
  delay_in_days: string;
  status: 'TASK_NEW' | 'TASK_DONE' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_CANCEL';
  task: any;
}

interface IModal {
  open: boolean;
  className?: string;
  data: any;
  responsible?: [];
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 764,
      backgroundColor: theme.palette.background.paper,
      boxShadow:
        '0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 5px -1px rgba(0, 0, 0, 0.2)',
      padding: theme.spacing(2, 4, 3),
      borderRadius: '10px',
      '&:focus': {
        outline: 'none',
      },
    },
    header: {
      fontSize: '14px',
      lineHeight: '1.71',
      color: '#343435',
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
    },
    title: {
      fontFamily: 'Montserrat',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '1.33',
      color: '#343435',
      margin: '0 0 36px',
    },
    subtitle: {
      fontFamily: 'Open Sans',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '1.71',
      color: '#14161e',
      margin: 0,
    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: 1.71,
      color: '#343435',
      margin: 0,
      wordBreak: 'break-all',
    },
    commentary: {
      borderRadius: '10px',
      border: 'solid 1px #8b8b8b',
      backgroundColor: '#ffffff',
      resize: 'none',
      width: '315px',
      height: '60px',
      marginTop: '30px',
      padding: '8px 16px',
      lineHeight: '1.33',
      fontSize: '12px',
    },
    button: {
      margin: '8px auto',
    },
    CommentList: {
      height: '220px',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    CommentBox: {
      marginBottom: '16px',
    },
    CommentAuthor: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '1.33',
      color: '#515152',
    },
    CommentDate: {
      fontSize: '12px',
      lineHeight: '1.33',
      color: '#515152',
    },
  })
);

function getOptions(status: 'TASK_NEW' | 'TASK_DONE' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_CANCEL') {
  return TRANSITION_STATUS[status];
}

function getStatus(status: 'TASK_NEW' | 'TASK_DONE' | 'TASK_IN_WORK' | 'TASK_PROBLEM' | 'TASK_CANCEL') {
  return StatusMap[status];
}

export const ModalProduct = ({open, onClose, data}: IModal) => {
  const classes = useStyles();
  const CommentsBlock = useRef<HTMLInputElement>(null);
  const {control, handleSubmit, setValue} = useForm();

  const user = useSelector(getUserInfo);
  const responsible = transformForSelect(user.subordinates);

  const task = useSelector((state: any) => state.tasks.tasks.find((item: ProductTask) => item.id === data.task_id));

  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);

  if (isEmpty(task)) {
    return null;
  }

  const onSubmit = (values: any, e: any) => {
    dispatch(sendCommentAction(task?.id, values.commentary));
    setValue('commentary', ''); // TODO: заменить очистку на reset
    if (CommentsBlock.current) {
      CommentsBlock.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <ModalPLMX open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title" className={classes.header}>
          {task.product?.name}
          <Box width="40px" height="20px" onClick={onClose}>
            <CloseIcon />
          </Box>
        </h2>
        <Separator />
        <Box display="flex" justifyContent="space-between">
          <Box width="70%" paddingRight="16px">
            <h3 className={classes.title}> {task.task?.name} </h3>

            <Box marginBottom="16px">
              <h6 className={classes.subtitle}> Процесс </h6>
              <p className={classes.text}> {task.task?.lifecycle_process?.name} </p>
            </Box>

            <Box marginBottom="16px">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6 className={classes.subtitle}> Комментарии </h6>

                <div className={classes.CommentList} ref={CommentsBlock}>
                  {orderBy(task?.comments, ['created'], ['desc']).map((item: any) => {
                    return (
                      <div className={classes.CommentBox} key={uuidv4()}>
                        <p className={classes.text}>
                          <span className={classes.CommentAuthor}>
                            {item.author?.first_name} {item.author?.last_name}
                          </span>{' '}
                          <span className={classes.CommentDate}>
                            {format(parseISO(item.created), 'dd MMMM yyyy HH:MM', {locale: ru})}
                          </span>
                        </p>
                        <p className={classes.text}> {item.comment} </p>
                      </div>
                    );
                  })}
                </div>

                <Controller
                  className={classes.commentary}
                  as={TextareaAutosize}
                  control={control}
                  name="commentary"
                  defaultValue=""
                  rows={5}
                  disabled={task.status === 'TASK_DONE' || task.status === 'TASK_CANCEL'}
                  placeholder="Добавить комменатрий, не более 140 символов"
                  maxLength={140}
                />

                <Button className={classes.button} variant="contained" color="primary" size="small" type="submit">
                  Оставить комментарий
                </Button>
              </form>
            </Box>
          </Box>
          <Box width="30%">
            <Box width="160px">
              <StatusSelect
                placeholder="Статусы"
                defaultValue={{value: task.status, label: getStatus(task.status)}}
                options={getOptions(task.status)}
                isDisabled={
                  user.plmx_role !== 'PLMX_ADMIN' &&
                  (task.status === 'TASK_DONE' || task.status === 'TASK_CANCEL' || task.responsible.id !== user.id)
                }
                onChange={e => {
                  dispatch(updateTaskByStatusAction(task.id, e.value));
                  dispatch(getProductsRequest());
                  dispatch(getProductWidgetRequest());
                  // TODO: убрать как на беке поправят
                  setTimeout(dispatch(getTasksRequest()), 1000);
                }}
              />
            </Box>

            <p>Не являясь ответственным за задачу, вы не можете изменить ее статус</p>

            <Box marginBottom="8px">
              <h6 className={classes.subtitle}>Ответственный</h6>
            </Box>

            <ResponsibleSelect
              placeholder="Ответственные"
              options={responsible}
              isDisabled={task.status === 'TASK_DONE' || task.status === 'TASK_CANCEL'}
              defaultValue={{
                value: task.responsible.id,
                label: `${task.responsible.first_name} ${task.responsible.last_name}`,
              }}
              onChange={e => {
                dispatch(updateTaskByResponsibleAction(task.id, e.value));
              }}
            />

            <Box margin="24px 0 16px">
              <h6 className={classes.subtitle}> Дата начала </h6>
              <p className={classes.text}>{task.start_date} </p>
            </Box>
            <Box marginBottom="16px">
              <h6 className={classes.subtitle}> Дней просрочки </h6>
              <p className={classes.text}>{task.delay_in_days} </p>
            </Box>
            <Box marginBottom="16px">
              <h6 className={classes.subtitle}> Плановая дата выполнения </h6>
              <p className={classes.text}>{task.planned_completion_date} </p>
            </Box>

            <Separator />

            <Box marginBottom="16px">
              <h6 className={classes.subtitle}> Создано </h6>
              <p className={classes.text}>{format(parseISO(task.created), 'dd MMMM yyyy HH:MM', {locale: ru})}</p>
            </Box>

            <Box marginBottom="16px">
              <h6 className={classes.subtitle}>Обновлено </h6>
              <p className={classes.text}>{format(parseISO(task.updated), 'dd MMMM yyyy HH:MM', {locale: ru})}</p>
            </Box>
          </Box>
        </Box>
      </div>
    </ModalPLMX>
  );
};
