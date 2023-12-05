import React from "react";
import { My_event } from "../lib/interface_event";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/sanityImageUrl";

interface Props {
  event: My_event;
}
const EventOne = ({ event }: Props) => {
  return (
    <div className={`grid grid-cols-3 event`}>
      <Link href={`/event/${event.slug.current}`}>
        <div className="h-96 relative">
          <Image
            src={urlFor(event.titulna_foto).url()}
            alt="Titulna foto"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="themes_padding">
          <h4 className="text_limit_h4 text-black">{event.nazov_podujatia}</h4>

          <p className="text-black">{event.text_podujatie}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventOne;
