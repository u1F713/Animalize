import { FunctionComponent } from 'react';
import Head from 'next/head';
import Header from '../header';

const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Awesome Gallery</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
