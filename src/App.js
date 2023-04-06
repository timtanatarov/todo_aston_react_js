import React, {Component} from "react";
import {CreateTodo} from "./Components/CreateTodo/CreateTodo";
import {TodoRoutes} from "./Components/TodoLists/TodoLinks/TodoRoutes/TodoRoutes";
import {Links} from "./Components/TodoLists/TodoLinks/Links/Links";
import {ThemeContext} from "./context/themeContext";
import {ThemeSwitcher} from "./Components/ThemeSwitcher/ThemeSwitcher";
import s from './App.module.css';
import {nanoid} from 'nanoid';
import {ThemeIcon} from "./Components/ThemeSwitcher/ThemeIcon/ThemeIcon";

const ID_SIZE = 8;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:
                JSON.parse(localStorage.getItem('todos')) ||
                [
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Помыть посуду',
                        subs: 'Не забыть сполоснуть, протереть и убрать на полку с чистой посудой.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Запустить стирку',
                        subs: 'Не забыть включить отжим, повесить на сушилку и открыть окно.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Сходить на вечеринку',
                        subs: 'Захватить с собой колонку и бонусную карту КБ.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Забрать куртку из химчистки',
                        subs: 'Взять мелочь для чаевых и записать номер мастера, который чистил куртку.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Начать бегать по утрам',
                        subs: 'Брать с собой воду и наушники.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                    {
                        id: nanoid(ID_SIZE),
                        title: 'Перестать есть фастфуд',
                        subs: 'Заходить в жизньмарт и покупать там веган-салаты.',
                        needToEdit: false,
                        isCompleted: false,
                        isArchived: false,
                    },
                ],
            theme: 'dark',
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
        this.archiveTodo = this.archiveTodo.bind(this);

    }

    // setModalActive = function(currentId) {
    //     const currentTodos = this.state.todos;
    //
    // }

    addTodo = function (currentTitle) {
        if (currentTitle.length < 2 || currentTitle === 'Добавить новую задачу') {
            alert('Введите заголовок');
            return;
        }
        const currentTodos = this.state.todos;
        this.setState({
            todos: [{
                id: nanoid(ID_SIZE),
                title: currentTitle,
                subs: 'Пустое описание',
                needToEdit: false,
                isCompleted: false,
                isArchived: false,
            }, ...currentTodos,]
        })
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    editTodo = function (currentId) {
        const currentTodos = this.state.todos;
        currentTodos.map(value => {
            if (value.id === currentId) {
                value.needToEdit = true;
                value.isCompleted = false;
                value.isArchived = false;
            }
        });
        this.setState({
            todos: currentTodos,
        });
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    saveTodo = function (currentId, currentTitle, currentSubs) {
        const currentTodos = this.state.todos;
        currentTodos.map(value => {
            if (value.id === currentId) {
                value.needToEdit = false;
                value.title = currentTitle;
                value.subs = currentSubs;
                value.isCompleted = false;
            }
        });
        this.setState({
            todos: currentTodos,
        })
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    deleteTodo = function (currentId) {
        const currentTodos = this.state.todos;
        this.setState({
            todos: (currentTodos.filter(value => {
                return value.id !== currentId;
            }))
        })
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    completeTodo = function (currentId) {
        const currentTodos = this.state.todos;
        currentTodos.map(value => {
            if (value.id === currentId) {
                value.isCompleted = !value.isCompleted;
            }
        })
        this.setState({
            todos: currentTodos,
        })

        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    archiveTodo = function (currentId) {
        const currentTodos = this.state.todos;
        currentTodos.map(value => {
            if (value.id === currentId) {
                value.isArchived = !value.isArchived;
            }
        });
        this.setState({
            todos: currentTodos,
        });
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps === this.props && prevState === this.state) return;
        document.body.dataset.theme = this.state.theme;
    }

    toggleTheme = () => {
        this.setState(({theme}) =>
            ({
                theme: theme === 'light' ? 'dark' : 'light',
            })
        )
    }


    render() {
        return (
            <ThemeContext.Provider value={{value: this.state.theme, toggleTheme: this.toggleTheme}}>
                <div className={s.App}>
                    <div className={s.Header}>
                        <div className={s.container}>
                            <div className={s.HeaderLine}>
                                <div className={s.CreateTodo}>
                                    <CreateTodo addTodo={this.addTodo}/>
                                </div>
                                <div className={s.ThemeToggler}>
                                    <div className={s.ThemeSwitcher}>
                                        <ThemeSwitcher/>
                                    </div>
                                    <div>
                                        <ThemeIcon theme={this.state.theme}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.MainContainer}>
                            <div className={s.Links}>
                                <Links/>
                            </div>
                        <div className={s.TodosContainer}>
                            <div>
                                <TodoRoutes todos={this.state.todos}
                                            deleteTodo={this.deleteTodo}
                                            editTodo={this.editTodo}
                                            saveTodo={this.saveTodo}
                                            completeTodo={this.completeTodo}
                                            archiveTodo={this.archiveTodo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        )
    }
}


export default App;
