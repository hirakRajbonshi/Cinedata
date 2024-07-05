const searchVideo = async (title: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  // GET https://www.googleapis.com/youtube/v3/search
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=${YOUTUBE_API_KEY}`;
  const res = await fetch(url);
  if (res) {
    // const firstVideo = res.items[0].id.videoId
  }
};
export default async function MovieTrailer() {
  return <div></div>;
}
