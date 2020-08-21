import {ProductTask} from '../../../../shared/types/api-types';

export interface TasksState {
  tasks: ProductTask[];
  isLoading: boolean;
  error: string;
}
