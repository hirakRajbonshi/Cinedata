import { NextResponse } from "next/server";

async function getData(id: string) {
  const API_KEY = process.env.OMDb_API_KEY;
  if (!API_KEY) {
    throw new Error("API key is not defined");
  }

  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);

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
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
