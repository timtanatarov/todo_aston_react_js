import {Component} from "react";
import s from './OneTodo.module.css';
import {OneEditedTodo} from "../OneEditedTodo/OneEditedTodo";

export class OneTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, subs, id, deleteTodo, editTodo, saveTodo, needToChange} = this.props;
        if (!needToChange) {
            return (
                <div className={s.oneTodoContainer}>
                    <div className={s.titleOneTodo}>
                        {title}
                    </div>
                    <div className={s.subsOneTodo}>
                        {subs}
                    </div>
                    <div>
                        <button type='button' className={s.editButtonOneTodo} onClick={editTodo.bind(this, id)}>
                            Изменить
                        </button>
                        <button type='button' className={s.deleteButtonOneTodo} onClick={deleteTodo.bind(this, id)}>
                            Удалить
                        </button>
                    </div>
                </div>
            )
        }
        return <OneEditedTodo title={title} subs={subs} id={id} saveTodo={saveTodo}/>
    }
}