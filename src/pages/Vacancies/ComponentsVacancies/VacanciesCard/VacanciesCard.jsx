import React from 'react';
import "./vacanciescard.css"

const VacanciesCard = () => {
    return (
        <>
            <h3 className="vacanciescard__title">Должность</h3>
            <h4 className="vacancies__subtitle1">Требования</h4>
            <h4 className="vacancies__subtitle2">Обязанности</h4>
            <h4 className="vacancies__subtitle3">Условия</h4>
            <p className="vacancies__tel">Звоните</p>
        </>
    );
};

export default VacanciesCard;