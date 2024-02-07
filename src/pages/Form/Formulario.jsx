export const Formulario = () => {
  return (
    <>
      <form action="" className="m-3">
        <div>
          <label htmlFor="Nome">Insira seu CEP</label>
          <input type="text" id="nome" className="border border-powerblack" />
        </div>
        <div className="my-3">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="seu email"
            id=""
            className="border border-powerblack"
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
        </div>
      </form>
    </>
  );
};
export default Formulario;
