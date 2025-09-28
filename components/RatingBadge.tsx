
import React from 'react';
import { RatingColor } from '../types';

interface RatingBadgeProps {
  rating: number; // 0-100
}

const getRatingColor = (rating: number): RatingColor => {
  if (rating >= 80) return 'green';
  if (rating >= 60) return 'blue';
  if (rating >= 40) return 'yellow';
  return 'red';
};

const colorClasses: Record<RatingColor, string> = {
  green: 'bg-rating-green text-white',
  blue: 'bg-rating-blue text-white',
  yellow: 'bg-rating-yellow text-black',
  red: 'bg-rating-red text-white',
};

export const RatingBadge: React.FC<RatingBadgeProps> = ({ rating }) => {
  const color = getRatingColor(rating);
  const classes = colorClasses[color];

  return (
    <div
      className={`absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${classes}`}
    >
      {rating}
      <span className="text-xs">%</span>
    </div>
  );
};
