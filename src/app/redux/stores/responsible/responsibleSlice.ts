import {createSlice} from '@reduxjs/toolkit';
import moduleName from './constants';

const responsibleSlice = createSlice({
  name: moduleName,
  initialState: {
    responsible: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    getResponsibleStart(state) {
      state.isLoading = true;
    },
    getResponsibleSuccess(state, action) {
      state.responsible = action.payload;
    },
    getResponsibleError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const {getResponsibleStart, getResponsibleSuccess, getResponsibleError} = responsibleSlice.actions;

export default responsibleSlice.reducer;

export const getResponsibleRequest = () => ({
  type: 'responsible/getResponsibleStart',
});
