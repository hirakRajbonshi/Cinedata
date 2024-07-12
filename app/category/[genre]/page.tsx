"use client";
import { useEffect, useState } from "react";
import { TMDbMovieData, TMDbResponse1 } from "@/constants/types";
import { nullDataTMDb } from "@/constants/data";
import MovieCardTMDb from "@/components/MovieCardTMDb";
import { GetStaticPaths, GetStaticProps } from "next";
import { RiH1 } from "react-icons/ri";

// #TODO : remove other routes

// const getStaticPaths: GetStaticPaths = async () => {
//   const allowedRoutes = ["", "allowed-route2"];

//   const paths = allowedRoutes.map((route) => ({
//     params: { slug: route },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params as { slug: string };

//   const allowedRoutes = ["allowed-route1", "allowed-route2"];

//   if (!allowedRoutes.includes(slug)) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       slug,
//     },
//   };
// };

export default function Page({ params }: { params: { genre: string } }) {
  let genreId = "";
  if (params.genre == "Horror") genreId = "27";
  else if (params.genre == "Comedy") genreId = "35";
  else if (params.genre == "Action") genreId = "878";
  else if (params.genre == "Adventure") genreId = "12";
  else if (params.genre == "Animated") genreId = "16";
  const [data, setData] = useState<TMDbResponse1>(nullDataTMDb);
  const [type, setType] = useState("movie");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `/api/category?id=${genreId}&type=${type.toLowerCase()}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setData(data);
    };
    getData();
  }, [type]);
  // console.log(data);

  return (
    <section className="p-2">
      <div className="flex justify-around">
        {type == "movie" ? (
          <h1 className="font-semibold text-lg ">{`${params.genre} Movies`}</h1>
        ) : (
          <h1 className="font-semibold text-lg ">{`${params.genre} Series`}</h1>
        )}

        {/* <div className="flex gap-2">
          <button onClick={() => setType("movie")}>Movies</button>
          <button onClick={() => setType("tv")}>Series</button>
        </div> */}
      </div>
      <div className="flex flex-col items-center gap-2 mt-2 md:flex-row md:flex-wrap md:justify-center">
        {data.results.map((movie: TMDbMovieData) => (
          <MovieCardTMDb key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
