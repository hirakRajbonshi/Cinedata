import MovieRecom from "@/components/MovieRecom";
export default function Home() {
  return (
    <section>
      <MovieRecom genre="New Movies" />
      <MovieRecom genre="Top Movies" />
      <MovieRecom genre="Popular Movies" />
    </section>
  );
}
