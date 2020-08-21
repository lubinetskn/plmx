import {all} from 'redux-saga/effects';

import tasksSagas from './tasks/sagas';
import productsSagas from './products/sagas';
import widgetSagas from './widget/sagas';

const sagas = [tasksSagas, productsSagas, widgetSagas];

export default function* root() {
  yield all(sagas.map(saga => saga()));
}
