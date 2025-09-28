import React from 'react';
import { Collection } from '../types';

interface CollectionCardProps {
  collection: Collection;
  onShare: (collection: Collection) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onShare }) => {
  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents any parent onClick handlers from being triggered
    onShare(collection);
  };

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-secondary-dark rounded-xl">
        <img
          src={collection.coverUrl}
          alt={collection.name}
          className="w-full h-full object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-60"
        />
      </div>
      
      <div className="relative aspect-[5/3] flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-white text-lg font-bold truncate group-hover:whitespace-normal">{collection.name}</h3>
        <p className="text-gray-300 text-sm mt-1">{collection.itemCount} items</p>
      </div>

      <button
        onClick={handleShareClick}
        className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-accent hover:scale-110 transform"
        aria-label={`Share ${collection.name}`}
      >
        <i className="fas fa-share-alt"></i>
      </button>
    </div>
  );
};