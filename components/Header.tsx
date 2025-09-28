import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between p-4 bg-brand-secondary-light dark:bg-brand-secondary-dark border-b border-gray-200 dark:border-gray-700 h-16">
      <div className="flex items-center">
        {/* Placeholder for sidebar toggle on mobile */}
         <div className="md:hidden">
            <button className="w-10 h-10 flex items-center justify-center">
                <i className="fas fa-bars text-xl"></i>
            </button>
        </div>
        <div className="hidden md:block">
            {/* Title is in sidebar, this space is for context */}
        </div>
      </div>

      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-full max-w-lg">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <i className="fas fa-search text-gray-400"></i>
          </span>
          <input
            type="text"
            placeholder="Search for movies, TV shows, and more..."
            className="w-full pl-12 pr-4 py-2.5 rounded-full bg-brand-light dark:bg-brand-dark border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent transition-shadow shadow-sm"
            aria-label="Search"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Notifications">
          <span className="relative">
             <i className="fas fa-bell text-lg"></i>
             <span className="absolute top-0 right-0 -mt-1 -mr-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-brand-secondary-light dark:border-brand-secondary-dark"></span>
          </span>
        </button>
        <div className="w-10 h-10 rounded-full ring-2 ring-offset-2 ring-offset-brand-secondary-light dark:ring-offset-brand-secondary-dark ring-brand-accent cursor-pointer">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="User Avatar" className="w-full h-full rounded-full object-cover"/>
        </div>
      </div>
    </header>
  );
};