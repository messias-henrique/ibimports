import React from 'react';
import { Helmet } from 'react-helmet';
const Produtos = () => {
  return (
    <>
    <Helmet>
      <title> Produtos - IB IMPORTS </title>
    </Helmet>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Produtos</h1>
    </div>
    </>
  );
};

export default Produtos;