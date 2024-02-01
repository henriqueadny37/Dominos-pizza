/* eslint-disable @next/next/no-img-element */

import Combopizza from "../Fotos/Combopizza.png";
import Pecaaquimobile from "../PhotoMobile/Pecaaquimobile.png";
import Footerpizza from "../Fotos/Footerpizza.png";
import Pizzamobile from "../PhotoMobile/Pizzamobile.png";
import Combomobile from "../PhotoMobile/Combomobile.png";
import BannerMobile from "../PhotoMobile/BannerMobile.png";
import Footermobile from "../PhotoMobile/Footermobile.png";
import Novobanner from "../Fotos/Novobanner.png";

const Main = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:w-auto gap-4 px-5 items-center justify-center text-center">
        <div className=" hidden md:flex">
          <img src={Novobanner.src} alt="Banner-1" />
        </div>
        <div className="flex md:hidden">
          <img src={BannerMobile.src} alt="MOBILE" />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-col">
            <div className="hidden sm:flex mb-4">
              <img src={Pecaaquimobile.src} alt="40%_de_desconto" />
            </div>
            <div className="flex my-3 sm:hidden ">
              <img src={Pizzamobile.src} alt="grande_peca_aqui" />
            </div>
            <div className="hidden sm:flex mt-3">
              <img src={Combopizza.src} alt="" />
            </div>
            <div className="flex sm:hidden">
              <img src={Combomobile.src} alt="" />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-4 my-3 justify-center items-center">
        <div className="hidden sm:flex">
          <img src={Footerpizza.src} alt="FOOTER-BANNER" />
        </div>
        <div className="flex m-1 sm:hidden">
          <img src={Footermobile.src} alt="FOOTER-MOBILE" />
        </div>

        <ul className="flex flex-col gap-4 w-full m-3 box-border justify-center items-center text-center text-powerwhite font-semibold sm:hidden">
          <li className="bg-powerpink w-72 h-10 p-2 cursor-pointer rounded-sm shadow-md hover:bg-powerdarkpink">
            <a href="#">Cardápio</a>
          </li>
          <li className="bg-powerpink w-72 h-10 p-2 cursor-pointer rounded-sm shadow-md hover:bg-powerdarkpink">
            <a href="#">Promoções</a>
          </li>
          <li className="bg-powerpink w-72 h-10 p-2 cursor-pointer rounded-sm shadow-md hover:bg-powerdarkpink">
            <a href="#">Meu perfil</a>
          </li>
          <li className="bg-powerpink w-72 h-10 p-2 cursor-pointer rounded-sm shadow-md hover:bg-powerdarkpink">
            <a href="#">Acompanhar pedido</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Main