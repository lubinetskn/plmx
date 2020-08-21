import React, {FunctionComponent, useState, useEffect} from 'react';
import {spacing} from '@material-ui/system';
import {Divider} from '@material-ui/core';
import {Container, Title, ToolsRow, Filter, TableRow, Hint} from './styled';
import {ReactComponent as DownloadIcon} from '../../../../assets/icons/download.svg';

import {useDispatch, useSelector} from 'react-redux';

import WidgetList from '../WidgetList/WidgetTaskList';

import {ModalFilter} from '../../../../shared/components/Modal/ModaFilter';
import TaskTable from '../../../../shared/components/TaskTable';

import {getTasks} from '../../../../app/redux/stores/tasks/getters';
import {DropdownFilter} from '../../../../shared/components/Select/DropdownFilter';
import {getTasksRequest} from '../../../../app/redux/stores/tasks/tasksSlice';
import {userLoginRequest} from '../../../../app/redux/stores/user/userSlice';
import {ProductTask} from '../../../../shared/types/api-types';
import {transpile, transpileWithFio} from '../../../../shared/utils/helpers';
import {getTaskWidgetRequest} from '../../../../app/redux/stores/widget/widgetSlice';
import {getWidget} from '../../../../app/redux/stores/widget/getters';
import {StatusMap} from '../../../../shared/utils/mappers';

type Props = {};

const PageTasks: FunctionComponent<Props> = () => {
  const st: any = {},
    rp: any = {},
    pr: any = {},
    ts: any = {};
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  // const responsible = useSelector(getResponsible);
  const widgetInfo = useSelector(getWidget);

  const [taskCopy, setTaskCopy] = useState([]);
  const [status, setStatus] = useState(st);
  const [responsible, setResponsible] = useState(rp);
  const [processFilter, setProcessFilter] = useState(pr);
  const [tasksFilter, setTasksFilter] = useState(ts);
  const [filter, setFilter] = useState({
    status: '',
    responsible: '',
  }); // NOTE: фильтры
  const [ordering, setOrdering] = useState('id');

  useEffect(() => {
    dispatch(getTasksRequest());

    dispatch(getTaskWidgetRequest());

    dispatch(userLoginRequest());
  }, []);

  useEffect(() => {
    if (taskCopy.length === 0) {
      // @ts-ignore
      setTaskCopy(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    taskCopy.map((item: ProductTask) => {
      if (item?.task?.id) {
        ts[item.task.id] = item.task.name;
      }
      if (item?.task?.lifecycle_process?.id) {
        pr[item.task.lifecycle_process.id] = item.task.lifecycle_process.name;
      }
      if (item?.status) {
        st[item.status] = StatusMap[item.status];
      }
      if (item?.responsible?.id) {
        rp[item.responsible.id] = {
          first_name: item.responsible.first_name,
          last_name: item.responsible.last_name,
        };
      }

      return null;
    });
    setResponsible(rp);
    setStatus(st);
    setProcessFilter(pr);
    setTasksFilter(ts);
  }, [taskCopy]);

  const [modalOpen, setModalOpen] = React.useState(false); // NOTE: открытие модалки

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const changeOrder = (ord: string) => {
    setOrdering(ord);
    dispatch(getTasksRequest({filter, ordering}));
  };

  const handleFilter = (selectValues: {value: string; label: string}[], label: string) => {
    if (localStorage.getItem('taskOrder')) {
      // @ts-ignore
      setOrdering(localStorage.getItem('taskOrder'));
    }
    const valueArr = selectValues && selectValues.map((item: any) => item.value).join(',');
    setFilter(Object.assign(filter, {[label]: valueArr}));
    dispatch(getTasksRequest({filter, ordering}));
  };

  return (
    <Container>
      <WidgetList widgetInfo={widgetInfo} />
      <Title>
        <h1>Задачи</h1>
        {/* <DownloadButton startIcon={<DownloadIcon />} variant="outlined" size="large">
          Скачать
        </DownloadButton> */}
      </Title>
      <Divider />
      <ModalFilter open={modalOpen} onClose={handleModalClose} />
      <ToolsRow>
        <Filter>
          <DropdownFilter
            placeholder="Процесс"
            options={transpile(processFilter)}
            onChange={e => {
              handleFilter(e, 'process');
            }}
          />
          <DropdownFilter
            placeholder="Задачи"
            options={transpile(tasksFilter)}
            onChange={e => {
              handleFilter(e, 'task');
            }}
          />
          <DropdownFilter
            placeholder="Ответственный"
            options={transpileWithFio(responsible)}
            onChange={e => {
              handleFilter(e, 'responsible');
            }}
          />
          <DropdownFilter
            placeholder="Статус"
            options={transpile(status)}
            onChange={e => {
              if (e) {
                if (localStorage.getItem('taskOrder')) {
                  // @ts-ignore
                  setOrdering(localStorage.getItem('taskOrder'));
                }
                const valueArr = e.map((item: any) => item.value).join(',');
                setFilter(Object.assign(filter, {status: valueArr}));
                dispatch(getTasksRequest({filter, ordering}));
              }
            }}
          />
          {tasks.length > 0 && <Hint>Количество записей: {tasks.length}</Hint>}
        </Filter>
      </ToolsRow>
      <TableRow>
        <TaskTable tasks={tasks} filter={filter} changeOrder={changeOrder} />
      </TableRow>
    </Container>
  );
};

export default PageTasks;
