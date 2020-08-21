import React, {FunctionComponent} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import Layout from '../Layout';
import {Form, Text} from './styled';

interface OwnProps {}

type Props = OwnProps;

const PageNewPassword: FunctionComponent<Props> = () => {
  return (
    <Layout>
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text variant="body2">Введите новый пароль</Text>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              type="password"
              margin="dense"
              label="Новый пароль"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              fullWidth
              type="password"
              margin="dense"
              label="Повторите пароль"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" size="large">
              Отправить
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Layout>
  );
};

export default PageNewPassword;
