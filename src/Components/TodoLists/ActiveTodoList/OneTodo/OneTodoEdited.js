import {Component} from "react";
import s from './OneTodo.module.css';

export class OneTodo extends Component {
    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            editTodo,
            completeTodo,
            isComplete,
            archiveTodo,
        } = this.props;

        return (
            <div className={s.oneTodoContainer}>
                <div className={s.titleOneTodo}>
                    <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}/>
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
                    <button type='button' className={s.archiveButtonOneTodo} onClick={archiveTodo.bind(this, id)}>
                        Архивировать
                    </button>
                </div>
            </div>
        )
    }
}