"use client";
import { useState } from "react";
import MovieTrailer from "./MovieTrailer";
import { MovieShortData } from "@/constants/types";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
export default function MovieCard(data: MovieShortData) {
  const [trailer, setTrailer] = useState(false);
  const handleWatchTrailer = () => {
    setTrailer(!trailer);
  };
  return (
    <>
      {trailer && (
        <div className="">
          <div className="fixed z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black">
            <button
              className="absolute z-10 left-[100%] translate-x-[10%] translate-y-[-100%]"
              onClick={handleWatchTrailer}
            >
              .
              <IoClose size={30} />
            </button>
            <MovieTrailer title={data.Title} />
          </div>
        </div>
      )}
      <div className="flex flex-col items-center bg-secondary max-w-[16rem] p-3 border border-[#494848] md:min-h-[32rem] md:max-h-[35rem]">
        <div className="block md:hidden">
          {data.Poster != "N/A" && (
            <Image
              className="rounded-lg"
              src={data.Poster}
              width={250}
              height={400}
              alt={`${data.Title} Poster`}
            />
          )}
        </div>
        <div className="hidden md:flex items-center min-h-[20rem]">
          {data.Poster != "N/A" && (
            <Image
              className="rounded-lg"
              src={data.Poster}
              width={300}
              height={500}
              alt={`${data.Title} Poster`}
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-between w-full mt-1 md:text-lg">
          <h1 className="text-wrap font-semibold md:mt-1 text-center">
            <span className="font-bold">{data.Type.toUpperCase()}: </span>
            {data.Title}
          </h1>
          <h1 className="font-semibold">
            <span className="font-bold">YEAR: </span>
            {data.Year}
          </h1>
        </div>
        <div className="flex justify-between gap-2 font-semibold w-full md:mt-2">
          <button
            className="p-2 bg-primary text-xs rounded-lg md:text-m md:text-center"
            onClick={handleWatchTrailer}
          >
            Watch Trailer
          </button>
          <button className="hidden md:block p-2 bg-primary text-xs rounded-lg md:text-m md:text-center ">
            Watch Movie
          </button>
          <Link
            className="p-2 bg-primary text-xs rounded-lg md:text-m md:text-center "
            href={`/movie/${data.Title}`}
          >
            View Details
          </Link>
        </div>
        <button className="p-2 px-3 mt-1 bg-primary text-s rounded-lg md:hidden ">
          Watch Movie
        </button>
      </div>
    </>
  );
}
