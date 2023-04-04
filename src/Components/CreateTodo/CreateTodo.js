import {Component} from 'react';
import s from './createTodo.module.css';

export class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Добавить новую задачу',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: 'Добавить новую задачу'});
    }

    render() {
        const addTodo = this.props.addTodo;
        const currentTitle = this.state.value;
        return (
            <div className={s.containerCreateTodo}>
                <div className={s.titleCreateTodo}>
                    My TODO
                </div>
                <div className={s.inputAndButtonBox}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onClick={(event) => event.target.select()}
                                   onChange={this.handleChange} className={s.inputCreateTodo}/>
                        </label>
                        <input type='submit' value='+' onClick={addTodo.bind(this, currentTitle)}
                               className={s.buttonCreateTodo}/>
                    </form>
                </div>
            </div>
        )
    }
}