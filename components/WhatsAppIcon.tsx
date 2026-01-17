import React from "react";

type Props = {
  size?: number;
};

const WhatsAppIcon = ({ size = 24 }: Props) => {
  return (
    <img
      src="icon\Digital_Glyph_White.svg"
      alt="WhatsApp"
      width={size}
      height={size}
    />
  );
};

export default WhatsAppIcon;
