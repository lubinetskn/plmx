import {UserState} from './user/types';
import {TasksState} from './tasks/types';
import {ResponsibleState} from './responsible/types';
import {ProductsState} from './products/types';
import {WidgetState} from './widget/types';

export interface State {
  user: UserState;
  tasks: TasksState;
  responsible: ResponsibleState;
  widget: WidgetState;
  products: ProductsState;
}
