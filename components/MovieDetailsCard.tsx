import Image from "next/image";
import { MovieData } from "@/constants/types";

export default function MovieDetailsCard(data: MovieData) {
  // console.log(data);
  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      <h1 className="text-xl font-bold">{data.Title}</h1>
      <div className="bg-secondary p-1 border border-bg-secondary">
        <Image
          className="rounded-lg"
          src={data.Poster}
          width={250}
          height={400}
          alt={`${data.Title} Poster`}
        />
        <button className="p-2 px-3 bg-secondary text-s rounded-lg font-semibold w-full">
          Watch Movie
        </button>
      </div>
    </div>
  );
}
