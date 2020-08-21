import React from 'react';
import {TooltipProps} from '@material-ui/core/Tooltip';

import {withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const DarkTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 11,
    padding: '8px 13px',
    textAlign: 'left',
    whiteSpace: 'pre-line',
  },
}))(Tooltip);

export const StyledTooltip = ({className, placement, title, children}: TooltipProps) => {
  return (
    <DarkTooltip className={className} title={title} placement={placement}>
      {children}
    </DarkTooltip>
  );
};
