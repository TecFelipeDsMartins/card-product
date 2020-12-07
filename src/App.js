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

      <Product
        img={
          "https://joiasboz.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brincos-da-moda-asas-anjo-dourados-folheados-ouro-semi-joias.png"
        }
        nome={"Bricos"}
        desc={"Lindos Brincos mais Pulseira Banhada a ouro"}
        link={"https://www.google.com"}
      />
    </>
  );
}
