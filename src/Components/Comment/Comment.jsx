import React from 'react';
import "./comment.scss"

const Comment = () => {
    return (
        <div className="popup">
            <div className="popup__form">
                <form className="form">
                    <h2 className="form__title">Комментарии</h2>
                    <textarea name="comment" id="comment" className="form__textarea" required={true} readonly></textarea>
                    <button className="form__btn">Отправить</button>
                    <button onClick={() => {}} type="button" className="form__exit">
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

export default Comment;