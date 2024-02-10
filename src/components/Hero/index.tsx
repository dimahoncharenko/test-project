import { useContext } from "react";

import { traffic_increase } from "./assets";
import { availableSectionsContext } from "../../utils";

export const Hero = () => {
  const { video, picture }  = useContext(availableSectionsContext);

  return <>
    {video && <Video/>}
    {picture && <Image/>}
  </>
};

const Image = () => {
  return (
    <div className="w-full">
      <img className="w-full h-full" src={traffic_increase} alt="" />
    </div>
  );
};

const Video = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/wVkD89V1-BQ?si=EjOepLAbU1xxpnTk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
