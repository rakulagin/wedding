import React from 'react';
import {useForm} from "react-hook-form";
import axios, {post} from "axios";

import styles from './Interview.module.css'
import questions from '../../questions.json'

const Interview = () => {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: "onChange"});

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem('user'))

    const newObj = {
      ...savedUser, ...data
    };

    console.log(newObj)

    // axios.patch(`http://backend.rakulagin.com/question/${savedUser._id}`, newObj)
    //   .then(data => console.log(data))
  }

// console.log(errors)

  return (
    <div className='page'>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

        {questions.map((question, index) =>
          <div key={index}
          className={styles.block}>
            <h2 className={styles.header}>{question.question}</h2>
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
            {errors[index] && <p>Обязательное поле</p>}
          </div>
        )}

        <input
          // className={isValid ? "btn btn-white-blue" : "btn btn-disabled"}
          className={isValid ? styles.button : styles.disabled}
          type="submit"
          value="отправить"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default Interview;


