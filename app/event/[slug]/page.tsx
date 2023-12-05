import Image from "next/image";

import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Partners from "@/app/components/Partners";
import { My_event } from "@/app/lib/interface_event";
import Events from "@/app/components/Events";
import Navbar from "@/app/components/Navbar";

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as My_event;
  return (
    <>
      <div className="titulna_foto">
        <Navbar />
        <Image
          src={urlFor(data.titulna_foto).url()}
          alt="Mapa okolia Záhoria"
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">{data.nazov_podujatia}</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="text-black lg:w-3/6">{data.text_podujatie}</p>
          <div className="event_data text-black">
            <span>
              <h4>KDE</h4> <p>{data.kde}</p>
            </span>
            <span>
              <h4>KEDY</h4> <p>{data.kedy}</p>
            </span>
            <span>
              <h4>VSTUP</h4>
              <p>
                {data.vstup_bezna_cena} {data.vstup_vip}
              </p>
            </span>
            <button className="btn btn--primary">Zakúpiť lístky</button>
          </div>
        </div>
      </div>
      <Events />
    </>
  );
};

export default page;
