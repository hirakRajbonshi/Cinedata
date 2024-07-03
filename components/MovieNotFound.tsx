import Link from "next/link";
export default function MovieNotFound() {
  return (
    <section className="flex justify-center items-center py-5 h-vw w-vw">
      <div className="h-[15rem] w-[20rem] flex flex-col bg-secondary items-center justify-center gap-3 rounded-lg">
        <h1 className="text-2xl font-bold">Movie Not Found</h1>
        <Link className="text-xl font-semibold underline" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
