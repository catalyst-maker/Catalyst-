import React, { useState, useEffect } from 'react';
import { Collection } from '../types';
import { FRIENDS } from '../constants';

interface ShareCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
}

export const ShareCollectionModal: React.FC<ShareCollectionModalProps> = ({ isOpen, onClose, collection }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  
  const shareUrl = `${window.location.origin}/collections/${collection.id}`;
  const shareText = `Check out my collection "${collection.name}" on Watchlist Catalyst!`;

  useEffect(() => {
    if (!isOpen) {
      // Reset button text when modal is closed
      setTimeout(() => setCopyButtonText('Copy'), 300);
    }
  }, [isOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy'), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setCopyButtonText('Error');
       setTimeout(() => setCopyButtonText('Copy'), 2000);
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      aria-labelledby="share-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-brand-secondary-light dark:bg-brand-secondary-dark rounded-xl shadow-2xl w-full max-w-lg m-4 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
                <h2 id="share-modal-title" className="text-2xl font-bold">Share Collection</h2>
                <p className="text-gray-600 dark:text-gray-400">"{collection.name}"</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="space-y-6">
            {/* Copy Link Section */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Shareable Link
                </label>
                <div className="flex space-x-2">
                    <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg bg-brand-light dark:bg-brand-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow text-sm"
                    />
                    <button
                        onClick={handleCopyLink}
                        className="px-4 py-2 w-24 rounded-lg font-semibold bg-brand-accent text-white hover:bg-blue-600 transition-colors shadow disabled:bg-gray-400"
                    >
                        {copyButtonText}
                    </button>
                </div>
            </div>

            {/* Share with Friends Section */}
            <div>
                 <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Share with friends</h3>
                 <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                     {FRIENDS.map(friend => (
                         <div key={friend.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700/50">
                             <div className="flex items-center space-x-3">
                                <img src={friend.avatarUrl} alt={friend.name} className="w-8 h-8 rounded-full" />
                                <span className="font-semibold">{friend.name}</span>
                             </div>
                             <button className="px-3 py-1 text-sm rounded-full font-semibold bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors">
                                Send
                             </button>
                         </div>
                     ))}
                 </div>
            </div>
            
            {/* Social Media Section */}
            <div>
                 <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Share on social media</h3>
                 <div className="flex items-center space-x-4">
                     <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><i className="fab fa-twitter"></i></a>
                     <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
                     <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><i className="fab fa-whatsapp"></i></a>
                     <a href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent('I thought you might like this collection: ' + shareUrl)}`} className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><i className="fas fa-envelope"></i></a>
                 </div>
            </div>

          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};