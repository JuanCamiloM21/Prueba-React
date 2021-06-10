import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='modal' onClick={onClose}>
      <div className='modal-container'>{children}</div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
