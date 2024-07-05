"use client";
import { useState } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [filter, setFilter] = useState("all");
  const handleFilterClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const id = target.id.toString();
    setFilter(filter);
  };
  return (
    <section>
      <div className="fixed dropdown dropdown-right dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto py-2 px-4 shadow text-s gap-1"
        >
          <li onClick={handleFilterClick} id="all">
            All
          </li>
          <li onClick={handleFilterClick} id="movie">
            Movie
          </li>
          <li onClick={handleFilterClick} id="series">
            Series
          </li>
        </ul>
      </div>

      <>{children}</>
    </section>
  );
}
