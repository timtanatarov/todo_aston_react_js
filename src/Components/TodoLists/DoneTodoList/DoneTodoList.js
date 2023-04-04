import {Component} from "react";
import {OneTodo} from "./OneTodo/OneTodo";

export class DoneTodoList extends Component {
    render() {
        const {todos, deleteTodo, completeTodo, archiveTodo} = this.props;

        const todoList = todos.map(item => {
            if (item.isCompleted && !item.isArchived){
                return (<div key={item.id.toString()}><OneTodo title={item.title} subs={item.subs} id={item.id}
                                                               deleteTodo={deleteTodo}
                                                               completeTodo={completeTodo} isComplete={item.isCompleted}
                                                               archiveTodo={archiveTodo}
                /></div>)
            }
        })

        return (
            <div>
                {todoList}
            </div>
        )
    }
}