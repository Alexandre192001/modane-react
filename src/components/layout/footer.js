import React from 'react'
import style from './footer.module.css'

export default function footer() {
  return (
    <div className={style.container_footer_wrapper}>
        <h1 className={style.title_footer}>Modane</h1>
        <p>  © Todos os direitos reservados - Modane | Moda feminina</p>
    </div>
  )
}
