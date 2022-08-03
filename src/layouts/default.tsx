import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Header from '$layouts/Header'
import Footer from './Footer'

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
      <Header />
      <div>
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
