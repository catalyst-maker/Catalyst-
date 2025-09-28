import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
      isActive
        ? 'bg-brand-accent text-white shadow-md'
        : 'hover:bg-brand-secondary-light dark:hover:bg-brand-secondary-dark'
    }`}
  >
    <i className={`fas ${icon} w-6 text-center text-lg`}></i>
    <span className="font-semibold">{label}</span>
  </li>
);

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-brand-light dark:bg-brand-secondary-dark p-4 border-r border-gray-200 dark:border-gray-700">
      <div className="mb-8 flex items-center space-x-3 px-2">
        <i className="fas fa-film text-brand-accent text-4xl"></i>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Catalyst</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
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
        </ul>
      </nav>
      
      <div className="mt-auto">
          <div className="p-4 bg-brand-secondary-light dark:bg-brand-dark rounded-lg text-center">
            <h3 className="font-bold">Add a Title</h3>
            <p className="text-sm my-2 text-gray-600 dark:text-gray-400">Can't find something? Add it to our database.</p>
            <button className="w-full bg-brand-accent text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg">
                Submit Title
            </button>
          </div>
      </div>

    </aside>
  );
};