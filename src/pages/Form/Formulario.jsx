import { data } from "autoprefixer";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const checarCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    fetch(`viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("endereco", data.enredeco);
        setValue("estado", data.estado);
        setValue("cidade", data.cidade);
      });
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="grid m-3 border border-powergray p-2 max-w-xl">
        <div className="grid">
          <label htmlFor="Nome">Insira seu CEP:</label>
          <input
            type="text"
            id="nome"
            placeholder="EX: 1234-567"
            className="border border-powerblack p-1 my-3"
            {...register("cep")}
            onBlur={checarCep}
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
            placeholder="- Selecione o seu Estado"
            className="border border-powerdarkgray p-1"
            {...register("estado")}
          />
        </div>
        <div className="grid">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            placeholder="- Selecione a sua Cidade"
            className="border border-powerdarkgray p-1"
            {...register("cidade")}
            onBlur={checarCep}
          />
        </div>
        <div
          className="bg-powerpink hover:bg-powerdarkpink p-2 my-3 text-center font-semibold text-powerwhite
         rounded-md cursor-pointer transition-all">
          <button type="button">Cotinuar</button>
        </div>
      </form>
      <div className="m-3 bg-powerpink w-24 rounded-md text-powerwhite text-center font-semibold lg:hidden">
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </div>
    </>
  );
};
export default Formulario;
