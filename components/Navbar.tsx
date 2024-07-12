import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import SearchNav from "./SearchNav";
export default function Navbar() {
  return (
    <>
      <nav className="fixed flex items-center justify-between z-[100] h-[4rem] w-[100vw] bg-secondary px-10 md:text-xl">
        <Link className="mr-3  font-bold" href="/">
          Cinedata
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
              <Link href="/category/Action">Action</Link>
            </li>
            <li>
              <Link href="/category/Adventure">Adventure</Link>
            </li>
            <li>
              <Link href="/category/Horror">Horror</Link>
            </li>
            <li>
              <Link href="/category/Comedy">Comedy</Link>
            </li>
            <li>
              <Link href="/category/Animated">Animated</Link>
            </li>
            <li className="bg-secondary rounded-lg text-white">
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
              className="btn bg-transparent text-xl border-transparent m-1"
            >
              Catergory
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li className="text-m font-semibold">
                <Link href="/category/Action">Action</Link>
              </li>
              <li className="text-m font-semibold">
                <Link href="/category/Adventure">Adventure</Link>
              </li>
              <li className="text-m font-semibold">
                <Link href="/category/Horror">Horror</Link>
              </li>
              <li className="text-m font-semibold">
                <Link href="/category/Comedy">Comedy</Link>
              </li>
              <li className="text-m font-semibold">
                <Link href="/category/Animated">Animated</Link>
              </li>
            </ul>
          </div>
          <Link
            className="font-semibold hover:bg-black rounded-lg md:transition-colors ease-in duration-75	p-2"
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
