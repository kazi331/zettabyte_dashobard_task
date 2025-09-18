'use client';

import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };



    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs p-2 sm:p-4"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white rounded-lg shadow-xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden transform transition-all duration-200 scale-100 flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                    {title && (
                        <h2 id="modal-title" className="text-lg font-semibold text-gray-900 pr-4 truncate">
                            {title}
                        </h2>
                    )}
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 rounded-md p-1 flex-shrink-0 ml-auto cursor-pointer"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div id="modal-content" className="p-4 sm:p-6 overflow-y-auto flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;