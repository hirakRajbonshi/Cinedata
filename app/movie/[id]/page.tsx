import MovieDetailsCard from "@/components/MovieDetailsCard";
import MovieNotFound from "@/components/MovieNotFound";

async function getData(id: string) {
  const API_KEY = process.env.OMDb_API_KEY;
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const Response = data.Response;
  return (
    <section className="">
      {Response == "True" ? <MovieDetailsCard {...data} /> : <MovieNotFound />}
      {/* <h1>{JSON.stringify(data)}</h1> */}
    </section>
  );
}
