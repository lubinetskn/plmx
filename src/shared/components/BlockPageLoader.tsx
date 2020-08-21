import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const BlockPageLoader = () => {
  return (
    <Backdrop style={{color: '#fff'}} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BlockPageLoader;
