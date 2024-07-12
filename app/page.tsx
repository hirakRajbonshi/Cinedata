import MovieRecom from "@/components/MovieRecom";
export default function Home() {
  return (
    <section className="flex flex-col md:gap-3">
      <MovieRecom genre="New Movies" />
      <MovieRecom genre="Top Movies" />
      <MovieRecom genre="Popular Movies" />
    </section>
  );
}
