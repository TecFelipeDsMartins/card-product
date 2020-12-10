import React from "react";
import Product from "./Product";
import "./style.css";

import TelaDeAbertura from './TelaDeAbertura'


export default function App() {
  return (
    <>
      <TelaDeAbertura/>
      <Product
        img={
          "https://blog.santaprata.com.br/wp-content/uploads/2017/09/121880-conheca-as-6-dicas-de-ouro-para-vender-joias-e-semijoias.png"
        }
        nome={"Anel e Pulseira"}
        desc={"Lindo Anel mais Pulseira Banhada a ouro"}
        link={"Anel%20e%20pulseira%20"}
      />
      <Product
        img={
          "https://joiasboz.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brincos-da-moda-asas-anjo-dourados-folheados-ouro-semi-joias.png"
        }
        nome={"Bricos"}
        desc={"Lindos Brincos mais Pulseira Banhada a ouro"}
        link={"Brincos"}
      />
    </>
  );
}
