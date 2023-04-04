import {Component} from "react";
import s from './OneTodo.module.css';
import {OneEditedTodo} from "./OneEditedTodo/OneEditedTodo";

export class OneTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            editTodo,
            saveTodo,
            completeTodo,
            needToChange,
            isComplete,
            archiveTodo,
            isArchived,
        } = this.props;

        if (isArchived) {
            return (
                <div className={s.oneTodoContainerCompleted}>
                    <div className={s.titleArchivedOneTodo}>
                        <input type="checkbox" checked='true'/>
                        {title}
                    </div>
                    <div className={s.subsOneTodo}>
                        {subs}
                    </div>
                    <div>
                        <button type='button' className={s.archiveButtonOneTodo} onClick={archiveTodo.bind(this, id)}>
                            Разархивировать
                        </button>
                    </div>
                </div>
            )
        }
        if (!needToChange) {
            return (
                <div className={!isComplete ? s.oneTodoContainer : s.oneTodoContainerCompleted}>
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
        return <OneEditedTodo title={title} subs={subs} id={id} saveTodo={saveTodo}/>
    }
}