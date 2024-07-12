import { NextResponse } from "next/server";

async function getData(id: string) {
  const API_KEY = process.env.TMDb_API_KEY;
  if (!API_KEY) {
    throw new Error("API key is not defined");
  }
  let url = "";
  if (id == "0") {
    //ontop
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=500`;
  } else if (id == "1") {
    //popular
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&language=en-US&page=1&release_date.gte={min_date}&release_date.lte={max_date}&vote_count.gte=2000`;
  } else if (id == "2") {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-04-01&release_date.lte=2024-05-20`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: 'Missing "id" query parameter' },
      { status: 400 }
    );
  }

  try {
    const data = await getData(id);
    // const data = { name: "abc" };
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
