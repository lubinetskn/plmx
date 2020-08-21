import {createSlice} from '@reduxjs/toolkit';
import moduleName from './constants';

const tasksSlice = createSlice({
  name: moduleName,
  initialState: {
    tasks: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    getTasksStart(state) {
      state.isLoading = true;
    },
    getTasksSuccess(state, action) {
      state.tasks = action.payload;
    },
    getTasksError(state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    updateTaskComments(state: any, action) {
      let NewIndex = -1;
      state.tasks.find((item: any, index: number) => {
        if (item.id === action.payload.task_id) {
          NewIndex = index;
        }
        return null;
      });
      if (NewIndex >= 0) {
        state.tasks[NewIndex].comments = action.payload.comments;
      }
    },
    updateTaskByStatus(state: any, action) {
      state.tasks.find((item: any, index: number) => {
        if (item.id === action.payload.id) {
          state.tasks[index] = action.payload;
        }
        return null;
      });
    },
    updateTaskByResponsible(state: any, action) {
      state.tasks.find((item: any, index: number) => {
        if (item.id === action.payload.id) {
          state.tasks[index] = action.payload;
        }
        return null;
      });
    },
  },
});

export const {
  getTasksStart,
  getTasksSuccess,
  getTasksError,
  updateTaskByStatus,
  updateTaskByResponsible,
  updateTaskComments,
} = tasksSlice.actions;

export default tasksSlice.reducer;

export const updateTaskByResponsibleAction = (task_id: number, responsible_id: string, params?: any) => ({
  type: 'tasks/updateTaskByResponsible',
  payload: {task_id, responsible_id, params},
});

export const updateTaskByStatusAction = (task_id: number, status: string, params?: any) => ({
  type: 'tasks/updateTaskByStatus',
  payload: {task_id, status, params},
});

export const getTaskByFiltersAction = (task_id: number, status: string, params?: any) => ({
  type: 'tasks/getTaskByFilters',
  payload: {task_id, status, params},
});

export const getTasksRequest = (params?: any) => ({
  type: 'tasks/getTasksStart',
  payload: {params},
});

export const sendCommentAction = (task_id: number, commentary: string, params?: any) => ({
  type: 'tasks/sendComment',
  payload: {task_id, commentary, params},
});
