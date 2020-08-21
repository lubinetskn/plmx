import {Container as MuiContainer} from '@material-ui/core';
import styled from 'styled-components';

type IContainer = {
  component: any;
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(MuiContainer)<IContainer>`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 27px;
  padding-top: 210px;
`;

export const Wrapper = styled.div`
  width: 1366px;
  margin: auto;
`;

export const CardMediaWrapper = styled.div`
  height: 100vh;
  display: flex;
`;
