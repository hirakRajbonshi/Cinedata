type MovieRating = {
  Source: string;
  Value: string;
};
export type OMDbResponse1 = {
  Search: MovieShortData[];
  totalResults: string;
  Response: string;
};
export type MovieShortData = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export type MovieData = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
export type TMDbMovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type TMDbResponse1 = {
  page: number;
  results: TMDbMovieData[];
  total_pages: number;
  total_results: number;
};
