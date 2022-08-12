import { FC } from 'react'
import S from './Footer.module.sass'

export const Footer: FC = () => {
  return (
    <div className={S.Footer}>
      <footer>
        <p>
          🄯 2020-2021 <a href="https://mashu-page.herokuapp.com/">Joseph Estevez</a>
        </p>
        <p> Made with ❤️ in Dominican Republic</p>
      </footer>
    </div>
  )
}
