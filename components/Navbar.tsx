import Link from "next/link";
import SearchNav from "./SearchNav";
export default function Navbar() {
  return (
    <>
      <nav className="fixed flex items-center justify-between h-[4rem] w-[100vw] bg-secondary px-10">
        <Link href="/">FilmFolio</Link>
        <div className="sm:hidden">
          <SearchNav />
        </div>
        <div className="hidden sm:flex items-center justify-between gap-10">
          <SearchNav />
          <div>Category</div>
          <Link href="/subsribe">Subscribe</Link>
        </div>
      </nav>
      <div className="h-[4rem]"></div>
    </>
  );
}
