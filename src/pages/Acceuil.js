import React from "react";
import Actualite from "../components/Actualite";
import Caroussel from "../components/Caroussel";
import Categories from "../components/Categories";
import Map from "../components/Map";
import MyModal from "../components/Modal";
import Video from "../components/Video";

const Acceuil = () => {
  return (
    <div>
      <MyModal />
      <Caroussel />
      <Categories />
      <Video />
      <Actualite />
      <Map />
    </div>
  );
};

export default Acceuil;
