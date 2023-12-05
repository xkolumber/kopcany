import React from "react";
import Navbar from "./Navbar";

const HomeIntro = () => {
  return (
    <div className="bg_image grid">
      <div className="padding_content intro_padding bg_image_dark justify-between">
        <Navbar />
        <div>
          <p>. . . .</p>
          <p>Mikulčice - Kopčany - Holíč - Hodonín</p>
          <h1>Lávkou cez Moravu</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
