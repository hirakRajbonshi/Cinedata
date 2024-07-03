"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function SearchNav() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setSearch("");
  }, []);
  const handleClick = () => {
    router.push(`/search/${search}`);
  };
  return (
    <div className="flex items-center h-[100%] bg-primary py-1 px-2 border-b-2 ">
      <input
        className="bg-transparent outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleClick();
          }
        }}
        type="text"
        placeholder="Search"
      />
      <CiSearch onClick={handleClick} />
    </div>
  );
}
