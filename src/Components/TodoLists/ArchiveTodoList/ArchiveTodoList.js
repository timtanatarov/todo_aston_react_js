import {Component} from "react";
import {OneTodo} from "./OneTodo/OneTodo";
import s from './ArchiveTodoList.module.css';

export class ArchiveTodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, completeTodo, archiveTodo, deleteTodo} = this.props;

        const todoList = todos.map(item => {
            if (item.isArchived){
                return (<div key={item.title.toString()}><OneTodo title={item.title} subs={item.subs} id={item.id}
                                                               deleteTodo={deleteTodo}
                                                               archiveTodo={archiveTodo} isArchived={item.isArchived}
                                                               completeTodo={completeTodo}
                                                               isComplete={item.isComplete}
                /></div>)
            }
        })

        return (
            <div className={s.container}>
                {todoList}
            </div>
        )
    }
}