import {Component} from "react";
import {OneTodo} from "./OneTodo/OneTodo";

export class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    render() {
        const todos = this.props.todos;
        const todoList = todos.map((item, index) => <div><OneTodo title={item.title} subs={item.subs} id={item.id}/> </div>);
        return (
            <div>
                {todoList}
            </div>
        )
    }
}