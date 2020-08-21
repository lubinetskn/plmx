import React from 'react';
import {StyledStatusLine} from './styled';

interface IStatusLine {
  className: string;
}

export const StatusLine = ({className}: IStatusLine) => {
  return <StyledStatusLine className={className} />;
};
