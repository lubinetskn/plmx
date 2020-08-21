import {takeLatest, put, all} from 'redux-saga/effects';
import {getWidgetsData, getTaskWidgetsData} from '../../../../client/http';
import {getWidgetSuccess, getWidgetError} from './widgetSlice';

function* getProductsWidgetRequest() {
  try {
    const result = yield getWidgetsData();
    const WidgetList = result.data;
    yield put(getWidgetSuccess(WidgetList));
  } catch (e) {
    yield put(getWidgetError(e));
  }
}

function* getTaskWidgetRequest() {
  try {
    const result = yield getTaskWidgetsData();
    const WidgetList = result.data;
    yield put(getWidgetSuccess(WidgetList));
  } catch (e) {
    yield put(getWidgetError(e));
  }
}

export default function* widgetSaga() {
  yield all([
    takeLatest('widget/getTaskWidgetStartuem', getTaskWidgetRequest),
    takeLatest('widget/getProductsWidgetStartuem', getProductsWidgetRequest),
  ]);
}
