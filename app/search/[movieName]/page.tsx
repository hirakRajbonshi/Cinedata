import MovieCard from "@/components/MovieCard";
import { MovieShortData } from "@/constants/types";
async function getData(name: string) {
  const API_KEY = process.env.OMDb_API_KEY;
  const res = await fetch(
    `https://www.omdbapi.com/?s=${name}&apikey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Page({
  params,
}: {
  params: { movieName: string };
}) {
  const data = await getData(params.movieName);
  const suc = data.Response == "True";
  const movieList = data.Search;
  return (
    <section className="flex flex-col items-center justify-center gap-3 p-3">
      {/* TODO: if response false, filter & sorting */}
      {suc &&
        movieList.map((movie: MovieShortData) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
    </section>
  );
}
