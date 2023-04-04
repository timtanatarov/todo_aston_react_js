import {Component} from "react";
import s from './OneTodo.module.css';

export class OneTodo extends Component {
    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            archiveTodo,
            completeTodo,
            isComplete,
        } = this.props;

        return (
            <div className={s.oneTodoContainerCompleted}>
                <div className={s.titleArchivedOneTodo}>
                    <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}/>
                    {title}
                </div>
                <div className={s.subsOneTodo}>
                    {subs}
                </div>
                <div>
                    <button type='button' className={s.archiveButtonOneTodo} onClick={archiveTodo.bind(this, id)}>
                        Разархивировать
                    </button>
                    <button type='button' className={s.deleteButtonOneTodo} onClick={deleteTodo.bind(this, id)}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
}