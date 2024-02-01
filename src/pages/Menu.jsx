/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import close from "../../Icons/close.svg";
import xmark from "../../Icons/xmark.svg";
import location from "../../Icons/location.svg";

const Menu = () => {
  const [isClick, setIsclick] = useState(false);

  const bots = () => {
    setIsclick(!isClick);
  };

  return (
    <>
      <div className="bg-powerblue p-2 font-bold text-powerwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex lg:items-center items-center justify-between lg:justify-center h-16">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <a href="#">Dominos Pizza</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 gap-4 font-bold">
                <a
                  href="#"
                  className="hover:bg-powerdarkblue rounded transition-all p-1">
                  Pedir minha pizza
                </a>
                <a
                  href="#"
                  className="hover:bg-powerdarkblue rounded transition-all p-2">
                  Cardápio
                </a>
                <a
                  href="#"
                  className="hover:bg-powerdarkblue rounded transition-all p-2">
                  Promoções
                </a>
                <a
                  href="#"
                  className="hover:bg-powerdarkblue rounded transition-all p-2">
                  Acompanhar Pedido
                </a>
                <div className="hidden lg:flex border border-powerwhite rounded-md text-center p-2 text-sm cursor-pointer">
                  <img
                    src={location.src}
                    alt="location"
                    className="w-6 h-6 mt-2"
                  />
                  <a href="#">
                    <p>
                      Veja a Dominos mais <br /> próximo
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md 
              hover:text-powerpink focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={bots}>
                {isClick ? (
                  <img src={xmark.src} alt="Fechar" />
                ) : (
                  <img src={close.src} alt="Abrir" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-powerdarkblue block rounded transition-all p-2">
                Pedir minha pizza
              </a>
              <a
                href="#"
                className="hover:bg-powerdarkblue block rounded transition-all p-2">
                Cardápio
              </a>
              <a
                href="#"
                className="hover:bg-powerdarkblue block rounded transition-all p-2">
                Promoções
              </a>
              <a
                href="#"
                className="hover:bg-powerdarkblue block rounded transition-all p-2">
                Acompanhar Pedido
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
