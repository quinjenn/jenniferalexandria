import React from 'react';
import Modal from 'react-modal';
import './ReusableModal.css';


const ReusableModal = ({ isOpen, onRequestClose, title, number, subtitle, content, content2, content3, content4, content5, content6, content7 }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reusable Modal"
      className="full-screen-modal"
      overlayClassName="modal-overlay"
    >
      <div className='modal-container'>
        <div className='modal-border'>
          <div className='modal-header-container'>
            <h2 className='modal-number'>{number}</h2>
            <button className='modal-button' onClick={onRequestClose}>X</button>
          </div>
          <h2 className='modal-header'>{title}</h2>
          <h3 className='modal-subtitle'>{subtitle}</h3>
          <div className='modal-content'>{content}</div>
          <div className='modal-content2'>{content2}</div>
          <div className='modal-content3'>{content3}</div>
          <div className='modal-content4'>{content4}</div>
          <div className='modal-content5'>{content5}</div>
          <div className='modal-content6'>{content6}</div>
          <div className='modal-content7'>{content7}</div>

        </div>
      </div>
    </Modal>
  );
};

export default ReusableModal;
