import React, {FunctionComponent} from 'react';
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {useForm, Controller} from 'react-hook-form';
import {Form, Link} from '../styled';
import {ILoginPair} from '../types';

interface IProps {
  onSubmit: (values: ILoginPair) => void;
}

const LoginForm: FunctionComponent<IProps> = ({onSubmit}: IProps) => {
  const {control, handleSubmit} = useForm<ILoginPair>();

  return (
    <Form id="AuthForm" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            as={TextField}
            control={control}
            fullWidth
            id="email"
            name="email"
            margin="dense"
            label="Введите e-mail"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            as={TextField}
            control={control}
            fullWidth
            id="password"
            name="password"
            type="password"
            margin="dense"
            label="Пароль"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Button id="AuthSubmit" fullWidth variant="contained" color="primary" size="large" type="submit">
            Войти
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="right">
            <Link to="/forgotpassword">Забыли пароль?</Link>
          </Typography>
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
