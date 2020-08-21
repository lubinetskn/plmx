import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e0e0e0;
`;
export const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 24px;
`;

export const Drawer = styled.div<{expand: Boolean}>`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: ${props => (props.expand ? '245px' : '101px')};
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
  .MuiTypography-root {
    font-family: Montserrat, arial, sans-serif;
    opacity: ${props => (props.expand ? '1' : '0')};
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
  }
`;

export const Footer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  display: flex;
  height: 32px;
  width: 100%;
  background-color: #d9d9d9;
`;

export const Version = styled(Typography)`
  &body2 {
    font-size: 0.7rem;
    font-weight: 600;
  }
`;
export const Contact = styled(Typography)`
  margin-left: auto;
  &body2 {
    font-size: 0.7rem;
  }
`;
