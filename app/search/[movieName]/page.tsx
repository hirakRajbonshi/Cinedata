import MovieDetailsCard from "@/components/MovieDetailsCard";
import MovieNotFound from "@/components/MovieNotFound";
async function getData(name: string) {
  const API_KEY = process.env.OMDb_API_KEY;
  const res = await fetch(
    `https://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { movieName: string };
}) {
  const data = await getData(params.movieName);
  const Response = data.Response;
  return (
    <section className="">
      {Response == "True" ? <MovieDetailsCard {...data} /> : <MovieNotFound />}
    </section>
  );
}
