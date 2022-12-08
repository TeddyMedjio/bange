import React from "react";
import Actualite from "../components/Actualite";
import Caroussel from "../components/Caroussel";
import Categories from "../components/Categories";
import MyModal from "../components/Modal";
import Video from "../components/Video";
import Mapbox from "../components/Mapbox";

const Acceuil = () => {
  return (
    <div>
      <MyModal />
      <Caroussel />
      <Categories />
      <Video />
      <Actualite />
      <Mapbox />
    </div>
  );
};

export default Acceuil;
