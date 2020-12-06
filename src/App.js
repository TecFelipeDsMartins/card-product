import React from "react";
import Product from "./Product";
import "./style.css";

export default function App() {
  return (
    <>
      <Product
        img={
          "https://blog.santaprata.com.br/wp-content/uploads/2017/09/121880-conheca-as-6-dicas-de-ouro-para-vender-joias-e-semijoias.png"
        }
        nome={"Anel e pulseira"}
        desc={"Lindo Anel mais Pulseira Banhada a ouro"}
        link={"https://www.google.com"}
      />
    </>
  );
}
