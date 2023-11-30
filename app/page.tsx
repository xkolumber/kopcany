import React from "react";
import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";
import { prefetchDNS } from "react-dom";
import HomeIntro from "./components/HomeIntro";
import MapSection from "./components/MapSection";
import Themes from "./components/Themes";
import ThemesArticle from "./components/ThemesArticle";
import ThreeThemesArticle from "./components/ThreeThemesArticle";
import SliderNews from "./components/SliderNews";

const page = async () => {
  const query = `*[_type=='post']`;
  const data = (await client.fetch(query)) as Post[];
  return (
    <>
      <HomeIntro />
      <main className="padding_content bg-white">
        <MapSection />
        <Themes />
        <ThreeThemesArticle />
        <br></br>
        <SliderNews />
      </main>
    </>
  );
};

export default page;
