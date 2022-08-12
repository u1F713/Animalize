import { FunctionComponent } from 'react'
import S from './Header.module.sass'

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className={S.container}>
      <header className={S.title}>Awesome Gallery</header>
    </div>
  )
}

export default Header
