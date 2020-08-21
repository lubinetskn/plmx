import React, {FunctionComponent} from 'react';
import {useDispatch} from 'react-redux';
import Layout from '../Layout';
import LoginForm from './components/LoginForm';
import {ILoginPair} from './types';
import {setTokenAction} from '../../../../app/redux/stores/user/userSlice';

interface OwnProps {}

type Props = OwnProps;

const PageLogin: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const submit = (values: ILoginPair) => {
    dispatch(setTokenAction(values));
  };

  return (
    <Layout>
      <LoginForm onSubmit={submit} />
    </Layout>
  );
};

export default PageLogin;
