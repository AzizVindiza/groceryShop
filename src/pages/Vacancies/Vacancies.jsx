import React from 'react';
import "./vacancies.scss"
import VacanciesCard from "./ComponentsVacancies/VacanciesCard/VacanciesCard";

const Vacancies = () => {
    return (
        <>
            <section className="vacancies">
                <div className="container">
                    <h1 className="vacancies__title">Вакансии</h1>
                    <div className="vacancies__wrapper">
                        <VacanciesCard/>
                        <VacanciesCard/>
                        <VacanciesCard/>
                        <VacanciesCard/>
                        <VacanciesCard/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vacancies;