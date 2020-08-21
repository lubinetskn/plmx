import styled from 'styled-components';

export const WidgetWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 23px;
  grid-row-gap: 10px;
  margin-bottom: 24px;
`;

export const Widget = styled.div`
  background-color: rgba(255, 255, 255, 0.51);
  padding: 16px 24px;
  border-radius: 10px;
`;

export const WidgetTitle = styled.h2`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  color: #8b8b8b;
  margin: 0 0 8px;
  text-transform: uppercase;
`;

export const WidgetText = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  color: #343435;
  margin: 0;
`;
