import React from "react";
import styled from "styled-components";

const ProductCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  img {
    height: 200px;
    &:hover {
      height: 201px;
      box-shadown: 2px 2px 1px 4px;
    }
  }

  button {
    width: 200px;
    height: 30px;
    border: 0px;
    border-radius: 5px;
    background-color: #090;
  }

  a {
    text-decoration: none;
    color: #0f0;
  }
`;

export default props => {
  const quandoClicar = () => {
    console.log("Clicou");
  };
  return (
    <>
      <div>
        <ProductCard>
          <img src={props.img} />
          <h2>{props.nome}</h2>
          <p>{props.desc}</p>
          <button>
            <a href={props.link}>Encomendar</a>
          </button>
        </ProductCard>
      </div>
    </>
  );
};
