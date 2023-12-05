import React from "react";
import Image from "next/image";
import { Theme } from "../lib/interface_theme";
import { urlFor } from "../lib/sanityImageUrl";
import Link from "next/link";

interface Props {
  theme: Theme;
}

const ThemesArticle = ({ theme }: Props) => {
  return (
    <div className={`flex flex-col text-black relative article_card`}>
      <Link href={`/theme/${theme.slug.current}`}>
        <div className="h-96 relative">
          <Image
            src={urlFor(theme.titulna_foto).url()}
            alt="Mapa okolia Záhoria"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="themes_padding">
          <h4 className="text_limit_h4">{theme.nazov_temy}</h4>

          <p className="text_limit_p">{theme.uvodny_text}</p>
        </div>
      </Link>
    </div>
  );
};

export default ThemesArticle;
