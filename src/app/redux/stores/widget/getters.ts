import {WidgetState} from './types';
import moduleName from './constants';
import {State} from '../types';

const getWidgetState = (state: State): WidgetState => state[moduleName];

export const getWidget = (state: State) => {
  const widgetState = getWidgetState(state);
  return widgetState.widget;
};
