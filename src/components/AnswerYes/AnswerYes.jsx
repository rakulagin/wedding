import React, {useState, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import DataContext from "../../UserInfoContext";
import {post} from "axios";


const AnswerYes = () => {

  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)
  const [translateInfo, setTranslateInfo] = useState({});

  const translateHelper = [
    {
      place: {
        zags: {
          time: '12:30',
          place: 'ул. Молодогвардейская, д. 238, дворец бракосочетания Теремок',
        },
        restaurant: {
          time: '17:30',
          pace: 'ул. Максима Горького, д. 82, ресторан HUDSON',
        }
      }
    },
    {
      vine: {
        white: 'лучшее белое вино',
        red: 'лучшее красное вино',
        all: 'все, что открывается с помощью штопора',
        no: 'хорошие безалкогольные напитки',
      }
    },
    {
      spirit: {
        whiskey: 'отличный виски',
        vodka: 'водку, с которой не будет болеть голова',
        all: 'вообще все что горит! но смотри, аккуратней на поворотах.',
        no: 'спасибо, что не хочешь портить всем праздник',
      }
    },
    {
      secondDay: {
        true: 'О месте и времени проведения второго дня мы сообщим позже, но гарантируем, что будет очень солнечно, активно и весело!',
        false: '',
      },
    }
  ]

  const createTranslateObj = (backendObj) => {
    const translatedObject = {};
    for (const key in backendObj) {
      const translationData = translateHelper.find(item => item[key]);
      if (translationData && translationData[key][backendObj[key]]) {
        translatedObject[key] = translationData[key][backendObj[key]];
      }
    }
    setTranslateInfo(translatedObject)
  }

  useEffect(() => {
    createTranslateObj(userInfo);
  }, []);


  return (
    <div>
      <h2 className='title'>Отлично, {userInfo.firstName}!</h2>
      <p className='text'>Мы рады что ты согласился разделить с нами день рождения нашей семьи! </p>
      {translateInfo.place && <p className='text'>Ждем тебя С Твоей ВТОРОЙ ПОЛОВИНКОЙ к {translateInfo.time} по
        адресу {translateInfo.place.place}.</p>}
      {translateInfo && <p className='text'>Мы постараемся выбрать для тебя {translateInfo.vine} и {translateInfo.spirit}, и закатим крутую
        вечеринку!</p>}
      <p className='text'>Изменить свои предпочтения ты сможешь по ссылке в шапке над фото</p>
      {translateInfo.secondDay && <p>{translateInfo.secondDay}</p>}
    </div>
  );
};

export default AnswerYes;

