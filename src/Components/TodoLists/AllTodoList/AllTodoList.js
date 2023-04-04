import React, {Component} from "react";
import {ActiveTodoList} from "./ActiveTodoList/ActiveTodoList";
import {DoneTodoList} from "./DoneTodoList/DoneTodoList";
import {ArchiveTodoList} from "./ArchiveTodoList/ArchiveTodoList";

export class AllTodoList extends Component {

    render() {
        const {todos, deleteTodo, editTodo, saveTodo, completeTodo, archiveTodo} = this.props;
        return (
            <div>
                <div>
                    <ActiveTodoList todos={todos}
                                    deleteTodo={deleteTodo}
                                    editTodo={editTodo}
                                    saveTodo={saveTodo}
                                    completeTodo={completeTodo}
                                    archiveTodo={archiveTodo}/>
                </div>
                <div>
                    <DoneTodoList todos={todos}
                                  deleteTodo={deleteTodo}
                                  editTodo={editTodo}
                                  saveTodo={saveTodo}
                                  completeTodo={completeTodo}
                                  archiveTodo={archiveTodo}/>
                </div>
                <div>
                    <ArchiveTodoList todos={todos}
                                     deleteTodo={deleteTodo}
                                     editTodo={editTodo}
                                     saveTodo={saveTodo}
                                     completeTodo={completeTodo}
                                     archiveTodo={archiveTodo}/>
                </div>
            </div>

        )
    }
}