import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Modal from 'src/components/modal'
import Header from 'src/layouts/header'
import Container from 'src/components/containers/container'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Awesome Gallery</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Modal />
      <Header />
      <div>
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  )
}

export default Layout
