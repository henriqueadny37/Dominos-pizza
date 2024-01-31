export const Section = () => {
  return (
    <>
      <div className="justify-center px-5 items-center text-center my-10 text-2xl font-bold">
        <section>
          <h1 className="sm:hidden md:text-3xl text-powerblue">
            <p>SUA PIZZA FAVORITA ESTÁ AQUI</p>
          </h1>
          <div className="hidden sm:flex sm:justify-center sm:m-0 md:justify-between items-center px-48">
            <div className="hidden sm:w-32 sm:flex justify-start border border-powerlightgray"></div>
            <h1 className="text-powerblue">
              ESCOLHA SUA FORMA DE
              <br /> ENTREGA
            </h1>
            <a
              href="#"
              className="bg-powerpink p-2 text-powerwhite font-semibold text-balance rounded-sm hover:bg-powerdarkpink transition-all">
              Delivery
            </a>
            <span className="text-powergray mx-1">ou</span>
            <a
              href="#"
              className="flex text-nowrap bg-powerpink p-2 text-powerwhite font-semibold rounded-sm hover:bg-powerdarkpink transition-all">
              Buscar na loja
            </a>
            <div className="hidden sm:flex justify-end w-32 border border-powerlightgray"></div>
          </div>
          <div className="h-16 bg-powerpink pt-3 text-powerwhite rounded-md hover:bg-powerdarkpink transition-all cursor-pointer text-2xl w-auto sm:hidden">
            <a href="#">PEDIR MINHA PIZZA</a>
          </div>
        </section>
      </div>
    </>
  );
};
