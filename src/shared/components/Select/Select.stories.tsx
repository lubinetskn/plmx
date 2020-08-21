/* eslint-disable */
import React from 'react';
import {Select} from './Select';
import {StatusSelect} from './StatusSelect';
import {ResponsibleSelect} from './ResponsibleSelect';
import Box from '@material-ui/core/Box';

export default {
  title: 'Select',
  component: Select,
};

const options = [{value: 'chocolate', label: 'Chocolate'}];
const statuses = [
  {value: 'TASK_PROBLEM', label: 'Проблема'},
  {value: 'TASK_IN_WORK', label: 'В работе'},
  {value: 'TASK_DONE', label: 'Завершено'},
  {value: 'TASK_NEW', label: 'Новая'},
  {value: 'TASK_CANCEL', label: 'Отмена'},
];
const responsible = [
  {
    label: 'Олег Бабунько',
    value: 'eaa8fb2d-a300-4638-9b48-92dcf14e9932',
  },
  {
    label: 'Кузнецова Анна',
    value: 'a48f84b0-2614-4912-827e-7792ce42b990',
  },
  {
    label: 'Юхневич Алина',
    value: '4a0f9b1a-eb35-4cf5-b1ca-7024da407bf6',
  },
  {
    label: 'Елена Державина',
    value: '29f54747-ea56-42d4-9eea-79b9e86e3af1',
  },
];

export const Example = () => <Select options={options} />;
export const Status = () => (
  <Box width="360px">
    <StatusSelect options={statuses} placeholder="Статусы" />
  </Box>
);
export const Responsible = () => (
  <Box width="360px">
    <ResponsibleSelect options={responsible} placeholder="Ответственные" />
  </Box>
);
