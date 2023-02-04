import React, {useRef, useState} from 'react';
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import "./form.scss"


const Form = () => {
    const [local,setLocal] = useState("register")

    const [display,setDisplay] = useState("flex")

    const popup = useRef()

    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({mode:"onBlur"})

    return (
        <div className="popup" style={{display:display}}>
            <div className="popup__form">
                <form noValidate className="form">
                    <h2 className='form__title'>
                        { local === 'register'? "Зарегистрироваться":'Войти'}
                    </h2>
                   { local === "register" ? <label className= 'form__label'>
                        <input {...register('login',{
                            required:{
                                message:"Заполните поле логин",
                                value: true
                            },
                            maxLength:{
                                message:'Максимальная длинна 10 символов',
                                value:10
                            },
                            minLength:{
                                message:'Минимальная длинна 3 символа',
                                value:3
                            }
                        })} className='form__field' type="text" placeholder='Введите Email'/>
                        <span className='form__error'>{errors.login && errors.login.message}</span>
                    </label> : ""}
                    <label className='form__label'>
                        <input {...register('email',{
                            required:{
                                message:"Заполните поле Email",
                                value: true
                            },
                            maxLength:{
                                message:'Максимальная длинна 10 символов',
                                value:20
                            },
                            minLength:{
                                message:'Минимальная длинна 3 символа',
                                value:5
                            }
                        })}  className='form__field' type="email" placeholder='Введите логин'/>
                        <span className='form__error'>{errors.email && errors.email.message}</span>
                    </label>
                    <label className='form__label'>
                        <input {...register('password',{
                            required:{
                                message:"Заполните поле password",
                                value: true
                            },
                            maxLength:{
                                message:'Максимальная длинна 15 символов',
                                value:15
                            },
                            minLength:{
                                message:'Минимальная длинна 3 символа',
                                value:3
                            },
                        })}  className='form__field' type="password" placeholder='Введите пароль'/>
                        <span className='form__error'>{errors.password && errors.password.message}</span>
                    </label>
                    <button className='form__btn' type="submit">
                        {
                            local === 'register'? "Зарегистрироваться":"Войти"
                        }
                    </button>
                    <div className="form__checkBoxes">
                        <input type="radio" id="register" name="popup" defaultChecked={true}/>
                        <label onClick={() =>{ setLocal("register") }} htmlFor="register">Регистрация</label>
                        <input type="radio" id="login" name="popup"/>
                        <label onClick={() =>{ setLocal("login") }} htmlFor="login">Забыли пароль?</label>
                    </div>
                    <button onClick={() => {setDisplay("none")}} type="button" className="form__exit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;