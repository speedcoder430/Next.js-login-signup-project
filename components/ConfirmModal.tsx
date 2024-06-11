import React from "react";
import Modal from "react-modal";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div>
                <p>{message}</p>
                <button onClick={onConfirm}>
                    Confirm
                </button>
                <button onClick={onClose}>
                    Cancel
                </button>
            </div>
        </Modal>
    )
}