import React, { useState } from 'react';
import { CollectionCard } from '../components/CollectionCard';
import { CreateCollectionModal } from '../components/CreateCollectionModal';
import { ShareCollectionModal } from '../components/ShareCollectionModal';
import { COLLECTIONS } from '../constants';
import { Collection } from '../types';

export const CollectionsPage: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>(COLLECTIONS);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  const handleCreateCollection = (data: { name: string; coverUrl: string }) => {
    const newCollection: Collection = {
      id: `c${collections.length + 1}`,
      name: data.name,
      coverUrl: data.coverUrl || `https://picsum.photos/seed/${data.name}/500/300`,
      itemCount: 0,
    };
    setCollections([newCollection, ...collections]);
    setCreateModalOpen(false);
  };

  const handleShare = (collection: Collection) => {
    setSelectedCollection(collection);
    setShareModalOpen(true);
  };
  
  const handleCloseShareModal = () => {
    setShareModalOpen(false);
    setSelectedCollection(null);
  };

  return (
    <div className="pb-20 md:pb-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Collections</h1>
        <button
          onClick={() => setCreateModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 font-semibold bg-brand-accent text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-plus"></i>
          <span>Create New</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} onShare={handleShare} />
        ))}
      </div>

      <CreateCollectionModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateCollection}
      />

      {selectedCollection && (
        <ShareCollectionModal
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
          collection={selectedCollection}
        />
      )}
    </div>
  );
};
