import React, {ReactNode, ReactNodeArray} from 'react';
import {Modal} from '@material-ui/core';

interface IModal {
  open: any;
  className?: string;
  children: ReactNode | ReactNodeArray | any;
  onClose: () => void;
}

export const ModalPLMX = ({open, className, onClose, children}: IModal) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={className}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
};
