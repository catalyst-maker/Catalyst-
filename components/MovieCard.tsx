import React from 'react';
import { Movie } from '../types';
import { RatingBadge } from './RatingBadge';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="w-48 flex-shrink-0 group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-secondary-dark rounded-xl">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-72 object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-60"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-black/95 group-hover:via-black/70">
        <h3 className="text-white text-base font-bold truncate group-hover:whitespace-normal group-hover:line-clamp-2">{movie.title}</h3>
        <div className="flex items-center justify-between text-gray-300 text-sm mt-1">
          <span>{movie.year}</span>
           <div className="flex flex-wrap gap-1 justify-end">
            {movie.genres.slice(0, 1).map(g => <span key={g} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{g}</span>)}
        </div>
        </div>
      </div>
      
      <RatingBadge rating={movie.rating} />

      {/* Action buttons visible on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-brand-accent text-white w-12 h-12 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg" aria-label="Add to watchlist">
              <i className="fas fa-plus text-xl"></i>
          </button>
      </div>

    </div>
  );
};
