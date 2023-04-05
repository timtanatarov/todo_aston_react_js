import {Component} from 'react';
import {ThemeContext} from "../../context/themeContext";

export class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Добавить новую задачу',
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
        this.setState({value: 'Добавить новую задачу'});
    }

    render() {
        const addTodo = this.props.addTodo;
        const currentTitle = this.state.value;
        return (
            <div>
                <div>
                    My TODO
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" value={this.state.value} onClick={(event) => event.target.select()}
                                   onChange={this.handleChange}/>
                        </label>
                        <input type='submit'  value='+' onClick={addTodo.bind(this, currentTitle)}/>
                    </form>
                </div>
            </div>
        )
    }
}