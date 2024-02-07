import Localpizza from "./Localpizza";
import bikeicon from "../../../Icons/Iconbuy/bikeicon.svg";
import personicon from "../../../Icons/Iconbuy/personicon.svg";
import Link from "next/link";
import Footer from "../Footer";

const Cadastro = () => {
  return (
    <>
      <Localpizza />
      <div className="justify-center items-center sm:justify-center sm:items-center max-w-8xl my-5 mx-3 lg:mx-36 h-[500px]">
        <p className="text-2xl font-bold">Encontre a loja mais próxima</p>
        <div className="flex-row border border-bg-powerdarkgray h-72">
          <div className="flex bg-powerdarkblue text-powerwhite font-semibold p-2">
            Escolher a entrega desejada
          </div>
          <div className="flex justify-around items-center text-center font-semibold my-4 lg:mx-96">
            <div className="w-20 h-20 rounded-full bg-powerblue hover:bg-powerdarkblue transition-all cursor-pointer">
              <img
                src={bikeicon.src}
                alt="BIKE-ICON-MOBILE"
                className="w-10 h-10 mx-5 my-4"
              />
              <p className="my-7">Delivery</p>
            </div>
            <p>-OU-</p>
            <div className="flex-col w-20 h-20 rounded-full bg-powerblue hover:bg-powerdarkblue transition-all cursor-pointer">
              <Link href="/Form/Formulario">
                <img
                  src={personicon.src}
                  alt="PERSON-ICON-MOBILE"
                  className="w-10 h-10 mx-5 my-4"
                />

                <p className="my-7">Buscar na Loja</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cadastro;
