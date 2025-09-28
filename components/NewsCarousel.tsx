import React, { useState, useEffect, useCallback } from 'react';
import { NEWS_ARTICLES } from '../constants';

export const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % NEWS_ARTICLES.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  if (NEWS_ARTICLES.length === 0) {
    return null;
  }

  const currentArticle = NEWS_ARTICLES[currentIndex];

  return (
    <div className="w-full relative group" aria-roledescription="carousel" aria-label="Latest News">
      <div className="relative h-56 md:h-96 rounded-lg overflow-hidden shadow-2xl">
        {NEWS_ARTICLES.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={index !== currentIndex}
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>
        ))}

        <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white z-10">
          <span className="text-xs md:text-sm bg-brand-accent text-white px-3 py-1 rounded-full font-semibold">{currentArticle.source.toUpperCase()}</span>
          <h2 className="text-xl md:text-4xl font-bold mt-2 drop-shadow-lg">{currentArticle.title}</h2>
          <p className="text-gray-200 text-sm md:text-base mt-2 hidden md:block max-w-2xl">{currentArticle.summary}</p>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/30 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {NEWS_ARTICLES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-accent scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
          ></button>
        ))}
      </div>
    </div>
  );
};