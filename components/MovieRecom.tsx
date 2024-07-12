"use client";
import Link from "next/link";
import MovieRecomCard from "./MovieRecomCard";
import { TMDbResponse1, TMDbMovieData } from "@/constants/types";
import { nullDataTMDb } from "@/constants/data";
import { useState, useEffect } from "react";
interface props {
  genre: string;
}
const MovieRecom: React.FC<props> = ({ genre }) => {
  const [data, setData] = useState<TMDbResponse1>(nullDataTMDb);
  useEffect(() => {
    async function getData() {
      let id = "";
      if (genre == "Top Movies") id = "0";
      else if (genre == "Popular Movies") id = "1";
      else if (genre == "New Movies") id = "2";
      else id = genre;
      console.log(id);
      const res = await fetch(`/api/movie_list?id=${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  return (
    <div className="mt-2 px-3">
      <div className="flex items-center justify-between">
        <h1 className="text-l font-semibold md:text-xl">{genre}</h1>
        <Link className="text-xs md:text-lg" href="/">
          View All &gt;
        </Link>
      </div>
      <div className="flex gap-2 mt-1 overflow-x-auto no-scrollbar md:mt-2">
        {data.results.map((movie: TMDbMovieData) => (
          <MovieRecomCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieRecom;
