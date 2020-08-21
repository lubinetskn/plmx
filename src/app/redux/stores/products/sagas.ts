import {takeEvery, all, put} from 'redux-saga/effects';
import {getProducts} from '../../../../client/http';
import {getProductsStart, getProductsSuccess, getProductsError} from './productsSlice';

function* getProductsRequest({type, payload}: any) {
  try {
    const result = yield getProducts(payload.params);
    const Products = result.data.results;
    yield put(getProductsSuccess(Products));
  } catch (e) {
    yield put(getProductsError(e));
  }
}

export default function* productsSaga() {
  yield all([takeEvery(getProductsStart().type, getProductsRequest)]);
}
