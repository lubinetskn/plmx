import React, {FunctionComponent} from 'react';
import {Grid} from '@material-ui/core';
import Layout from '../Layout';
import {Form, Text} from './styled';

interface OwnProps {}

type Props = OwnProps;

const PageForgotPassword: FunctionComponent<Props> = () => {
  return (
    <Layout>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text variant="body2">
              <b>Востановление пароля</b>
            </Text>
            <Text variant="body2">
              Для востановления доступа к порталу свяжитесь со службой поддержки, написав по адресу: plmx_help@x5.ru
            </Text>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField id="outlined-basic" fullWidth type="email" margin="dense" label="Ваш email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" size="large">
              Отправить
            </Button>
          </Grid> */}
        </Grid>
      </Form>
    </Layout>
  );
};

export default PageForgotPassword;
