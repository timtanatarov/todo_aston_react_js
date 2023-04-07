import {Component} from "react";

import s from './ActiveTodoList.module.css';
import {OneTodo} from "./OneTodo/OneTodo";

export class ActiveTodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, deleteTodo, editTodo, saveTodo, completeTodo, archiveTodo, cancelEditTodo} = this.props;
        const todoList = todos.map(item => {
            if (!item.isCompleted && !item.isArchived) {
                return (
                    <div key={item.title.toString()} className={s.OneTodoContainer}>
                        <OneTodo title={item.title} subs={item.subs} id={item.id}
                                 deleteTodo={deleteTodo} editTodo={editTodo}
                                 saveTodo={saveTodo} needToChange={item.needToEdit}
                                 completeTodo={completeTodo} isComplete={item.isCompleted}
                                 archiveTodo={archiveTodo} isArchived={item.isArchived} cancelEditTodo={cancelEditTodo}
                        />
                    </div>)
            }
        })
        return (
            <div>
                <div className={s.container}>
                    {todoList}
                </div>
            </div>
        )
    }
}