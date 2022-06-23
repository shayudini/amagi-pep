import * as React from 'react';
import { Footer, Header } from 'components/index';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
