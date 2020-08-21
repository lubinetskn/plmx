import React, {FunctionComponent} from 'react';
import {Wrapper, Container, Content, Drawer, Footer, Version, Contact} from './styled';
import HeadNav from './components/HeadNav';
import Nav from './components/Nav';

interface OwnProps {
  Menu: any;
}

type Props = OwnProps;

const MainLayout: FunctionComponent<Props> = ({children, Menu}) => {
  const [openM, setOpenM] = React.useState(false);
  function toggleNav() {
    setOpenM(!openM);
  }

  return (
    <Wrapper>
      <Container>
        <Drawer expand={openM}>
          <Nav Menu={Menu} expand={openM} onClick={() => toggleNav()} />
        </Drawer>
        <Content>
          <HeadNav />
          {children}
        </Content>
      </Container>
      <Footer>
        <Version variant="body2">© 2020 ВЕРСИЯ: 1.0</Version>
        <Contact variant="body2">
          Требуется помощь? Нашли ошибку? Есть предложения? Напишите нам на PLMX_HELP@x5.ru
        </Contact>
      </Footer>
    </Wrapper>
  );
};

export default MainLayout;
