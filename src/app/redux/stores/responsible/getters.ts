import {ResponsibleState} from './types';
import moduleName from './constants';
import {State} from '../types';

const getResponsibleState = (state: State): ResponsibleState => state[moduleName];

export const getResponsible = (state: State) => {
  const responsibleState = getResponsibleState(state);
  return responsibleState.responsible;
};
