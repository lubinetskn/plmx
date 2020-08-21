import React from 'react';
import {StyledTooltip} from './Tooltip';

export default {
  title: 'StyledTooltip',
  component: StyledTooltip,
};

export const Example = () => (
  <StyledTooltip placement="right" title="Toooltip">
    <span>Наведи</span>
  </StyledTooltip>
);
