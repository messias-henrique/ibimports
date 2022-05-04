import React from 'react';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <>
    <Helmet>
      <title> Contato - IB IMPORTS </title>
    </Helmet>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Contato</h1>
    </div>
    </>
  );
 
};

export default Contact;