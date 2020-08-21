import styled from 'styled-components';

export const StyledStatusLine = styled.div`
  width: 8px;
  height: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &.PRODUCT_CANCEL,
  &.TASK_CANCEL {
    background-color: #ff9800;
  }
  &.PRODUCT_NEW,
  &.TASK_NEW {
    background-color: #2196f3;
  }
  &.PRODUCT_IN_WORK,
  &.TASK_IN_WORK {
    background-color: #5eb245;
  }
  &.PRODUCT_DONE,
  &.TASK_DONE {
    background-color: #171718;
  }
  &.PRODUCT_PROBLEM,
  &.TASK_PROBLEM {
    background-color: #e33371;
  }
`;
