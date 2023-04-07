import {Link} from "react-router-dom";
import React from "react";
import s from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                    А такого у нас нет :(
            </div>
            <div className={s.subs}>
                Ошибка 404: страница не найдена.
            </div>
            <div className={s.link}>
                <Link to="/all">
                    Перейти ко всем задачам
                </Link>
            </div>
        </div>
    )
};