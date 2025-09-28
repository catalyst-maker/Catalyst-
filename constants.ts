import { Movie, NewsArticle, Friend, Collection } from './types';

export const MOVIES: Movie[] = [
  { id: 1, title: 'Inception', posterUrl: 'https://picsum.photos/seed/inception/400/600', year: 2010, genres: ['Sci-Fi', 'Action'], rating: 95 },
  { id: 2, title: 'The Dark Knight', posterUrl: 'https://picsum.photos/seed/darkknight/400/600', year: 2008, genres: ['Action', 'Crime'], rating: 98 },
  { id: 3, title: 'Parasite', posterUrl: 'https://picsum.photos/seed/parasite/400/600', year: 2019, genres: ['Thriller', 'Comedy'], rating: 96 },
  { id: 4, title: 'The Matrix', posterUrl: 'https://picsum.photos/seed/matrix/400/600', year: 1999, genres: ['Sci-Fi', 'Action'], rating: 92 },
  { id: 5, title: 'Joker', posterUrl: 'https://picsum.photos/seed/joker/400/600', year: 2019, genres: ['Drama', 'Thriller'], rating: 85 },
  { id: 6, title: 'Spirited Away', posterUrl: 'https://picsum.photos/seed/spirited/400/600', year: 2001, genres: ['Animation', 'Fantasy'], rating: 97 },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  { id: 'n1', title: 'Major Studio Announces New Sci-Fi Trilogy', summary: 'A groundbreaking new series is in the works, promising to redefine the genre with stunning visuals and a deep narrative.', imageUrl: 'https://picsum.photos/seed/news1/1200/600', source: 'Variety' },
  { id: 'n2', title: 'Upcoming Film Festivals: What to Watch', summary: 'From Cannes to Sundance, here are the most anticipated films making their debut on the festival circuit this year.', imageUrl: 'https://picsum.photos/seed/news2/1200/600', source: 'Hollywood Reporter' },
  { id: 'n3', title: 'The Rise of Streaming: How It Changed Hollywood', summary: 'An in-depth look at how streaming services have disrupted the traditional movie industry and what it means for the future of cinema.', imageUrl: 'https://picsum.photos/seed/news3/1200/600', source: 'Deadline' },
];

export const FRIENDS: Friend[] = [
    { id: 'f1', name: 'Alice', avatarUrl: 'https://picsum.photos/seed/alice/100/100' },
    { id: 'f2', name: 'Bob', avatarUrl: 'https://picsum.photos/seed/bob/100/100' },
    { id: 'f3', name: 'Charlie', avatarUrl: 'https://picsum.photos/seed/charlie/100/100' },
    { id: 'f4', name: 'Diana', avatarUrl: 'https://picsum.photos/seed/diana/100/100' },
];

export const COLLECTIONS: Collection[] = [
  { id: 'c1', name: 'Sci-Fi Masterpieces', itemCount: 12, coverUrl: 'https://picsum.photos/seed/scifi/500/300' },
  { id: 'c2', name: 'Mind-Bending Thrillers', itemCount: 8, coverUrl: 'https://picsum.photos/seed/thrillers/500/300' },
  { id: 'c3', name: 'Studio Ghibli Classics', itemCount: 22, coverUrl: 'https://picsum.photos/seed/ghibli/500/300' },
  { id: 'c4', name: 'Oscar Winners 2020s', itemCount: 15, coverUrl: 'https://picsum.photos/seed/oscars/500/300' },
  { id: 'c5', name: 'A24 Gems', itemCount: 18, coverUrl: 'https://picsum.photos/seed/a24/500/300' },
  { id: 'c6', name: 'Comfort Movies', itemCount: 30, coverUrl: 'https://picsum.photos/seed/comfort/500/300' },
];
