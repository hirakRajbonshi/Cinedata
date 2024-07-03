import Link from "next/link";
import MovieRecomCard from "./MovieRecomCard";
export default function MovieRecom() {
  return (
    <div className="mt-2 px-3">
      <div className="flex items-center justify-between">
        <h1 className="text-l font-semibold md:text-xl">Horror Movies</h1>
        <Link className="text-xs" href="/">
          View All &gt;
        </Link>
      </div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <MovieRecomCard />
        <MovieRecomCard />
        <MovieRecomCard />
        <MovieRecomCard />
        <MovieRecomCard />
      </div>
    </div>
  );
}
