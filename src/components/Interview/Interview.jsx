import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import styles from './Interview.module.css'
import questions from '../../questions.json'

const Interview = () => {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onSubmit"});
  const navigate = useNavigate()

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
      })
    navigate('/invite')
  }

  useEffect(() => {
    const localstorageUser = JSON.parse(localStorage.getItem('user'))
    if (!localstorageUser) {
      return navigate('/')
    }
  }, []);

  console.log(errors)

  return (
    <div className='container'>
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

        <div className="btn--wrp">
          <input
            className={isValid ? 'btn btn--purple' : 'btn btn-disabled'}
            type="submit"
            value="отправить"
            disabled={!isValid}
          />
        </div>
      </form>
      </div>
    </div>
  );
};

export default Interview;


