import styled from 'styled-components';
import {MenuItem as MuiMenuItem, MenuList as MuiMenuList, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

import Logo from '../../../../assets/logo.svg';

type IContainer = {
  expand: Boolean;
};
export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 24px;
`;

export const NavLogo = styled.div`
  background: url(${Logo}) no-repeat left;
  background-size: auto;
  height: 72px;
  width: auto;
`;
type ILogoWrapper = {
  expand: Boolean;
};

export const LogoWrapper = styled.div<ILogoWrapper>`
  width: ${({expand}) => (expand ? '170px' : '32px')};
  width: 32px;
  margin-left: 33px;
`;
export const NavList = styled.div`
  margin-top: 100px;
  width: 100%;
`;
export const MenuItem = styled(MuiMenuItem)`
  padding-left: 36px;
  margin-bottom: 22px;
  width: 100%;
`;

export const MenuLabel = styled(Typography)`
  margin: 0 5px;
`;

export const MenuList = styled(MuiMenuList)`
  :focus {
    outline: none;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: flex-end;
  &:focus {
    outline: 0;
  }
`;
