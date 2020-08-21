import styled from 'styled-components';
import {MenuItem as MuiMenuItem, Typography} from '@material-ui/core';
import Logo from '../../../../../../assets/logo.svg';

type IContainer = {
  expand: Boolean;
};
export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #fff;
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
  width: ${({expand}) => (expand ? '185px' : '32px')};
  padding-top: 27px;
  padding-left: 35px;
`;
export const NavList = styled.div`
  margin-top: 86px;
  width: 100%;
`;
export const MenuItem = styled(MuiMenuItem)`
  margin: 150px 0;
`;

export const MenuLabel = styled(Typography)`
  margin: 0 5px;
`;

export const SuperLine = styled.div<{expand?: Boolean}>`
  height: 24px;
  margin: 16px 33px;
  border-radius: 12px;
  text-align: right;
  background-color: #4caf50;
  transition: width 0.2s;
  svg {
    fill: #fff;
    transform: ${props => (props.expand ? 'rotate(0)' : 'rotate(180deg)')};
  }
`;
