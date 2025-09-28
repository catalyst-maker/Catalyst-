export type Page = 'home' | 'collections' | 'discover' | 'watchlist' | 'news';

export type RatingColor = 'green' | 'blue' | 'yellow' | 'red';

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  genres: string[];
  rating: number; // 0-100
}

export interface Collection {
  id: string;
  name: string;
  coverUrl: string;
  itemCount: number;
}

export interface Friend {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  source: string;
}
