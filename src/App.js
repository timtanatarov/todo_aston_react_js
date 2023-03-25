import './App.css';
import {Component} from 'react';
import {CreateTodo} from "./Components/CreateTodo/CreateTodo";
import {TodoList} from "./Components/TodoList/TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Помыть посуду',
                    subs: 'Не забыть сполоснуть, протереть и убрать на полку с чистой посудой.'
                },
                {
                    id: 2,
                    title: 'Запустить стирку',
                    subs: 'Не забыть включить отжим, повесить на сушилку и открыть окно.'
                }
            ],
        };

        // this.addTodo = this.addTodo.bind(this);
    }

    // addTodo(){
    //     this.setState(() => ({
    //         todos: {},
    //     }))
    // }

    render() {

        return (
            <div className='App'>
                <div><CreateTodo/></div>
                <div><TodoList todos={this.state.todos}/></div>
                <div>
                    <button onClick>

                    </button>
                </div>
            </div>
        )
    }
}

export default App;
