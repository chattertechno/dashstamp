import Image from "next/image";
import { HiPlay } from "react-icons/hi2";
import videoPlaceholder from "./video-bg.png";

const VideoSection = () => {
  return (
    <>


    <section className="relative flex justify-center items-center h-[60vh] my-10 md:my-0">
      <Image
        className="absolute top-0 left-0 w-full h-full rounded-3xl "
        src={videoPlaceholder}
        alt="video placeholder"
        />
      <HiPlay className="text-white z-20 h-20 w-20 cursor-pointer" />
    </section>
        </>
  );
};

export default VideoSection;
