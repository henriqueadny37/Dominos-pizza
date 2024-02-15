/* eslint-disable @next/next/no-img-element */

import manutencao from "../../../Icons/manutencao.svg";
export const Promocoes = () => {
  return (
    <>
      <div className="text-center justify-center items-center text-powergray">
        <h1>Encontre a loja mais próxima</h1>
        <div className="flex justify-center items-center my-20">
          <img src={manutencao.src} alt="manu" className="w-44 h-44" />
        </div>
        <h1 className="text-powerdarkblue font-bold text-3xl">
          SITE EM CONSTRUÇÃO
        </h1>
      </div>
    </>
  );
};
export default Promocoes;
