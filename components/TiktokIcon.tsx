import React from "react";
import { constants } from "buffer";

type Props = {
  size?: number;
};

const TiktokIcon = ({ size = 24 }: Props) => {
  return (
    <img
      src="./icon/tiktok-svgrepo-com.svg"
      alt="WhatsApp"
      width={size}
      height={size}
    />
  );
};

export default TiktokIcon;
