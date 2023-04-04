import s from "../../../App.module.css";
import {Link} from "react-router-dom";
import React from "react";

export const Links = (props) => {
    return (
        <div className={s.selectCategories}>
            <div className={s.linkContainer}>
                <Link to="/active" className={s.link}>
                    Активные
                </Link>
            </div>
            <div className={s.linkContainer}>
                <Link to="/done" className={s.link}>
                    Выполненные
                </Link>
            </div>
            <div className={s.linkContainer}>
                <Link to="/archived" className={s.link}>
                    Архив
                </Link>
            </div>
            <div className={s.linkContainer}>
                <Link to="/all" className={s.link}>
                    Все
                </Link>
            </div>
        </div>
    )
};