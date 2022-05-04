import React from 'react';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <>
    <Helmet>
      <title> Sobre - IB IMPORTS </title>
    </Helmet>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Sobre</h1>
    </div>
    </>
  );
};

export default About;