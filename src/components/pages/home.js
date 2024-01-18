import React from 'react'
import Logo from '../img/logo.jpeg'
import style from './home.module.css'

function home() {
  return (
    <div className={style.container_home_wrapper}>

        <img className={style.img_logo} src={Logo} alt='img-logo'></img>
        <h2 className={style.title_home}>Moda<span>ne</span></h2>
        <h3 className={style.subtitle_home}>Moda feminina</h3>
        <a className={style.btn_home} href='/Roupas'>Ver mais</a>
    </div>
  )
}

export default home