"use client";
import { useState, useEffect } from "react";
interface props {
  title: string;
}
export default function MovieTrailer(title: props) {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const searchVideo = async (title: string) => {
      const url = `/api/trailer?title=${title}`;
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
    <>
      <iframe
        className="relative md:hidden"
        allow="autoplay; fullscreen;"
        width="320"
        height="180"
        src={embedURL}
      />
      <iframe
        className="relative hidden md:block"
        allow="autoplay; fullscreen;"
        width="960"
        height="540"
        src={embedURL}
      />
    </>
  );
}
