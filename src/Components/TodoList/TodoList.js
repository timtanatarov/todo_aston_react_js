import {Component} from "react";
import {OneTodo} from "./OneTodo/OneTodo";

export class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, deleteTodo, editTodo, saveTodo} = this.props;

        const todoList = todos.map(item => {
            return (<div key={item.id.toString()}><OneTodo title={item.title} subs={item.subs} id={item.id}
                                                           deleteTodo={deleteTodo} editTodo={editTodo} saveTodo={saveTodo} needToChange={item.needToEdit}/></div>)
        })

        return (
            <div>
                {todoList}
            </div>
        )
    }
}