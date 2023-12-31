import HomeIntro from "./components/HomeIntro";
import MapSection from "./components/MapSection";
import SliderNews from "./components/SliderNews";
import Themes from "./components/Themes";
import ThreeThemesArticle from "./components/ThreeThemesArticle";
import { Theme } from "./lib/interface_theme";
import { My_event } from "./lib/interface_event";
import { client } from "./lib/sanity";
import Events from "./components/Events";

const page = async () => {
  const query = `*[_type=='themes']`;
  const data = (await client.fetch(query)) as Theme[];

  return (
    <>
      <HomeIntro />
      <main className="bg-white">
        <div className="padding_content">
          <MapSection />
          <Themes />
          <ThreeThemesArticle themes={data} />

          <br></br>
          <SliderNews />
        </div>
        <Events />
      </main>
    </>
  );
};

export default page;
