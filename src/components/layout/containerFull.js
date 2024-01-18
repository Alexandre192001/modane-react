import React from 'react'
import style from './containerFull.module.css'

export default function containerFull(props) {
  return (
    <div className={`${style.container_full_wrapper} ${style[props.customClass]}` }>
        {props.children} 
    </div>
  )
}
