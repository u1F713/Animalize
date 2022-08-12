import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Header from '$layouts/Header'
import Footer from './Footer'
import Modal from '$components/Modal'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          margin: auto;
          padding: 2em 0;
        }
      `}</style>
      <Head>
        <title>Awesome Gallery</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Modal />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
