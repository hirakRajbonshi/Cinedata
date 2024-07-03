import Image from "next/image";
export default function MovieRecomCard() {
  return (
    <div>
      <div className="relative flex items-end min-w-[6rem] h-[10rem] md:min-w-[10rem] md:h-[13rem]">
        <Image src="/infinitywar.webp" fill={true} alt="Avengers Endgame" />
      </div>
      {/* <h1 className="relative  text-sm font-white">Movie Name</h1> */}
    </div>
  );
}
