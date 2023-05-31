import React from 'react';
import flowers from "../../img/flowers.png";
import InputForm from "../../components/InputForm/InputForm";

const MainPage = () => {
  return (
    <>
      <div className="img">
        <img className='img' src={flowers} alt="flowers"/>
      </div>
      <div className='container'>
        <h1 className='app-header'>Привет!</h1>
        <p className='app-text'>С&nbsp;тобой говорит Рома и&nbsp;Алена. Нам надо узнать, с&nbsp;кем имеем дело. Для этого введи свое имя и&nbsp;фамилию полностью.</p>
        <InputForm/>
      </div>
    </>
  );
};

export default MainPage;
