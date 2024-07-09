"use client";
import { useState } from "react";
import MovieTrailer from "./MovieTrailer";
import { MovieShortData } from "@/constants/types";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
export default function MovieCard(data: MovieShortData) {
  // console.log(data);
  const [trailer, setTrailer] = useState(false);
  const handleWatchTrailer = () => {
    setTrailer(!trailer);
  };
  return (
    <>
      {trailer && (
        <div className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black">
          <button
            className="absolute z-10 left-[100%] translate-x-[10%] translate-y-[-100%]"
            onClick={handleWatchTrailer}
          >
            <IoClose size={30} />
          </button>
          <MovieTrailer title={data.Title} />
        </div>
      )}
      <div
        style={trailer ? { backdropFilter: "blur(50px)" } : {}}
        className="flex flex-col items-center bg-secondary max-w-[250px] p-3 border border-[#494848]"
      >
        <Image
          className="rounded-lg"
          src={data.Poster}
          width={250}
          height={400}
          alt={`${data.Title} Poster`}
        />
        <div className="flex flex-col items-center justify-between w-full mt-1">
          <h1 className="text-wrap font-semibold">
            <span className="font-bold">{data.Type.toUpperCase()}: </span>
            {data.Title}
          </h1>
          <h1 className="font-semibold">
            <span className="font-bold">YEAR: </span>
            {data.Year}
          </h1>
        </div>
        <div className="flex justify-between gap-2 font-semibold w-full">
          <button
            className="p-2 bg-primary text-xs rounded-lg"
            onClick={handleWatchTrailer}
          >
            Watch Trailer
          </button>
          <Link
            className="p-2 bg-primary text-xs rounded-lg"
            href={`/movie/${data.imdbID}`}
          >
            View Details
          </Link>
        </div>
        <button className="p-2 px-3 mt-1 bg-primary text-s rounded-lg">
          Watch Movie
        </button>
      </div>
    </>
  );
}
