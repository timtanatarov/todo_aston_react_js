import {Component} from "react";
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
                <div>
                    <div>
                        <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}/>
                        {title}
                    </div>
                    <div>
                        {subs}
                    </div>
                    <div>
                        <button type='button' onClick={editTodo.bind(this, id)}>
                            Изменить
                        </button>
                        <button type='button' onClick={deleteTodo.bind(this, id)}>
                            Удалить
                        </button>
                        <button type='button' onClick={archiveTodo.bind(this, id)}>
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