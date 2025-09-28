import React, { useState, useEffect, useRef } from 'react';

interface CreateCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (data: { name: string; coverUrl: string }) => void;
}

export const CreateCollectionModal: React.FC<CreateCollectionModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset form on open
      setName('');
      setCoverUrl('');
      // Focus the name input
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate({ name: name.trim(), coverUrl: coverUrl.trim() });
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-brand-secondary-light dark:bg-brand-secondary-dark rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 id="modal-title" className="text-2xl font-bold">Create New Collection</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="collection-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Collection Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="collection-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Sci-Fi Masterpieces"
                  className="w-full px-4 py-2 rounded-lg bg-brand-light dark:bg-brand-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="cover-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Cover Image URL (Optional)
                </label>
                <input
                  id="cover-url"
                  type="url"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 rounded-lg bg-brand-light dark:bg-brand-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!name.trim()}
                className="px-6 py-2 rounded-lg font-semibold bg-brand-accent text-white hover:bg-blue-600 transition-colors shadow disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </form>
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
