"use client";
import MovieCard from "@/components/MovieCard";
import { MovieShortData, OMDbResponse1 } from "@/constants/types";
import { use, useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";

export default function Page({ params }: { params: { movieName: string } }) {
  const [data, setData] = useState<OMDbResponse1>({
    Search: [],
    totalResults: "",
    Response: "False",
  });
  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_OMDb_API_KEY;
    async function getData(name: string) {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${name}&apikey=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data);
    }
    getData(params.movieName);
  }, []);

  const [filterOpt, setFilterOpt] = useState("all");
  const handleFilterClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const id = target.id.toString();
    setFilterOpt(id);
  };
  const suc = data.Response === "True";

  const [filteredMovies, setFilteredMovies] = useState<MovieShortData[]>([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const movieList = data.Search;

    const updateFilteredMovies = () => {
      if (filterOpt === "all") {
        setFilteredMovies(movieList);
      } else {
        const filteredList = movieList.filter(
          (movie) => movie.Type === filterOpt
        );
        setFilteredMovies(filteredList);
      }
    };

    updateFilteredMovies();
  }, [data.Search, filterOpt]);

  useEffect(() => {
    const sortMoviesByYear = (movies: MovieShortData[]): MovieShortData[] => {
      return movies.sort((a, b) => {
        const yearA = parseInt(a.Year, 10);
        const yearB = parseInt(b.Year, 10);
        return yearA - yearB;
      });
    };

    const movieList = filteredMovies;
    const sortMovies = () => {
      if (sort) {
        const sortedMovies = sortMoviesByYear(movieList);
        setFilteredMovies(sortedMovies);
      }
    };
    // console.log(sort);

    sortMovies();
  }, [sort, filteredMovies]);
  return (
    <>
      <div className="fixed  z-10 dropdown dropdown-right dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1 bg-secondary">
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto py-2 px-4 shadow text-s gap-1"
        >
          <button className="px-2 py-0.5" onClick={handleFilterClick} id="all">
            All
          </button>
          <button
            className="px-2 py-0.5"
            onClick={handleFilterClick}
            id="movie"
          >
            Movie
          </button>
          <button
            className="px-2 py-0.5"
            onClick={handleFilterClick}
            id="series"
          >
            Series
          </button>
        </ul>
      </div>
      <button
        // onClick={setSort(!sort)}
        className="fixed z-10 text-xs top-[7.5rem] ml-1 max-w-[4.2rem] bg-secondary p-2 rounded-lg font-primary"
      >
        Sort By Year of Release
      </button>
      <section className="flex flex-col items-center justify-center gap-3 p-3">
        {/* TODO: if response false */}
        {suc &&
          filteredMovies.map((movie: MovieShortData) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
      </section>
    </>
  );
}
