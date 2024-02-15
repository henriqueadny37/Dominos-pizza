import { useForm } from "react-hook-form";
import React from "react";

export const FormDelivery = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (!e.target.value) return;
    console.log(cep);
    fetch(`viacep.com.br/ws/${cep}/json/`)
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setValue("adress", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("adressNumber");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCep} />
      </label>
      <label htmlFor="">
        Rua:
        <input type="text" {...register("adress")} />
      </label>
      <label htmlFor="">
        Numero
        <input type="text" {...register("adressNumber")} />
      </label>
      <label htmlFor="">
        Bairro
        <input type="text" {...register("neighborhood")} />
      </label>
      <label htmlFor="">
        Cidade:
        <input type="text" {...register("city")} />
      </label>
      <label htmlFor="">
        Estado:
        <input type="text" {...register("uf")} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default FormDelivery;
