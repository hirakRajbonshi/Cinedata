"use client";
import { useState, useEffect } from "react";
interface props {
  title: string;
}
export default function MovieTrailer(title: props) {
  const [videoId, setVideoId] = useState("");

  const YT_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  console.log(YT_API_KEY);
  useEffect(() => {
    const searchVideo = async (title: string) => {
      title = title + " trailer";
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=${YT_API_KEY}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.error("Network response was not ok");
          return;
        }

        const data = await res.json();
        console.log(data);
        if (data.items && data.items.length > 0) {
          const firstVideoId = data.items[0].id.videoId;
          setVideoId(firstVideoId);
        } else {
          setVideoId("");
        }
      } catch (error) {
        console.error("Fetching error: ", error);
        setVideoId("");
      }
    };
    searchVideo(title.title);
  }, []);
  const embedURL = `https://www.youtube.com/embed/${videoId}`;
  return (
    <iframe
      className="relative"
      allow="autoplay; fullscreen;"
      width="320"
      height="180"
      src={embedURL}
    />
  );
}
