import React, {useEffect, useContext} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import styles from './Interview.module.css'
import questions from '../../questions.json'
import DataContext from "../../UserInfoContext";

const Interview = () => {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onSubmit"});
  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(DataContext)

  const onSubmit = (data) => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
    const newObj = {
      ...data, answered: true
    };
    axios.patch(`http://backend.rakulagin.com/update/${localstorageUser._id}`, newObj)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        setUserInfo(res.data)
      })
    navigate('/invite')
  }

  const changeAccept = () => {
    const answer = {accept: 'no'}
    axios.patch(`http://backend.rakulagin.com/update/${userInfo._id}`, answer)
      .then(res => {
        localStorage.setItem('user', JSON.stringify({...res.data}))
        setUserInfo(prevState => ({
          ...prevState,
          ...answer
        }))
        }
      )
    navigate('/invite')
  }

  useEffect(() => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
  }, []);

  console.log('interview =====>>>>>',userInfo)

  return (
      <div className="content">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question, index) =>
          <div key={index}
          className={styles.block}>
            <h3 className='subtitle'>{question.question}</h3>
            {question.value.map((value, id) => (
              <label key={id} className={styles.label}>
                <input
                  className={styles.input}
                  type="radio"
                  value={value}
                  {...register(question.name, {required: true})}
                />
                <span className={styles.span}>{question.answers[id]}</span>
              </label>
            ))}
          </div>
        )}

        <div className="buttons__wrp">
          <input
            className={!isValid ? 'btn btn--purple btn--disabled' : 'btn btn--purple'}
            type="submit"
            value="отправить"
            disabled={!isValid}
          />
          <div>
            {userInfo.answered && <button className='btn btn--orange' onClick={changeAccept}>Я не смогу пойти</button>}
          </div>

        </div>
      </form>
      </div>
  );
};

export default Interview;


