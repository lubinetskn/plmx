import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  padding-top: 24px;
  align-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #77777b;
  font-weight: 600;
`;

export const RightNav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  & div {
    margin: 5px;
  }
  img {
    border-radius: 50%;
  }
`;
