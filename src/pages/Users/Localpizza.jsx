/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import cartminus from "../../../Icons/Iconbuy/cartminus.svg";
import { useState } from "react";
import xmark from "../../../Icons/xmark.svg";
import close from "../../../Icons/close.svg";
import userlog from "../../../Icons/Iconuser/userlog.svg";

const Localpizza = () => {
  const [yclick, setYclick] = useState(false);

  const xbots = () => {
    setYclick(!yclick);
  };

  return (
    <>
      <div className="bg-powerblue p-2 font-bold text-powerwhite">
        <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <div className="flex lg:items-center items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">Inicio</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex ml-4 items-center space-x-4 gap-4">
                <Link
                  href="/"
                  className=" hover:bg-powerdarkblue rounded-md transition-all p-2">
                  <img
                    src={userlog.src}
                    alt="USUÁRIO-DESKTOP"
                    className="w-6 h-6 ml-7"
                  />
                  <p>Fazer Login</p>
                </Link>
                <Link
                  href="#"
                  className="hover:bg-powerdarkblue rounded-md p-2">
                  <img
                    src={cartminus.src}
                    alt="CARRINHO-DESKTOP"
                    className="w-6 h-6 ml-5"
                  />
                  <p className="">carrinho</p>
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:ring-2 focus:ring-inset focus:ring-powerblack"
                onClick={xbots}>
                {yclick ? (
                  <img src={xmark.src} alt="" />
                ) : (
                  <img src={close.src} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
        {yclick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <div className="flex">
                <a href="#">Fazer Login</a>
                <Link href="#">
                  <img
                    src={userlog.src}
                    alt="Usuário"
                    className="w-6 h-6 mx-5"
                  />
                </Link>
              </div>
              <div className="flex">
                <a href="#" className="mt-3">
                  Carrinho
                </a>
                <Link href="#">
                  <img
                    src={cartminus.src}
                    alt="carrinho-mobile"
                    className="w-6 h-6 mx-10 mt-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Localpizza;
