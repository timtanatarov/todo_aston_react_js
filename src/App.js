import './App.css';
import {Component} from 'react';
import {CreateTodo} from "./Components/CreateTodo/CreateTodo";
import {TodoList} from "./Components/TodoList/TodoList";
import {logDOM} from "@testing-library/react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1,
                title: 'Помыть посуду',
                subs: 'Не забыть сполоснуть, протереть и убрать на полку с чистой посудой.',
                isEdited: false,
            }, {
                id: 2,
                title: 'Запустить стирку',
                subs: 'Не забыть включить отжим, повесить на сушилку и открыть окно.',
                isEdited: false,
            }],
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    addTodo = function (currentTitle) {
        const currentTodos = this.state.todos;
        this.setState({
            todos: [...currentTodos, {
                id: currentTodos.length + 1, title: currentTitle, subs: 'Пустое описание', isEdited: false,
            }]
        })
    }

    editTodo = function (currentId) {
        const currentTodos = this.state.todos;
        this.setState({
            todos: currentTodos.map(item => console.log(currentId))
        })
    }

    deleteTodo = function (currentId) {
        const currentTodos = this.state.todos;
        this.setState({
            todos: (currentTodos.filter(value => {
                return value.id !== currentId;
            }))
        })
    }

    render() {
        return (<div className='App'>
            <div><CreateTodo addTodo={this.addTodo}/></div>
            <div><TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/></div>
        </div>)
    }
}

export default App;
