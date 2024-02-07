export const Formulario = () => {
  {
    /* const onSubmit = (e) => {
    console.log(e);
  };

  const checarCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
  }; */
  }

  return (
    <>
      <form action="" className="grid m-3 border border-powergray p-2 max-w-xl">
        <div className="grid">
          <label htmlFor="Nome">Insira seu CEP:</label>
          <input
            type="text"
            id="nome"
            placeholder="EX: 1234-567"
            className="border border-powerblack p-1 my-3"
          />
          <button
            className="bg-powerpink hover:bg-powerdarkpink m-2 p-2 text-powerwhite md:ml-2 rounded-md
          transition-all">
            Buscar
          </button>
          <div>
            <p className="text-powerblue cursor-pointer font-semibold text-center">
              Eu não sei meu CEP
            </p>
          </div>
        </div>
        <div className="my-3 grid">
          <label htmlFor="Estado">Estado</label>
          <input
            type="text"
            id="campos"
            placeholder="Estado"
            className="border border-powerdarkgray p-1"
          />
        </div>
        <div className="grid">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            placeholder="Cidade"
            className="border border-powerdarkgray p-1"
          />
        </div>
        <div
          className="bg-powerpink hover:bg-powerdarkpink p-2 my-3 text-center font-semibold text-powerwhite
        rounded-md cursor-pointer transition-all">
          <button type="button">Cotinuar</button>
        </div>
      </form>
    </>
  );
};
export default Formulario;
