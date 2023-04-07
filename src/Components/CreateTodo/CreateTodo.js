import {Component} from 'react';
import {ThemeContext} from "../../context/themeContext";
import s from './CreateTodo.module.css';

export class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextType = ThemeContext;

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: ''});
    }

    render() {
        const addTodo = this.props.addTodo;
        const currentTitle = this.state.value;
        return (
            <div className={s.container}>
                <div className={s.formContainer}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value}placeholder='Добавить новую задачу' onClick={(event) => event.target.select()}
                                   onChange={this.handleChange} className={s.form}/>
                        </label>
                        <input type='submit'  value='+' onClick={addTodo.bind(this, currentTitle)} className={s.button}/>
                    </form>
                </div>
            </div>
        )
    }
}