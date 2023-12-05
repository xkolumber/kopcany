import React from "react";
import { My_event } from "../lib/interface_event";
import EventOne from "./EventOne";

interface Props {
  events: My_event[];
}

const Events = ({ events }: Props) => {
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">Podujatia</h2>
        <p className="text-black">
          V blízkej budúcnosti nás čakajú tieto podujatia:
        </p>
        {events.map((event) => (
          <EventOne key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
