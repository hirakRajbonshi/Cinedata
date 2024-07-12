import { NextResponse } from "next/server";

async function getData(id: string, type: string) {
  const API_KEY = process.env.TMDb_API_KEY;
  if (!API_KEY) {
    throw new Error("API key is not defined");
  }

  const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&with_genres=${id}
`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  if (!id || !type) {
    return NextResponse.json(
      { error: 'Missing "id" query parameter' },
      { status: 400 }
    );
  }

  try {
    const data = await getData(id, type);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
