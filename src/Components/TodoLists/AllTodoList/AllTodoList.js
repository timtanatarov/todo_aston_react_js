import React, {Component} from "react";
import s from './AllTodoList.module.css';
import {OneTodo} from "../ActiveTodoList/OneTodo/OneTodo";
import {OneTodoArchved} from "../ArchiveTodoList/OneTodo/OneTodoArchved";
import {OneTodoDone} from "../DoneTodoList/OneTodo/OneTodoDone";

export class AllTodoList extends Component {

    render() {
        const {todos, deleteTodo, editTodo, saveTodo, completeTodo, archiveTodo, cancelEditTodo} = this.props;
        const todoList = todos.map(item => {
            if (!item.isCompleted && !item.isArchived){
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
            if (item.isArchived){
                return (<div key={item.title.toString()}><OneTodoArchved title={item.title} subs={item.subs} id={item.id}
                                                                  deleteTodo={deleteTodo}
                                                                  archiveTodo={archiveTodo} isArchived={item.isArchived}
                                                                  completeTodo={completeTodo}
                                                                  isComplete={item.isComplete}
                /></div>)
            }
            if (item.isCompleted && !item.isArchived){
                return (<div key={item.title.toString()}><OneTodoDone title={item.title} subs={item.subs} id={item.id}
                                                                  deleteTodo={deleteTodo}
                                                                  completeTodo={completeTodo} isComplete={item.isCompleted}
                                                                  archiveTodo={archiveTodo}
                /></div>)
            }
        })
        return (
            <div className={s.container}>
                {todoList}
                {/*<div>*/}
                {/*    <ActiveTodoList todos={todos}*/}
                {/*                    deleteTodo={deleteTodo}*/}
                {/*                    editTodo={editTodo}*/}
                {/*                    saveTodo={saveTodo}*/}
                {/*                    completeTodo={completeTodo}*/}
                {/*                    archiveTodo={archiveTodo}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <DoneTodoList todos={todos}*/}
                {/*                  deleteTodo={deleteTodo}*/}
                {/*                  editTodo={editTodo}*/}
                {/*                  saveTodo={saveTodo}*/}
                {/*                  completeTodo={completeTodo}*/}
                {/*                  archiveTodo={archiveTodo}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <ArchiveTodoList todos={todos}*/}
                {/*                     deleteTodo={deleteTodo}*/}
                {/*                     editTodo={editTodo}*/}
                {/*                     saveTodo={saveTodo}*/}
                {/*                     completeTodo={completeTodo}*/}
                {/*                     archiveTodo={archiveTodo}/>*/}
                {/*</div>*/}
            </div>

        )
    }
}