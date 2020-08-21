import React from 'react';
import {ModalPLMX} from './Modal';
import Box from '@material-ui/core/Box';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import Select from '../Select';
import {ApplyButton, DownloadButton} from './styled';
import {getModalStyle} from '../../utils/helpers';

interface IModal {
  [key: string]: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 570,
      backgroundColor: theme.palette.background.paper,
      boxShadow:
        '0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 3px 5px -1px rgba(0, 0, 0, 0.2)',
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export const ModalFilter = ({open, onClose}: IModal) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <ModalPLMX open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Другие фильтры</h2>
        <hr />
        <h3 id="simple-modal-title">Товар</h3>
        <Select
          placeholder="Наименование товара"
          options={[
            {value: 'chocolate', label: 'Шоколадка'},
            {value: 'aperol', label: 'Апероль'},
            {value: 'pepsi', label: 'Пепсик'},
          ]}
        />
        <Select
          placeholder="Наименование проекта"
          options={[
            {value: 'x', label: 'X'},
            {value: 'y', label: 'Y'},
            {value: 'z', label: 'Z'},
          ]}
        />
        <Select
          placeholder="УИ 4"
          options={[
            {value: 'УИИИИ', label: 'УИИИИ'},
            {value: 'УИИИИИИИИ', label: 'УИИИИИИИИ'},
          ]}
        />
        <hr />
        <h3 id="simple-modal-title">Задачи</h3>
        <Select
          placeholder="Текущий процесс"
          options={[
            {value: 'start', label: 'Начал'},
            {value: 'finish', label: 'Кончил'},
          ]}
        />
        <Select
          placeholder="Ответственные"
          options={[
            {value: 'jora', label: 'Жорик'},
            {value: 'kostya', label: 'Костян'},
            {value: 'trump', label: 'Трамп'},
          ]}
        />
        <Box display="flex" justifyContent="flex-end">
          <Box mr={1}>
            <DownloadButton onClick={onClose} variant="outlined" size="large">
              Отменить
            </DownloadButton>
          </Box>
          <Box>
            <ApplyButton onClick={onClose} variant="contained" color="primary" size="large" type="submit">
              Применить
            </ApplyButton>
          </Box>
        </Box>
      </div>
    </ModalPLMX>
  );
};
