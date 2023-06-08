import React, {useState} from 'react';

import tgLogo from '../../img/telegram_logo_icon.png'

import styles from './Modal.module.css'

const Modal = ({isActive, setActive}) => {

  return (
    <>
      {isActive && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <p className={styles.text}>
              Ой! Мы&nbsp;не&nbsp;нашли тебя в&nbsp;нашем списке.
              Проверь, правильно&nbsp;ли ты&nbsp;вводишь имя и&nbsp;фамилию,
              либо свяжись со&nbsp;мной в&nbsp;Telegram.
            </p>
            <div className={styles.buttonsWrp}>
              <a href="https://t.me/ramzimamzi" target="_blank">
                <img src={tgLogo} alt=""/>
              </a>
              <button className={styles.button} onClick={()=>setActive(false)}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;