import React, { useEffect, useState } from "react";
import particulier from "../img/icons/Icon material-person-pin.svg";
import building from "../img/icons/Icon awesome-building.svg";
import localisation from "../img/icons/Icon metro-location.svg";
import user from "../img/icons/Icon awesome-user-shield.svg";
import arrow from "../img/icons/Icon ionic-ios-arrow-down.svg";
import logo from "../img/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // fermer le dropwdown menu quant on click dans le vide
  useEffect(() => {
    let handler = () => {
      setDropdown(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div>
      <div className=" sticky bg-white drop-shadow-md pb-3 z-50">
        {/* Menu secondaire */}
        <div className="bg-gray-100 border-gray-200 border-b-2 ">
          <div className="flex items-center flex-col lg:flex-row md:justify-between container mx-auto lg:w-[85%]">
            {/* menu gauche */}
            <div className="flex items-center space-x-5 mt-2 md:mt-0">
              <a
                href="#"
                className="flex items-center text-[#142026] transition duration-300 ease-in-out hover:underline decoration-1 hover:text-[#018539]"
              >
                <img src={particulier} className="mr-2" alt="icon de profil" />
                Paticulier
              </a>
              <a
                href="#"
                className="flex items-center text-[#142026] transition duration-300 ease-in-out hover:underline decoration-1 hover:text-[#018539]"
              >
                <img src={building} className="mr-2" alt="icon d'immeuble" />
                Entreprise
              </a>
              <a
                href="#"
                className="flex items-center text-[#142026] transition duration-300 ease-in-out hover:underline decoration-1 hover:text-[#018539]"
              >
                <img
                  src={localisation}
                  className="mr-2"
                  alt="icon de localisation"
                />
                Nos Agences
              </a>
            </div>
            {/* Bouton web banking */}
            <a
              href="#"
              className="flex items-center justify-center text-white bg-[#13B67A] w-full py-2 lg:w-auto mt-2 md:mt-0 md:px-4 md:h-full md:py-3 transition duration-300 ease-in-out hover:bg-[#018539]"
            >
              <img src={user} className="mr-2" alt="icon shield" /> Web Banking
            </a>
          </div>
        </div>

        {/* Menu principal */}
        <div className=" container flex items-center mx-auto w-[85%] justify-between md:px-0 mt-4 ">
          {/* logo */}
          <a href="#">
            <img src={logo} alt="logo bange bank" />
          </a>

          {/* middle menu */}
          <ul className="hidden lg:flex space-x-10 ">
            <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]  ">
              <a href="#">Acceuil</a>
            </li>
            <li className="text-lg font-bold hover:text-[#018539]">
              <a href="#">Produits & Services</a>
            </li>
            <li
              onClick={() => {
                setDropdown(!dropdown);
              }}
              className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]"
            >
              <a href="#" className="flex flex-row items-center">
                À propos de nous
                <img
                  src={arrow}
                  className="ml-2 mt-1 w-3"
                  alt="icon arrow-down"
                />{" "}
              </a>
              {/* toggle menu */}
              <ul
                className={`absolute bg-white p-6 rounded-md flex flex-col space-y-5 pl-5 top-[150px] transition duration-500 ease-in-out ${
                  dropdown ? "block" : "hidden"
                }`}
              >
                <li className="text-lg font-bold text-black ">
                  <a href="#" className="hover:text-[#018539]">
                    Qui sommes nous ?
                  </a>
                </li>
                <li className="text-lg font-bold text-black">
                  <a href="#" className="hover:text-[#018539]">
                    Notre histoire
                  </a>
                </li>
                <li className="text-lg font-bold text-black">
                  <a href="#" className="hover:text-[#018539]">
                    Nos valeurs
                  </a>
                </li>
                <li className="text-lg font-bold text-black ">
                  <a href="#" className="hover:text-[#018539]">
                    Notre positionnement
                  </a>
                </li>
              </ul>
            </li>

            <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]">
              <a href="#">Nos Actualités</a>
            </li>
            <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* langage selection */}
          <select
            name="lang"
            className="hidden lg:block text-sm font-bold bg-[#ffffff] text-[#018539] border-gray-200 border-[1px] px-3 py-2 rounded-[5px]"
          >
            <option
              value="fr"
              className="hover:bg-[#018539] hover:text-white px-4  text-sm "
            >
              Français
            </option>
            <option value="En" className="bg-[#ffffff] px-4 text-sm">
              English
            </option>
            <option value="Es" className="bg-[#ffffff] px-4 font text-sm">
              Español
            </option>
          </select>

          {/* <!-- Hamburger Icon --> */}
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden cursor-pointer"
          >
            <button className=" text-5xl text-[#018539] pt-4">
              <ion-icon
                name={open ? "close-outline" : "menu-outline"}
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Mobile Menu --> */}
      <div
        className={`absolute transition-all duration-300 top-[200px] md:top-[150px] -bottom-72 bg-[#F8FCFF] w-screen h-full pt-8 pl-6 z-10 lg:hidden ${
          open ? "-translate-x-[0px]" : "-translate-x-[1000px]"
        }`}
      >
        <ul className="flex flex-col space-y-6 mb-8 md:mt-10 md:pl-10">
          <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]  ">
            <a href="#">Acceuil</a>
          </li>

          <li className="text-lg font-bold hover:text-[#018539]">
            <a href="#">Produits & Services</a>
          </li>

          <li
            onClick={() => setVisible(!visible)}
            className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539] "
          >
            <a href="#" className="flex flex-row items-center">
              À propos de nous
              <img
                src={arrow}
                className="ml-2 mt-1 w-3"
                alt="icon arrow-down"
              />{" "}
            </a>
          </li>
          <li
            className={`flex flex-col space-y-5 pl-5 text-lg font-bold text-[#018539] ${
              visible ? "hidden" : "block"
            }`}
          >
            <a href="#">Notre positionnement</a>
            <a href="#">Qui sommes nous ?</a>
            <a href="#">Notre histoire</a>
            <a href="#">Nos valeurs</a>
          </li>
          <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]">
            <a href="#">Nos Actualités</a>
          </li>

          <li className="text-lg font-bold transition duration-300 ease-in-out hover:text-[#018539]">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* langage selection */}
        <select
          name="lang"
          className="md:ml-9 text-sm font-bold bg-[#ffffff] text-[#018539] border-gray-200 border-[1px] px-3 py-2 rounded-[5px]"
        >
          <option
            value="fr"
            className="hover:bg-[#018539] hover:text-white px-4  text-sm "
          >
            Français
          </option>
          <option value="En" className="bg-[#ffffff] px-4 text-sm">
            English
          </option>
          <option value="Es" className="bg-[#ffffff] px-4 font text-sm">
            Español
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
