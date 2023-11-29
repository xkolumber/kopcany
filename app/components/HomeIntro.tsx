import React from "react";
import NavbarIntro from "./NavbarIntro";

const HomeIntro = () => {
  return (
    <div className="flex flex-col h-screen justify-between mx-auto px-4 sm:px-6 lg:px-96">
      <NavbarIntro />
      <div className="text">
        <p>. . . .</p>
        <p className="sm:text-lg lg:text-xl">
          Mikulčice - Kopčany - Holíč - Hodonín
        </p>
        <h1>Lávkou cez Moravu</h1>
      </div>
    </div>
  );
};

export default HomeIntro;
