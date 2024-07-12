"use client";
import Image from "next/image";
import { MovieData } from "@/constants/types";
const getRottenTomatoRatings = (data: MovieData) => {
  let RottenTomatoRatings = data.Ratings.filter(
    (e) => e.Source === "Rotten Tomatoes"
  );
  return RottenTomatoRatings[0];
};
interface InfoProps {
  label: string;
  value: string;
}

const Info: React.FC<InfoProps> = ({ label, value }) => {
  return (
    <p className="text-base md:text-2xl text-wrap">
      <span className="font-semibold">{label}: </span>
      {value}
    </p>
  );
};
export default function MovieDetailsCard(data: MovieData) {
  const RottenTomatoRatings = getRottenTomatoRatings(data);
  return (
    <div className="flex flex-col items-center gap-3 mt-4 mb-2 w-[100vw] md:flex-row md:justify-center md:items-start md:px-[10rem]">
      <div className="md:text-2xl">
        <h1 className="text-3xl font-bold mb-2 text-center">{data.Title}</h1>
        <div className="flex flex-col items-center bg-secondary p-1 border border-[#ffffff18]">
          <Image
            className="rounded-lg md:hidden"
            src={data.Poster}
            width={300}
            height={400}
            alt={`${data.Title} Poster`}
          />
          <Image
            className="rounded-lg hidden md:block"
            src={data.Poster}
            width={500}
            height={700}
            alt={`${data.Title} Poster`}
          />
          <button className="p-2 px-3 bg-secondary text-s rounded-lg font-semibold w-[100%]">
            Watch Movie
          </button>
        </div>
        <div className="flex justify-around w-full mt-2">
          <div className="text-center w-[30%]">
            <p className="text-2xl md:text-4xl">{data.Metascore}</p>
            <p className="text-sm md:text-lg">Metascroe</p>
          </div>
          <div className="text-center w-[40%]">
            <p className="text-2xl md:text-4xl">{RottenTomatoRatings.Value}</p>
            <p className="text-sm md:text-lg">{RottenTomatoRatings.Source}</p>
          </div>
          <div className="text-center w-[30%]">
            <p className="text-2xl md:text-4xl">{data.imdbRating}</p>
            <p className="text-sm md:text-lg">IMDb Ratings</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-[2rem] gap-2 md:max-w-[50%] md:mt-[3rem]">
        <Info label="Title" value={data.Title} />
        <Info label="Released" value={data.Released} />
        <Info label="Year" value={data.Year} />
        <Info label="Director" value={data.Director} />
        <Info label="Actors" value={data.Actors} />
        <Info label="Writer" value={data.Writer} />
        <Info label="Genre" value={data.Genre} />
        <Info label="Plot" value={data.Plot} />
        <Info label="Rated" value={data.Rated} />
        <Info label="Runtime" value={data.Runtime} />
        <Info label="Language" value={data.Language} />
        <Info label="Country" value={data.Country} />
        <Info label="Awards" value={data.Awards} />
        <div>
          <p className="font-semibold md:text-2xl">Ratings: </p>
          <div className="ml-[1rem] md:ml-[3rem]">
            {data.Ratings.map((rating, index) => (
              <Info key={index} label={rating.Source} value={rating.Value} />
            ))}
            <Info label="Metascore" value={data.Metascore} />
            <Info label="IMDb Rating" value={data.imdbRating} />
            <Info label="IMDb Votes" value={data.imdbVotes} />
          </div>
        </div>
        <Info label="Type" value={data.Type} />
        <Info label="Production" value={data.Production} />
        <Info label="DVD" value={data.DVD} />
        <Info label="Website" value={data.Website} />
        <Info label="IMDb ID" value={data.imdbID} />
      </div>
    </div>
  );
}
