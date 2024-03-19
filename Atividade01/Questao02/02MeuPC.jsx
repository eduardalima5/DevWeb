import React from 'react';

const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa Mãe</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco.toFixed(2)}</p>
    </div>
  );
}

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <h3>Memória</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco.toFixed(2)}</p>
    </div>
  );
}

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa de Vídeo</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R${preco.toFixed(2)}</p>
    </div>
  );
}

export { PlacaMae, Memoria, PlacaDeVideo };
