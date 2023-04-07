import React, {Component} from "react";
import {OneTodo} from "../TodoLists/ActiveTodoList/OneTodo/OneTodo";
import {debounce} from "@mui/material";
import {OneTodoArchived} from "../TodoLists/ArchiveTodoList/OneTodo/OneTodoArchived";
import {OneTodoDone} from "../TodoLists/DoneTodoList/OneTodo/OneTodoDone";
import s from './LiveSearch.module.css';

export class LiveSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
        this.handleChange = debounce(this.handleChange.bind(this), 500);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({input: e.target.value.toLowerCase()});
    }

    render() {
        const {deleteTodo, editTodo, saveTodo, completeTodo, archiveTodo, cancelEditTodo} = this.props;
        let {searchTodos} = this.props;
        if (this.state.input.length > 0) {
            searchTodos = searchTodos.filter(i => i.title.toLowerCase().match(this.state.input));
        }

        let searchBar = <div></div>;
        if (this.state.input.length > 1) {
            searchBar = <div>
                {searchTodos.map((item) => {
                    // return (
                    //     <div key={(item.title + item.subs).toString() }>
                    //         {item.title}
                    //     </div>
                    // )
                    if (!item.isCompleted && !item.isArchived) {
                        return (
                            <div key={item.title.toString()}>
                                <OneTodo title={item.title} subs={item.subs} id={item.id}
                                         deleteTodo={deleteTodo} editTodo={editTodo}
                                         saveTodo={saveTodo} needToChange={item.needToEdit}
                                         completeTodo={completeTodo} isComplete={item.isCompleted}
                                         archiveTodo={archiveTodo} isArchived={item.isArchived}
                                         cancelEditTodo={cancelEditTodo}
                                />
                            </div>)
                    }
                    if (item.isArchived) {
                        return (<div key={item.title.toString()}>
                            <OneTodoArchived title={item.title} subs={item.subs}
                                             id={item.id}
                                             deleteTodo={deleteTodo}
                                             archiveTodo={archiveTodo}
                                             isArchived={item.isArchived}
                                             completeTodo={completeTodo}
                                             isComplete={item.isComplete}
                            /></div>)
                    }
                    if (item.isCompleted && !item.isArchived) {
                        return (<div key={item.title.toString()}>
                            <OneTodoDone title={item.title} subs={item.subs}
                                         id={item.id}
                                         deleteTodo={deleteTodo}
                                         completeTodo={completeTodo}
                                         isComplete={item.isCompleted}
                                         archiveTodo={archiveTodo}
                            /></div>)
                    }

                })}
            </div>
        }
        return (
            <div className={s.container}>
                <div className={s.inputContainer}>
                    <input type="text" placeholder="Найти todo" onChange={this.handleChange} className={s.input}/>
                </div>
                <div className={s.todosContainer}>
                    {searchBar}
                </div>
            </div>
        )
    }
}

export default LiveSearch;