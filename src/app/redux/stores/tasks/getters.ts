import {TasksState} from './types';
import moduleName from './constants';
import {State} from '../types';

const getTasksState = (state: State): TasksState => state[moduleName];

export const getTasks = (state: State) => {
  const taskState = getTasksState(state);
  return taskState.tasks;
};

export const getTasksByProduct = (state: State, taskId: number) => {
  const taskState = getTasksState(state);
  return taskState.tasks.filter(task => task.id === taskId);
};
