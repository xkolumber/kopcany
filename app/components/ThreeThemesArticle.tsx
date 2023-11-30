"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import ThemesArticle from "./ThemesArticle";

const ThreeThemesArticle = () => {
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
  }
  return (
    <>
      <div className="flex flex-row gap-8">
        {/* Render the desired number of ThemesArticle components */}
        {Array.from({ length: articlesToShow }).map((_, index) => (
          <ThemesArticle key={index} />
        ))}
      </div>
    </>
  );
};

export default ThreeThemesArticle;
