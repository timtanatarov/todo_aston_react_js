import {Link} from "react-router-dom";
import React from "react";
import s from './Links.module.css';

export const Links = (props) => {
    return (
        <div className={s.Links}>
            <div className={s.activeContainer} >
                <Link to="/active" className={s.active}>
                    Активные
                </Link>
            </div>
            <div className={s.doneContainer}>
                <Link to="/done" className={s.done}>
                    Выполненные
                </Link>
            </div>
                <div className={s.archiveContainer}>
                <Link to="/archived" className={s.archive}>
                    Архив
                </Link>
            </div>
            <div className={s.allContainer}>
                <Link to="/" className={s.all}>
                    Все
                </Link>
            </div>
        </div>
    )
};