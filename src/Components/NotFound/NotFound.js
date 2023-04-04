import {Link} from "react-router-dom";
import React from "react";
import s from "./NotFound.module.css";

export const NotFound = () => {
    return (
        <div>
            <div className={s.title}>
                А такого у нас нет :(
            </div>
            <div className={s.discription}>
                Ошибка 404: страница не найдена.
            </div>
            <div className={s.linkContainer}>
                <Link to="/all" className={s.link}>
                    Перейти ко всем задачам
                </Link>
            </div>
        </div>
    )
};