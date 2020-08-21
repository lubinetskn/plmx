import React, {FunctionComponent, useState} from 'react';
import {spacing} from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core';
import {
  Container,
  Title,
  ToolsRow,
  Filter,
  TableRow,
  DownloadButton,
  StyledToggleButton,
  StyledToggleButtonGroup,
  StyledPagination,
  StyledClearAll,
} from './styled';
import {ProductsData} from './types';
import WidgetList from '../WidgetList';

import {ModalFilter} from '../../../../shared/components/Modal/ModaFilter';
import ProjectTable from '../../../../shared/components/ProjectTable';

import {DropdownFilter} from '../../../../shared/components/Select/DropdownFilter';
import {ReactComponent as DownloadIcon} from '../../../../assets/icons/download.svg';

type Props = {};

interface IRootState {
  plmx: {products: ProductsData};
}

const PageProjects: FunctionComponent<Props> = () => {
  const [filter, setFilter] = useState([]); // NOTE: фильтры для таблицы
  const [modalOpen, setModalOpen] = React.useState(false); // NOTE: открытие модалки

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleFilter = (_event: any, newFilter: React.SetStateAction<never[]>) => {
    setFilter(newFilter);
  };

  return (
    <Container>
      <WidgetList />
      <Title>
        <h1>Проекты</h1>
        {/* <DownloadButton startIcon={<DownloadIcon />} variant="outlined" size="large">
          Скачать
        </DownloadButton> */}
      </Title>
      <Divider />
      <ModalFilter open={modalOpen} onClose={handleModalClose} />
      <ToolsRow>
        <Filter>
          <StyledToggleButtonGroup value={filter} onChange={handleFilter} aria-label="filtering">
            <StyledToggleButton value="status" aria-label="status">
              Статус задач
            </StyledToggleButton>
            <StyledToggleButton value="fincode" aria-label="fincode">
              Процесс
            </StyledToggleButton>
            <StyledToggleButton value="marka" aria-label="marka">
              Задача
            </StyledToggleButton>
            <StyledToggleButton value="due" aria-label="due">
              Ответственный
            </StyledToggleButton>
          </StyledToggleButtonGroup>
          {filter.length > 0 && <StyledClearAll>Очистить Все</StyledClearAll>}
        </Filter>
        {/* <Box display="flex" alignItems="center">
          <span>Всего товаров: 2 343</span>
          <StyledPagination count={10} />
        </Box> */}
      </ToolsRow>
      <TableRow>
        <ProjectTable />
      </TableRow>
    </Container>
  );
};

export default PageProjects;
