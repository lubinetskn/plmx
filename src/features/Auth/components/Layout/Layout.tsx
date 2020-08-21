import React, {FunctionComponent} from 'react';
import {Container, Wrapper, CardMediaWrapper} from './styled';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import logosrc from './login-img.jpg';
import BlockLogoWide from '../../../../shared/components/BlockLogoWide';

const Layout: FunctionComponent = ({children}) => {
  // somehere
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={8}>
          <CardMediaWrapper>
            <CardMedia component="img" alt="" image={logosrc} />
          </CardMediaWrapper>
        </Grid>
        <Grid item xs={4}>
          <Container component="main" maxWidth="sm">
            <BlockLogoWide />
            {children}
          </Container>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Layout;
