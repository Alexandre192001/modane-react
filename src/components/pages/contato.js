import React from 'react'
import style from './contato.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function contato() {
  return (
    <div className={style.container_contato_wrapper}>
        <h1 className={style.title_contato}>Contato</h1>
        <p className={style.description_contato}>Entrem em contato conosco para atendimento</p>

        <div className={style.container_info_contato_wrapper}>
        <div className={style.container_info_contato}>
            <a target='_blank' href='https://www.instagram.com/modane.moda_feminina?igsh=dm13bGY4enV6czQy'>
              <FaInstagram/>
              <p>Instagram</p>
            </a>
        </div>

        <div className={style.container_info_contato}>
            <a target='_blank' href='https://api.whatsapp.com/message/2RXQFBNHFYMXI1?autoload=1&app_absent=0'>
              <FaWhatsapp/>
              <p>Whatsapp</p>
            </a>
        </div>
    </div>
  </div>
  )
}

export default contato