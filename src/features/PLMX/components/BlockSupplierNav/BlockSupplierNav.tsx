import React, {FunctionComponent} from 'react';
import {ListItemIcon, SvgIcon} from '@material-ui/core';
import {ReactComponent as BoardIcon} from '../../../../assets/icons/board.svg';
import {ReactComponent as StarIcon} from '../../../../assets/icons/star-outline.svg';
import {ReactComponent as TaskIcon} from '../../../../assets/icons/tasks.svg';
import {MenuLabel, MenuItem, MenuList, Link} from './styled';

interface IProps {
  // someprops
}

const BlockSupplierNav: FunctionComponent<IProps> = () => {
  const activeItemColor = () => {
    return undefined;
  };
  return (
    <MenuList>
      {/* <MenuItem>
        <Link to="/plmx/projects">
          <ListItemIcon>
            <SvgIcon component={BoardIcon} color={activeItemColor()} />
          </ListItemIcon>
          <MenuLabel variant="inherit">Проекты</MenuLabel>
        </Link>
      </MenuItem> */}
      <Link to="/plmx/product">
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={StarIcon} color={activeItemColor()} />
          </ListItemIcon>
          <MenuLabel variant="inherit">Товары</MenuLabel>
        </MenuItem>
      </Link>
      <Link to="/plmx/tasks">
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={TaskIcon} color={activeItemColor()} />
          </ListItemIcon>
          <MenuLabel variant="inherit">Задачи</MenuLabel>
        </MenuItem>
      </Link>
    </MenuList>
  );
};

export default BlockSupplierNav;
