import Link from "next/link";
import location from "../../../Icons/location.svg";
import xmark from "../../../Icons/xmark.svg";
import close from "../../../Icons/close.svg";
import { useState } from "react";

export const Menucardapio = () => {
  const [Cardclick, setCardclick] = useState(false);

  const boot = () => {
    setCardclick(!Cardclick);
  };

  return (
    <>
      <div className="bg-powerblue p-2 font-bold text-powerwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
          <div className="flex lg:items-center items-center justify-between lg:justify-center h-16">
            <div className="flex items-start">
              <div className="flex shrink-0">
                <a href="#">Inicio</a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 gap-4 font-bold">
                <Link href="#">Pedir minha pizza</Link>
                <Link href="#">Cardapio</Link>
                <Link href="#">Promoções</Link>
                <Link href="#">Acompanhar Pedido</Link>
                <div
                  className="hidden lg:flex border border-powerwhite rounded-sm text-center
               p-2 text-sm cursor-pointer">
                  <img src={location.src} alt="" className="w-6 h-6" />
                  <a href="#">
                    <p>Veja a dominos mais próximo</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md"
                onClick={boot}>
                {Cardclick ? (
                  <img src={xmark.src} alt="" />
                ) : (
                  <img src={close.src} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          {Cardclick && (
            <div className="md:hidden">
              <div className="pt-2 px-2 pb-3 space-y-1 sm:px-3">
                <Link href="Users/Cadastro" className="block">
                  <p>Pedir Minha pizza</p>
                </Link>
                <a
                  href="Cardapio/Cardapiolista"
                  className="p-2 hover:bg-powerdarkblue block rounded transition-all">
                  Cardápio
                </a>
                <a
                  href="Promo/Promocoes"
                  className="p-2 hover:bg-powerdarkblue block rounded transition-all">
                  Promoção
                </a>
                <a
                  href="Form/Formulario"
                  className="p-2 hover:bg-powerdarkblue block rounded transition-all">
                  Acompanhar Pedido
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Menucardapio;
