import {Component} from "react";
import {OneTodo} from "./OneTodo/OneTodo";

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        const todos = this.props.todos;
        const deleteTodo = this.props.deleteTodo;
        const editTodo = this.props.editTodo;
        const todoList = todos.map(item => <div><OneTodo title={item.title} subs={item.subs} id={item.id} isEdited={item.isEdited} deleteTodo={deleteTodo} editTodo={editTodo}/></div>);
        return (
            <div>
                {todoList}
            </div>
        )
    }
}