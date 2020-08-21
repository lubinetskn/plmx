import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    tasks: {},
    isLoading: true,
    error: null,
  },
  reducers: {
    getProductsStart(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action) {
      state.products = action.payload;
    },
    getProductsError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const {getProductsStart, getProductsSuccess, getProductsError} = productsSlice.actions;

export default productsSlice.reducer;

export const getProductsRequest = (params?: any) => ({
  type: 'products/getProductsStart',
  payload: {params},
});
