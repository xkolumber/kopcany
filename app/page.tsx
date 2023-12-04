import HomeIntro from "./components/HomeIntro";
import MapSection from "./components/MapSection";
import SliderNews from "./components/SliderNews";
import Themes from "./components/Themes";
import ThreeThemesArticle from "./components/ThreeThemesArticle";
import { Theme } from "./lib/interface_theme";
import { client } from "./lib/sanity";

const page = async () => {
  const query = `*[_type=='themes']`;
  const data = (await client.fetch(query)) as Theme[];
  return (
    <>
      <HomeIntro />
      <main className="padding_content bg-white">
        <MapSection />
        <Themes />
        <ThreeThemesArticle themes={data} />
        {/* {data.map((tema) => (
          <li>{tema.nazov_temy}</li>
        ))} */}

        <br></br>
        <SliderNews />
      </main>
    </>
  );
};

export default page;
