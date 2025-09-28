import React from 'react';
import { Page } from '../types';

interface BottomNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-all duration-300 ease-in-out transform ${
      isActive ? 'text-brand-accent -translate-y-1' : 'text-gray-500 dark:text-gray-400 hover:text-brand-accent'
    }`}
    aria-current={isActive}
    aria-label={label}
  >
    <i className={`fas ${icon} text-xl mb-1`}></i>
    <span className={`text-xs font-medium transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>{label}</span>
  </button>
);

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-brand-secondary-light/95 dark:bg-brand-secondary-dark/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700/50 flex justify-around z-50">
      <NavItem
        icon="fa-home"
        label="Home"
        isActive={currentPage === 'home'}
        onClick={() => setCurrentPage('home')}
      />
      <NavItem
        icon="fa-compass"
        label="Discover"
        isActive={currentPage === 'discover'}
        onClick={() => setCurrentPage('discover')}
      />
      <NavItem
        icon="fa-list-alt"
        label="Watchlist"
        isActive={currentPage === 'watchlist'}
        onClick={() => setCurrentPage('watchlist')}
      />
      <NavItem
        icon="fa-layer-group"
        label="Collections"
        isActive={currentPage === 'collections'}
        onClick={() => setCurrentPage('collections')}
      />
      <NavItem
        icon="fa-newspaper"
        label="News"
        isActive={currentPage === 'news'}
        onClick={() => setCurrentPage('news')}
      />
    </nav>
  );
};