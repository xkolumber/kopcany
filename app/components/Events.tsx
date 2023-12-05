import React from "react";
import { My_event } from "../lib/interface_event";
import EventOne from "./EventOne";
import { client } from "../lib/sanity";

const Events = async () => {
  const query2 = `*[_type=='events']`;
  const events = (await client.fetch(query2)) as My_event[];
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">Podujatia</h2>
        <p className="text-black">
          V blízkej budúcnosti nás čakajú tieto podujatia:
        </p>
        <div className="grid grid-cols-3">
          {events.map((event) => (
            <EventOne key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
