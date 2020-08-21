import {takeEvery, all, call, put} from 'redux-saga/effects';
import {
  getTasksReq,
  setTaskStatus,
  setTaskResponsible,
  sendCommentaryReq,
  getTaskCommentaryReq,
} from '../../../../client/http';
import {
  getTasksSuccess,
  getTasksError,
  updateTaskByStatus,
  updateTaskByResponsible,
  updateTaskComments,
} from './tasksSlice';
import {toast} from 'react-toastify';

function* getTasksRequest({type, payload}: any) {
  try {
    const result = yield call(getTasksReq, payload.params);
    const tasks = result.data.results;
    yield put(getTasksSuccess(tasks));
  } catch (e) {
    yield put(getTasksError(e));
  }
}

// TODO: разобраться почему шлется два запроса
function* updateTasksStatusRequest({type, payload}: any) {
  try {
    if (payload.task_id) {
      const result = yield setTaskStatus(payload.task_id, payload.status);
      const newTask = result.data;
      yield put(updateTaskByStatus(newTask));
      toast.success('Статус изменен');
    }
  } catch (e) {
    toast.error('Статус не был изменен');
    yield put(getTasksError(e));
  }
}

//TODO разобраться почему шлется два запроса
function* updateTasksResponsibleRequest({type, payload}: any) {
  try {
    if (payload.task_id) {
      const result = yield setTaskResponsible(payload.task_id, payload.responsible_id);
      const newTask = result.data;
      yield put(updateTaskByResponsible(newTask));
      toast.success('Ответственный изменен');
    }
  } catch (e) {
    toast.error('Ответственный не был изменен');
    yield put(getTasksError(e));
  }
}

function* sendCommentarySaga({type, payload}: any) {
  try {
    if (payload.task_id) {
      const result = yield sendCommentaryReq(payload.task_id, payload.commentary);
      const result2 = yield getTaskCommentaryReq(payload.task_id);
      yield put(updateTaskComments({comments: result2.data.results, task_id: payload.task_id}));
      toast.success('Комментарий отправлен');
    }
  } catch (e) {
    yield put(getTasksError(e));
  }
}

function* getTaskByFiltersRequest({type, payload}: any) {
  try {
    const result = yield getTasksReq(payload.params);
    const newTask = result.data;
    yield put(updateTaskByResponsible(newTask));
  } catch (e) {
    yield put(getTasksError(e));
  }
}

export default function* tasksSaga() {
  yield all([
    takeEvery('tasks/getTasksStart', getTasksRequest),
    takeEvery(updateTaskByStatus(null).type, updateTasksStatusRequest),
    takeEvery(updateTaskByResponsible(null).type, updateTasksResponsibleRequest),
    takeEvery('tasks/getTaskByFilters', getTaskByFiltersRequest),
    takeEvery('tasks/sendComment', sendCommentarySaga),
  ]);
}
