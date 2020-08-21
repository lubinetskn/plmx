/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import Fetcher from './fetcher';
import {ILoginPair} from '../features/Auth/components/PageLogin/types';

const token = Cookies.get('token');
const fetcher = new Fetcher({baseURL: `${process.env.REACT_APP_API}`});

// TODO: добавить apiDictionary
export const requestUserByToken = (data: ILoginPair) =>
  fetcher.request({
    url: 'token/',
    method: 'POST',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const getProducts = (params: any) => {
  return fetcher.request({
    url: 'plm/product',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    params: params?.filter ? Object.assign(params?.filter, {ordering: params?.ordering}) : params,
  });
};

export const getUserProfile = () =>
  fetcher.request({
    url: 'user/profile',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

// ordering: 'id', size: 9000
export const getTasksReq = (params?: any): any => {
  return fetcher.request({
    url: 'plm/task',
    params: params?.filter ? Object.assign(params?.filter, {ordering: params?.ordering}) : params,
  });
};

export const getCycle = (id: number | string) => {
  return fetcher.request({
    url: `plm/product-life-cycle/${id}/`,
  });
};

export const getCyclestage = (id: string) => {
  return fetcher.request({
    url: `plm/product-life-cycle-stage/${id}/`,
  });
};

export const getCycletask = (id: string) => {
  return fetcher.request({
    url: `plm/product-life-cycle-task/${id}/`,
  });
};

export const getProduct = (id: string | number) => {
  return fetcher.request({
    url: `plm/product/${id}`,
  });
};

export const getProductTasks = (id?: string | number, params?: any) => {
  return fetcher.request({
    url: `plm/product/${id}/task`,
    params,
  });
};

export const getProjects = () => {
  return fetcher.request({
    url: 'projects',
  });
};

export const getTrademark = () => {
  return fetcher.request({
    url: 'catalog/trade-mark/',
  });
};

export const getFincode = () => {
  return fetcher.request({
    url: 'catalog/fin-code/',
  });
};

export const setTaskStatus = (id: any, status: any) => {
  return fetcher.request({
    method: 'PATCH',
    url: `plm/task/${id}/`,
    data: JSON.stringify({status}),
  });
};

export const getWidgetsData = () =>
  fetcher.request({
    url: `plm/product/widgets/`,
  });

export const getTaskWidgetsData = () =>
  fetcher.request({
    url: `plm/task/widgets/`,
  });

export const getCommentaryRuq = (id: any) =>
  fetcher.request({
    url: `plm/task-commentary/`,
  });

export const getTaskCommentaryReq = (id: any) => {
  return fetcher.request({
    url: `plm/task/${id}/comments/`,
  });
};

export const getProductLifeCycleProcess = () => {
  return fetcher.request({
    url: `plm/product-life-cycle-process/`,
  });
};

export const sendCommentaryReq = (id: any, comment: any) => {
  return fetcher.request({
    method: 'POST',
    url: `plm/task-commentary/`,
    data: JSON.stringify({comment, task: id}),
  });
};

export const setTaskResponsible = (id: any, responsible_id: any) => {
  return fetcher.request({
    method: 'PATCH',
    url: `plm/task/${id}/`,
    data: JSON.stringify({responsible_id}),
  });
};

export const getUser = () => {
  return fetcher.request({
    url: `user/user/`,
  });
};
