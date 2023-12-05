"use client";

import { useEffect, useState } from "react";
import { Theme } from "../lib/interface_theme";
import ThemesArticle from "./ThemesArticle";

interface Props {
  themes: Theme[];
}

const ThreeThemesArticle = ({ themes }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let articlesToShow = 1;

  if (windowWidth >= 768 && windowWidth < 1024) {
    articlesToShow = 2;
  } else if (windowWidth >= 1024) {
    articlesToShow = 3;
  } else if (windowWidth >= 1400) {
    articlesToShow = 4;
  }
  const displayedThemes = themes.slice(0, articlesToShow);

  return (
    <>
      <div className="grid grid-cols-3">
        {displayedThemes.map((theme) => (
          <ThemesArticle key={theme._id} theme={theme} />
        ))}
      </div>
    </>
  );
};

export default ThreeThemesArticle;
