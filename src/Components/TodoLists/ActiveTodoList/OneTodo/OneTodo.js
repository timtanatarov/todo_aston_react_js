import {Component} from "react";
import s from './OneTodo.module.css';
import {OneTodoEdited} from "./OneTodoEdited";

export class OneTodo extends Component {
    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            editTodo,
            needToChange,
            completeTodo,
            isComplete,
            archiveTodo,
            saveTodo,
        } = this.props;

        if (!needToChange){
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
        return (
            <OneTodoEdited saveTodo={saveTodo} id={id} title={title} subs={subs}  />
        )
    }
}