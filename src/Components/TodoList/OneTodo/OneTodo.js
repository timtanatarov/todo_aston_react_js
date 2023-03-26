import {Component} from "react";
import s from './OneTodo.module.css';

export class OneTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, subs, id, isEdited, deleteTodo, editTodo} = this.props;
        const readyMadeTodo =
            <div className={s.oneTodoContainer}>
                <div className={s.titleOneTodo}>
                    {id}. {title}
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
            </div>;
        const editedTodo =
            <div>
                <div>Редактировать заголовок</div>
                <div>Редактировать описание</div>
                <div>Сохранить</div>
            </div>;
        // return this.state.isEdited ? editedTodo : readyMadeTodo;
        return readyMadeTodo;
    }
}