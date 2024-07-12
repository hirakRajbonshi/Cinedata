import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import SearchNav from "./SearchNav";
export default function Navbar() {
  return (
    <>
      <nav className="fixed flex items-center justify-between z-[100] h-[4rem] w-[100vw] bg-secondary px-10 md:text-2xl">
        <Link className="mr-3" href="/">
          FilmFolio
        </Link>
        <div className="md:hidden">
          <SearchNav />
        </div>
        <div className="dropdown dropdown-left bg-transparent w-[2rem] md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-transparent m-1"
          >
            <IoMenu size={30} />
          </div>
          <ul
            tabIndex={0}
            className="relative dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
          >
            <li>
              <a href="">C1</a>
            </li>
            <li>
              <a href="">C2</a>
            </li>
            <li>
              <a href="">C3</a>
            </li>
            <li>
              <a href="">C4</a>
            </li>
            <li>
              <Link href="/auth/subscribe">Subscribe</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-between gap-10">
          <SearchNav />
          <div className="hidden md:block dropdown bg-transparent">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent text-2xl border-transparent m-1"
            >
              Catergory
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>C1</a>
              </li>
              <li>
                <a>C2</a>
              </li>
            </ul>
          </div>
          <Link
            className="text-white hover:bg-black rounded-lg md:transition-colors ease-in duration-75	p-2"
            href="/auth/subscribe"
          >
            Subscribe
          </Link>
        </div>
      </nav>
      <div className="h-[4rem]"></div>
    </>
  );
}
