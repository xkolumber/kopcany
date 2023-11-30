import React from "react";
import Image from "next/image";

const ThemesArticle = () => {
  return (
    <div className={`flex flex-col text-black relative`}>
      <div className="h-96 relative">
        <Image
          src="/themes1.jpg"
          alt="Mapa okolia Záhoria"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="themes_padding">
        <h4>Veľká Morava a Slovania na našom území</h4>
        <p>
          but also the leap into electronic typesetting, remaining essentially
          unchanged. but also the leap into electronic typesetting, remaining
          essentially unchanged.but also the leap into electronic typesetting,{" "}
        </p>
        <br></br>
        <p>
          remaining essentially unchanged. but also the leap into electronic
          typesetting, remaining essentially unchanged. but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default ThemesArticle;
