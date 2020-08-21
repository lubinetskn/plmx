import {ProductsState} from './types';
// import moduleName from './constants';
import {State} from '../types';

const getProductsState = (state: State): ProductsState => state['products'];

export const getProductsSelector = (state: State) => {
  const productsState = getProductsState(state);
  return productsState.products;
};
