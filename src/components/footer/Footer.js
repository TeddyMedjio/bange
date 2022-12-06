import React from "react";
import logo from "../../img/logo-footer.png";
import phone from "../../img/icons/phone.svg";
import location from "../../img/icons/Icon-location.svg";
import mail from "../../img/icons/mail.svg";
import facebook from "../../img/icons/facebook.svg";
import linkedin from "../../img/icons/linkedin.svg";
import CarousselFooter from "../CarousselFooter";

const Footer = () => {
  return (
    <div className="bg-[#F8FCFF] z-50">
      <div className="container m-auto w-[85%] flex flex-col md:flex-row justify-center md:justify-between py-20">
        {/* infos gauche */}
        <div className="space-y-8 md:basis-[40%]">
          <img src={logo} className="w-80 " alt="logo bange banque" />
          <div className="flex items-center">
            <img src={phone} className="mr-4 w-10" alt="icon phone" />
            <p className="font-bold text-lg">
              Tél:{" "}
              <span className="font-normal ml-3 underline text-[#018539]">
                (+237) 6 93 37 77 00
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <img src={location} className="mr-6 w-8" alt="icon phone" />
            <p className="font-bold text-lg">
              BP:{" "}
              <span className="font-normal ml-3 underline ">
                34692 Yaoundé-Cameroun <br /> (Boulevard du 20 mai)
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <img src={mail} className="mr-6 w-8" alt="icon phone" />
            <p className="text-lg underline text-[#018539]">
              rh.recrutement@bangecmr.com
            </p>
          </div>
        </div>

        {/* infos du millieu */}
        <div className="md:basis-[30%] ">
          <h3 className="font-bold uppercase text-2xl text-[#018539] mt-20 mb-10">
            Liens d’intérêt
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Entreprise</a>
            </li>
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Particulier</a>
            </li>
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Taux de change</a>
            </li>
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Simulateur de prêt</a>
            </li>
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Institutions</a>
            </li>
            <li className="hover:text-[#018539] text-lg">
              <a href="#">Bureau en Espagne</a>
            </li>
          </ul>
        </div>

        {/* infos de droite */}
        <div className="space-y-10 md:basis-[30%] ">
          <h3 className="font-bold uppercase text-2xl text-[#018539] mt-20">
            Nos correspondants
          </h3>
          {/* Caroussel */}
          <div className="h-[202px]">
            <CarousselFooter />
          </div>
        </div>
      </div>

      {/* footer infos */}
      <div className="bg-[#018539] py-5">
        <div className="container mx-auto w-[85%] flex flex-col-reverse items-center justify-between md:flex-row">
          <p className="font-bold text-white">
            © Copyright Bange Bank Cameroun
          </p>

          <p className="text-white">
            Website by: <span className="font-bold ml-2">N. jean claude</span>
          </p>
          <div className="flex items-center space-x-5">
            <p className="font-bold text-white">Suivez-nous:</p>
            <a href="">
              <img src={facebook} alt="logo facebook" />
            </a>
            <a href="">
              <img src={linkedin} alt="logo linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
