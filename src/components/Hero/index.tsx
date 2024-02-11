import { useContext } from "react";

import { traffic_increase, money_flow } from "./assets";
import { availableSectionsContext, AvailableSections } from "../../utils";

export const Hero = () => {
  const { video, picture }  = useContext(availableSectionsContext);

  return <>
    {video && <Video/>}
    {picture && <Image type={picture}/>}
  </>
};

type ImageProps = {
  type: AvailableSections["picture"]
}
const Image = ({ type }: ImageProps) => {
  return (
    <div className="w-full">
      <img className="w-full h-full" src={type === "Money Flow" ? money_flow : traffic_increase} alt="" />
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
