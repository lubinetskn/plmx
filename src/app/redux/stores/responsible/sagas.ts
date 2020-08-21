import {takeLatest, put} from 'redux-saga/effects';
import {getUser} from '../../../../client/http';
import {getResponsibleStart, getResponsibleSuccess, getResponsibleError} from './responsibleSlice';

function* getResponsibleRequest() {
  try {
    const result = yield getUser();
    const ResponsibleList = result.data.results;
    const arr = ResponsibleList.filter((item: any) => item.last_name).map((item: any) => {
      return {
        value: item.id,
        label: `${item.first_name} ${item.last_name}`,
      };
    });

    yield put(getResponsibleSuccess(arr));
  } catch (e) {
    yield put(getResponsibleError(e));
  }
}

export default function* responsibleSaga() {
  yield takeLatest(getResponsibleStart().type, getResponsibleRequest);
}
