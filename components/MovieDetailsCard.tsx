import Image from "next/image";
import { MovieData } from "@/constants/types";

export default function MovieDetailsCard(data: MovieData) {
  console.log(data);
  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      <h1 className="text-xl text-center font-bold">{data.Title}</h1>
      <Image
        className="rounded-lg"
        src={data.Poster}
        width={250}
        height={400}
        alt={`${data.Title} Poster`}
      />
      <div className="flex items-center justify-around w-[100%] px-16">
        <button className="bg-secondary p-2 text-xs rounded-lg">
          Watch Trailer
        </button>
        <button className="bg-secondary p-2 text-xs rounded-lg">
          Watch Movie
        </button>
      </div>
      <details>{data.Title}</details>
    </div>
  );
}
