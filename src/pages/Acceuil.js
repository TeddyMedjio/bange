import React from "react";
import Actualite from "../components/Actualite";
import Caroussel from "../components/Caroussel";
import Categories from "../components/Categories";
import MyModal from "../components/Modal";
import Video from "../components/Video";
import Google from "../components/Google";

const Acceuil = () => {
  return (
    <div>
      <MyModal />
      <Caroussel />
      <Categories />
      <Video />
      <Actualite />
      <Google />
    </div>
  );
};

export default Acceuil;
