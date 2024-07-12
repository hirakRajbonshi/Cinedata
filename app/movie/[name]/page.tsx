"use client";
import MovieDetailsCard from "@/components/MovieDetailsCard";
import MovieNotFound from "@/components/MovieNotFound";
import { nullData } from "@/constants/data";
import { MovieData } from "@/constants/types";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { name: string } }) {
  const [data, setData] = useState<MovieData>(nullData);
  useEffect(() => {
    async function getData(name: string) {
      const API_KEY = process.env.OMDb_API_KEY;
      const res = await fetch(`/api/movie?name=${name}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setData(data);
    }
    getData(params.name);
  }, []);
  const Response = data.Response;
  return (
    <section className="">
      {Response == "True" ? <MovieDetailsCard {...data} /> : <MovieNotFound />}
    </section>
  );
}
