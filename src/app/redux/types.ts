import {ReducersMapObject} from 'redux';
import {UserState} from './stores/user/userSlice';

export type IState = {
  user: UserState;
};
export type IReducers = ReducersMapObject<IState>;
export type ILoadedState = Partial<IState>;
export type ILoadedReducers = Partial<IReducers>;
