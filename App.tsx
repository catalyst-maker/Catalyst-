import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { Page } from './types';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, toggleTheme] = useTheme();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'collections':
        return <CollectionsPage />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">This page is under construction.</p>
              <img src={`https://picsum.photos/seed/${currentPage}/800/400`} alt="Placeholder" className="mt-8 rounded-lg shadow-lg mx-auto" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`flex h-screen font-sans ${theme}`}>
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-1 overflow-y-auto bg-brand-light dark:bg-brand-dark p-4 sm:p-6 lg:p-8">
          {renderPage()}
        </main>
        <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;