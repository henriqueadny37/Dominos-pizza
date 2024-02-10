import { Input } from "postcss";
import { Form } from "react-hook-form";

export const Valid = () => {
  return (
    <>
      <Form>
        <label htmlFor="Nome">Insira seu CEP:</label>
        <Input type="text" placeholder="EX: 12345-678"></Input>
      </Form>
    </>
  );
};
export default Valid;
