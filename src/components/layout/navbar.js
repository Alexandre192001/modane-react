import React from 'react'
import {Link} from 'react-router-dom'
import style from './navbar.module.css'
import Logo from '../img/logo.jpeg'

 export default function navbar() {
  return (
    <>
        <nav className={style.navbar_wrapper}>
            <div className={style.card_navbar}>
                <img className={style.img_logo} src={Logo} alt='img-logo'></img>
            </div>

            <div className={style.card_navbar}>
              <Link className={style.linksNav} to="/">Home</Link>
              <Link className={style.linksNav} to="/Roupas">Roupas</Link>
              <Link className={style.linksNav} to="/Contato">Contato</Link>
            </div>
        </nav>
    </>
  )
}
