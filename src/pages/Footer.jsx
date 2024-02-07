/* eslint-disable @next/next/no-img-element */

import logoinstagram from "../../Icons/logoinstagram.svg";
import faceicon from "../../Icons/faceicon.svg";
import twittericon from "../../Icons/twittericon.svg";
import tiktokicon from "../../Icons/tiktokicon.svg";
import youtubeicon from "../../Icons/youtubeicon.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-powerlightgray text-powerdarkgray ">
        <div className="container mx-auto p-4">
          <div className="grid sm:flex justify-center items-center w-full">
            <ul className="grid sm:flex gap-4 font-semibold">
              <li>Internacional</li>
              <li>Seja um franqueado</li>
              <li>Sobre a Pizza</li>
              <li>Fale Conosco</li>
              <li>Politicas de Privacidade</li>
              <li>Termos de Uso</li>
            </ul>
          </div>
          <div className="flex gap-7 justify-center items-center sm:justify-start sm:mx-36 sm:gap-4 my-6">
            <Link href="https://www.instagram.com/dominospizzabrasil/">
              <img
                src={logoinstagram.src}
                alt="INSTAGRAM-ICON"
                className="w-6 h-6"
              />
            </Link>
            <img src={faceicon.src} alt="FACEBOOK-ICON" className="w-6 h-6 " />
            <img src={twittericon.src} alt="TWITTER-ICON" className="w-6 h-6" />
            <img src={tiktokicon.src} alt="ICON-TIKTOK" className="w-6 h-6 " />
            <img src={youtubeicon.src} alt="YOUTUBE-ICON" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-wrap font-semibold text-sm justify-start mx-1 sm:mx-36 p-4">
          <p className="leading-5">
            Serviço disponível nas áreas de entrega Dominos Pizza, todos os
            dias, de acordo com o horário de funcionamento de cada loja. A
            Dominos Pizza Brasil se reserva no direito de alterar ou encerrar as
            ofertas sem aviso prévio. Todas as promoções expostas não são
            cumulativas entre si ou com outras promoções e descontos. Cobramos
            taxa de entrega. Todos os nossos produtos CONTÉM GLÚTEN. Alérgicos:
            todos os nossos produtos contém ou podem conter traços de Trigo,
            Ovos, Leite e Soja. As formas de pagamento variam de acordo com cada
            loja. Imagens meramente ilustrativas. Consulte se sua loja de
            preferência pratica a promoção escolhida Em caso de dúvidas,
            consulte nosso SAC:
            <a href="#" className="font-bold text-sm text-powerblue">
              relacionamento@dominos.com.br.
            </a>
          </p>
          <br />
          <p className="leading-5">
            *Preços a partir de podem sofrer pequenas variações de acordo com a
            região da loja. Confirme o preço no carrinho de compras antes de
            confirmar seu pedido.
          </p>
          <br />
          <p>
            DOMINOS PIZZA BRASIL, Av. das Américas, 500 - Bloco 7 – 3º andar –
            Barra da Tijuca, Rio de Janeiro/RJ - 22640-100
          </p>
          <br />
          <p className="leading-5">
            S.A.C: Dúvidas, reclamações, sugestões e / ou elogios envie um
            e-mail para:
            <a href="#" className="text-powerblue font-bold">
              relacionamento@dominos.com.br
            </a>
          </p>
          <br />

          <p className="leading-5">
            Informações sobre o uso de dados pessoais e pedidos de descadastro
            do banco de dados,
            <a href="#" className="text-powerblue font-bold">
              Clique aqui
            </a>
            - Encarregado de Dados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
