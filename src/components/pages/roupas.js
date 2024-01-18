import React from 'react'
import style from './roupas.module.css'

export default function roupas() {
  return (
    <div className={style.container_roupas_wrapper}>
    <h1 className={style.title_roupas}>Roupas</h1>
    <p className={style.subtitle_roupas}>Vejam aqui nossas novidades</p>
      <div className={style.container_roupas}>

      </div>
    </div>
  )
}
