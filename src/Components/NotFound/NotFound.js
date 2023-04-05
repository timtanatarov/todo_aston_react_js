import {Link} from "react-router-dom";
import React from "react";

export const NotFound = () => {
    return (
        <div>
            <div>
                А такого у нас нет :(
            </div>
            <div>
                Ошибка 404: страница не найдена.
            </div>
            <div>
                <Link to="/all">
                    Перейти ко всем задачам
                </Link>
            </div>
        </div>
    )
};