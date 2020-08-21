import React, {FunctionComponent} from 'react';

import {Container, NavList, LogoWrapper, SuperLine} from './styled';
import BlockLogoWide from '../../../../BlockLogoWide';
import {ReactComponent as LeftArrowIcon} from '../../../../../../assets/icons/Drop/left.svg';

interface OwnProps {
  Menu: any;
  expand: Boolean;
  onClick: () => void;
}

type Props = OwnProps;

const Nav: FunctionComponent<Props> = ({Menu, expand, onClick}) => {
  return (
    <Container expand={expand}>
      <LogoWrapper expand={true}>
        <BlockLogoWide />
      </LogoWrapper>
      <SuperLine expand={expand} onClick={onClick}>
        <LeftArrowIcon />
      </SuperLine>
      <NavList>
        <Menu />
      </NavList>
    </Container>
  );
};

export default Nav;
