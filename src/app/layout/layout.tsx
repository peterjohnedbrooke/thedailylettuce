'use client';
import React, { useEffect } from 'react';
import Header from '../components/header/header';
import '../../app/globals.css';
import Footer from '../components/footer/footer';

const Layout = ({ children }: any) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child),
  );

  return (
    <div>
      <Header />
      <main>{childrenWithProps}</main>
      <Footer />
    </div>
  );
};

export default Layout;
