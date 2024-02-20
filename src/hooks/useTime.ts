import moment from "moment";
import { useEffect, useState } from "react";

import { AvailableSections } from "../utils";

const updateState = (): AvailableSections => {
  const currentTime = moment().format("LTS");
  const timeParts = currentTime.split(":");

  // const hours = parseInt(timeParts[0], 10);
  // const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2], 10);

  // if (hours === 18 && minutes < 20) {
  if (seconds <= 20) {
    return {
      text: false,
      banner: false,
      video: false,
      comments: true,
      picture: "Money Flow",
    };
  // } else if (hours >= 18 && minutes >= 20 && hours < 21) {
  } else if (seconds > 20 && seconds <= 40) {
    return {
      video: true,
      banner: true,
      text: true,
      comments: true,
      picture: false,
    };
  } else {
    return {
      video: false,
      comments: true,
      banner: false,
      text: false,
      picture: "Traffic Increase",
    };
  }
};

export const useTime = () => {
  const [state, setState] = useState<AvailableSections>(updateState());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(() => updateState());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return state;
};
