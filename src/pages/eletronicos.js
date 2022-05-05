import React from 'react';
import { Helmet } from 'react-helmet';
const Eletronicos = () => {
  return (
    <>
    <Helmet>
      <title> Eletrônicos - IB IMPORTS </title>
    </Helmet>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Eletrônicos</h1>
    </div>
    </>
  );
 
};

export default Eletronicos;