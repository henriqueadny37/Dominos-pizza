import specialty from "../Fotos/Listacardapio/specialty.webp";
import sides from "../Fotos/Listacardapio/sides.webp";
import sandwiches from "../Fotos/Listacardapio/sandwiches.webp";
import dessert from "../Fotos/Listacardapio/dessert.webp";
import drinks from "../Fotos/Listacardapio/drinks.webp";
import Link from "next/link";
import Footer from "../Footer";

const Cardapiolista = () => {
  return (
    <>
      <div className="justify-center items-center my-10 max-w-5xl lg:mx-36">
        <div
          className="flex-col justify-between bg-powerblue 
          font-semibold text-powerwhite rounded-md text-center h-32 w-auto mx-10">
          <div className="my-10 sm:flex lg:mx-36">
            <p className="text-xl p-2 sm:m-2 sm:text-3xl text-wrap">
              Escolha sua forma de entrega
            </p>
            <br />
            <a
              href="#"
              className="bg-powerpink w-32 sm:w-36 sm:h-12 h-10 p-2 m-3 rounded-sm text-center text-xl
              hover:bg-powerdarkpink transition-all">
              Delivery
            </a>
            <span className="text-powerwhite font-serif text-xl mx-1 my-5">
              OU
            </span>
            <a
              href="#"
              className="bg-powerpink w-32 h-10 sm:w-36 sm:h-12 p-2 m-3 rounded-sm text-center text-nowrap text-xl
              hover:bg-powerdarkpink transition-all">
              Buscar na loja
            </a>
          </div>
        </div>
        <p className="p-2 text-powerblue text-sm my-8 mx-8 text-wrap">
          Este é o nosso cardápio nacional, para ver produtos disponivceis na
          sua região faça o login e insira o seu endereço
          <a href="#" className="underline hover:text-powerred">
            encontre a loja mais próxima
          </a>
        </p>
        <div className="flex-col justify-center items-center p-3">
          <div
            className="flex border border-powergray gap-10 font-bold text-powerblue text-2xl
           hover:bg-powerdarkblue hover:text-powerwhite cursor-pointer">
            <img src={specialty.src} alt="" />
            <Link href="#" className="my-3">
              <p>Pizzas</p>
            </Link>
          </div>
          <div
            className="flex border border-powergray gap-10 font-bold text-powerblue text-2xl
          hover:bg-powerdarkblue hover:text-powerwhite cursor-pointer my-4">
            <img src={sides.src} alt="" />
            <Link href="#" className="my-3">
              <p> Acompanhamentos</p>
            </Link>
          </div>
          <div
            className="flex border border-powergray gap-10 font-bold text-powerblue text-2xl
          hover:bg-powerdarkblue hover:text-powerwhite cursor-pointer my-4">
            <img src={sandwiches.src} alt="" />
            <Link href="#" className="my-3">
              Sanduíches
            </Link>
          </div>
          <div
            className="flex border border-powergray gap-10 font-bold text-powerblue text-2xl
          hover:bg-powerdarkblue hover:text-powerwhite cursor-pointer my-4">
            <img src={dessert.src} alt="" />
            <Link href="#" className="my-3">
              Sobremesas
            </Link>
          </div>
          <div
            className="flex border border-powergray gap-10 font-bold text-powerblue text-2xl
          hover:bg-powerdarkblue hover:text-powerwhite cursor-pointer my-4">
            <img src={drinks.src} alt="" />
            <Link href="#" className="my-3">
              Bebidas
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cardapiolista;
