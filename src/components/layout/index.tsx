import { FunctionComponent } from 'react';
import Head from 'next/head';
import Header from '../header';
import Container from '../containers/container';
import Modal from '../modal';

const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Awesome Gallery</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Modal />
      <Header />
      <div>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
