import React from "react";
import Image from "next/image";
import { Theme } from "../lib/interface_theme";
import Link from "next/link";

interface Props {
  theme: Theme;
}

const ThemesArticle = ({ theme }: Props) => {
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
        <h4>{theme.nazov_temy}</h4>

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
