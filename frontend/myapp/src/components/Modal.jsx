import React from 'react';
import Modal from 'react-modal';
import '../css/modal.css';

const AppModal = ({ isOpen, onClose, title, children, positiveAction, negativeAction }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel={title} className='modal'>
            <h2>{title}</h2>
            {children}
            <div>
                <button onClick={positiveAction}>Yes</button>
                <button onClick={negativeAction}>No</button>
                <button onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

export default AppModal;