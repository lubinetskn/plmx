import {createSlice} from '@reduxjs/toolkit';
import moduleName from './constants';

const widgetSlice = createSlice({
  name: moduleName,
  initialState: {
    widget: {},
    isLoading: true,
    error: null,
  },
  reducers: {
    getWidgetStart(state) {
      state.isLoading = true;
    },
    getWidgetSuccess(state, action) {
      state.widget = action.payload;
    },
    getWidgetError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const {getWidgetStart, getWidgetSuccess, getWidgetError} = widgetSlice.actions;

export default widgetSlice.reducer;

export const getTaskWidgetRequest = () => ({
  type: 'widget/getTaskWidgetStartuem',
});

export const getProductWidgetRequest = () => ({
  type: 'widget/getProductsWidgetStartuem',
});
