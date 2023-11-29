import React from "react";
import Image from "next/image";

const MapSection = () => {
  return (
    <div className="padding_content bg-white">
      <Image
        src="/kopcany_video.jpg"
        alt="Video z Kopcian"
        layout="responsive"
        width={500}
        height={500}
      />
    </div>
  );
};

export default MapSection;
