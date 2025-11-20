
import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-purple-500/20 overflow-hidden flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-slate-800 flex-shrink-0">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto text-gray-300 prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-a:text-purple-400 prose-strong:text-white max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
