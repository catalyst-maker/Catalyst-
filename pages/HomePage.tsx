import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { MOVIES } from '../constants';
import { NewsCarousel } from '../components/NewsCarousel';

const MovieRow: React.FC<{ title: string; movies: typeof MOVIES }> = ({ title, movies }) => (
  <section className="mb-12">
    <div className="flex items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
      <a href="#" className="ml-auto text-sm font-semibold text-brand-accent hover:underline">See All</a>
    </div>
    <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 horizontal-scrollbar">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  const trendingMovies = [...MOVIES].sort((a, b) => b.rating - a.rating);
  const recentMovies = [...MOVIES].sort((a, b) => b.year - a.year);
  const recommendedMovies = [...MOVIES].sort(() => 0.5 - Math.random());

  return (
    <div className="pb-20 md:pb-4">
      <NewsCarousel />
      <div className="mt-10">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Recently Added" movies={recentMovies} />
        <MovieRow title="Recommended For You" movies={recommendedMovies} />
      </div>
    </div>
  );
};