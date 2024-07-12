import Image from "next/image";
import { TMDbMovieData } from "@/constants/types";
import Link from "next/link";
export default function MovieRecomCard(data: TMDbMovieData) {
  return (
    <Link href={`/movie/${data.title}`}>
      <div className="relative flex items-end min-w-[6rem] h-[10rem] md:min-w-[10rem] md:h-auto">
        <Image
          className="md:hidden"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          // fill={true}
          width={200}
          height={300}
          alt={data.title}
        />
        <Image
          className="hidden md:block"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          // fill={true}
          width={500}
          height={700}
          alt={data.title}
        />
      </div>
      <h1 className="relative text-sm text-center font-white md:text-lg ">
        {data.title}
      </h1>
    </Link>
  );
}
