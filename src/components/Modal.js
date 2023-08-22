import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
    </div>
  );
};

export default Modal;
