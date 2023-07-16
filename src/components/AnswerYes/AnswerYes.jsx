import React, {useContext} from 'react';
import DataContext from "../../UserInfoContext";

const AnswerYes = () => {

  const {userInfo, setUserInfo} = useContext(DataContext)

  const time = userInfo.place==='zags' ? '12:30' : '17:30'
  const address = userInfo.place==='zags' ? 'ул. Молодогвардейская, д. 238, дворец бракосочетания Теремок' : 'ул. Максима Горького, д. 82, ресторан HUDSON'

  return (
    <div>
      {/*<h2 className='title'>Отлично, {userInfo.firstName}!</h2>*/}
      <h2 className='title'>{userInfo.nickname}</h2>
      <p className='text'>Мы рады что ты разделишь с нами день рождения нашей семьи! </p>
      <p className='text text--accent'>Ждем тебя 11 августа {userInfo.pair} <br/> к {time} по адресу {address}.</p>
      <p className='text'>Мы постараемся выбрать для тебя {userInfo.vine} и {userInfo.spirit}. Это будет самая крутая вечеринка!</p>
      {userInfo.secondDay && <p className='text'>{userInfo.secondDay} <a href="https://go.2gis.com/0k25d">ссылке</a> </p>}
      <p className='text'>Изменить свои предпочтения ты сможешь, нажав кнопку.</p>
    </div>
  );
};

export default AnswerYes;