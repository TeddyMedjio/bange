import React from "react";
import kribi from "../img/kribi.jpg";
import bange from "../img/bange.jpg";
import promote from "../img/promote.jpg";

const Actualite = () => {
  return (
    <div>
      <div className="container mx-auto py-24  flex flex-col items-center justify-center md:block">
        <div className="mx-auto pb-10 md:py-0 md:pb-20 flex items-center justify-between w-[67%] ">
          <h2 className=" text-[28px] md:text-3xl font-bold text-[#018539] uppercase">
            notre actualité
          </h2>
          <a
            href="#"
            className="hidden md:block font-bold text-sm text-[#018539] border-[#018539] border-[1px] px-7 py-2 rounded-full hover:bg-[#13B67A] hover:text-white transition duration-500 ease-in-out"
          >
            Voir toutes les Actualités
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 md:mb-0">
          <div className="bg-white border-[#018539] border-[1px] leading-7 w-[300px] rounded-md pb-7 drop-shadow-md transition duration-500 hover:drop-shadow-xl">
            <img src={kribi} className="w-full" />
            <div className="px-4">
              <h3 className="text-[25px] font-bold text-[#018539] my-5">
                Ouverture de l’agence de Kribi
              </h3>
              <p className="my-5">
                Vendredi le 30 septembre 2022, BANGE BANK CAMEROUN a procédé à
                sa cérémonie d’ouverture...
              </p>
              <a href="#" className="font-bold text-[#018539] underline">
                Lire plus
              </a>
            </div>
          </div>

          <div className="bg-white border-[#018539] border-[1px] leading-7 w-[300px] rounded-md pb-7 drop-shadow-md transition duration-500 hover:drop-shadow-xl">
            <img src={bange} className="w-full" />
            <div className="px-4">
              <h3 className="text-[25px] font-bold text-[#018539] my-5">
                Entree en bourse de Bange SA à la BVMAC 
              </h3>
              <p className="my-5">
                Le 28 septembre 2022, le compartiment actions de la BVMAC, la
                bourse régionale ...
              </p>
              <a href="#" className="font-bold text-[#018539] underline">
                Lire plus
              </a>
            </div>
          </div>

          <div className="bg-white border-[#018539] border-[1px] leading-7 w-[300px] rounded-md pb-7 drop-shadow-md transition duration-500 hover:drop-shadow-xl">
            <img src={promote} className="w-full" />
            <div className="px-4">
              <h3 className="text-[25px] font-bold text-[#018539] my-5">
                Bange Bank Cameroun à Promote 2022
              </h3>
              <p className="my-5">
                Première arrivée sur le marché bancaire camerounais, la filiale
                locale de la Banque nationale...
              </p>
              <a href="#" className="font-bold text-[#018539] underline">
                Lire plus
              </a>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="md:hidden text-center font-bold text-sm text-[#018539] border-[#018539] border-[1px] px-7 py-2 rounded-full hover:bg-[#13B67A] hover:text-white transition duration-500 ease-in-out"
        >
          Voir toutes les Actualités
        </a>
      </div>
    </div>
  );
};

export default Actualite;
