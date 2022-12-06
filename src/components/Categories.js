import React from "react";
import hypotheque from "../img/icons/Hypothèques.svg";
import Auto from "../img/icons/Auto.svg";
import rural from "../img/icons/Crédit.svg";
import Carte from "../img/icons/Cartes.svg";
import Epargne from "../img/icons/Epargne.svg";
import Service from "../img/icons/Service.svg";
import Micro from "../img/icons/Micro.svg";
import MoneyGram from "../img/icons/MoneyGram.png";
import "./Animation.css";

const Categories = () => {
  return (
    <div className="bg-[#F8FCFF] py-24">
      <div className="container mx-auto">
        <h2 className="pb-10 md:py-0 md:pb-20 text-3xl font-bold text-[#018539] text-center uppercase">
          Que cherchez-vous aujourd’hui?
        </h2>
        <div className=" mx-auto flex flex-wrap items-center justify-center gap-5 w-full md:w-[85%] ">
          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex flex-col items-center justify-center py-10"
          >
            <div className=" z-50 space-y-5 flex flex-col items-center px-10">
              <img src={hypotheque} className=" w-20" />
              <h3 className="text-xl font-bold text-[#018539]">Hypothèques</h3>
              <p className="text-center">
                Ne poussez pas beaucoup de porte pour ouvrir la votre
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex flex-col items-center justify-center py-10"
          >
            <div className=" z-50 space-y-5 flex flex-col items-center px-10">
              <img src={Auto} className=" w-[110px] pt-2" />
              <h3 className="text-xl font-bold text-[#018539]">Auto Bange</h3>
              <p className="text-center">
                Avec Bange vous pouvez remplir votre rêve de nouvelle voiture
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex"
          >
            <div className="z-50 space-y-5 flex flex-col items-center px-10">
              <img src={rural} className="absolute w-20 top-9" />
              <h3 className="text-xl font-bold text-[#018539] pt-12">
                Crédit Conso
              </h3>
              <p className="text-center">
                Le crédit qui convient à tous mes besoins
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex flex-col items-center justify-center py-10"
          >
            <div className=" z-50 space-y-5 flex flex-col items-center px-8">
              <img src={Carte} className=" w-20" />
              <h3 className="text-xl font-bold text-[#018539]">Carte GIMAC</h3>
              <p className="text-center">
                Disponibilité de vos cartes GIMAC dans toutes nos agences
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex"
          >
            <div className="z-50 space-y-5 flex flex-col items-center px-10">
              <img src={Epargne} className="absolute w-24 top-9" />
              <h3 className="text-xl font-bold text-[#018539] pt-12">
                Epargne Enfants
              </h3>
              <p className="text-center">
                Epargner pour l’avenir de vos enfants
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex flex-col items-center justify-center py-10"
          >
            <div className=" z-50 space-y-5 flex flex-col items-center px-10">
              <img src={Service} className=" w-18" />
              <h3 className="text-xl font-bold text-[#018539]">Service SMS</h3>
              <p className="text-center">
                Service en temps réel pour les informations sur votre compte
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex"
          >
            <div className="z-50 space-y-5 flex flex-col items-center px-10">
              <img src={Micro} className="absolute w-20 top-9" />
              <h3 className="text-xl font-bold text-[#018539] pt-12">
                Micro Banque
              </h3>
              <p className="text-center">
                Rejoignez la révolution des petites choses
              </p>
            </div>
          </a>

          <a
            href="#"
            className="card relative drop-shadow-md transition duration-500 hover:drop-shadow-xl flex"
          >
            <div className="z-50 space-y-5 flex flex-col items-center px-10">
              <img src={MoneyGram} className="absolute w-24 top-6" />
              <h3 className="text-xl font-bold text-[#018539] pt-[70px]">
                MoneyGram
              </h3>
              <p className="text-center">
                Service d’envoi et de réception d’argent partout dans le monde
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
