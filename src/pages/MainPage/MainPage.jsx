import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import flowers from "../../img/flowers.png";
import styles from './MainPage.module.css'

import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {

  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null);

  const usersList = [
    {
      firstName: "Роман",
      surName: "Кулагин",
      img: "",
    },
    {
      firstName: "Алена",
      surName: "Иовлева",
      img: "",
    },
    {
      firstName: "1",
      surName: "2",
      img: "",
    },
  ]

  const onButtonSubmit = (data) => {
    const findUser = usersList.find((user) =>
      user.firstName.toLowerCase() === data.firstName.toLowerCase() &&
      user.surName.toLowerCase() === data.surName.toLowerCase())
    const resultUser = findUser ? findUser : null
    if (resultUser) {
      setCurrentUser(resultUser)
      // navigate("/invite")
    }
  }

  console.log(currentUser)

  return (
    <div className={styles.page}>
      <div className={styles.img}>
        <img src={flowers} alt="flowers"/>
      </div>
      <div className='container'>
        <h1 className={styles.header}>Привет!</h1>
        <p className={styles.text}>С&nbsp;тобой говорит Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело. Для
          этого введи свое имя и&nbsp;фамилию полностью.</p>
        <InputForm
          onButtonSubmit={onButtonSubmit}
        />
      </div>
    </div>
  );
};

export default MainPage;
