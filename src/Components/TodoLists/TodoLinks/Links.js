import {Link} from "react-router-dom";
import React from "react";

export const Links = (props) => {
    return (
        <div>
            <div>
                <Link to="/active">
                    Активные
                </Link>
            </div>
            <div>
                <Link to="/done">
                    Выполненные
                </Link>
            </div>
            <div>
                <Link to="/archived">
                    Архив
                </Link>
            </div>
            <div>
                <Link to="/all">
                    Все
                </Link>
            </div>
        </div>
    )
};