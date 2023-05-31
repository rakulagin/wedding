import React from 'react';
import flowers from "../../img/flowers.png";
import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.img}>
        <img src={flowers} alt="flowers"/>
      </div>
      <div className='container'>
        <h1 className={styles.header}>Привет!</h1>
        <p className={styles.text}>С&nbsp;тобой говорит Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело. Для этого введи свое имя и&nbsp;фамилию полностью.</p>
        <InputForm/>
      </div>
    </div>
  );
};

export default MainPage;
