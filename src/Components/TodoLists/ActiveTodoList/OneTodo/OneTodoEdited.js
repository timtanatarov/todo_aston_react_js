import {Component} from "react";
import s from './OneTodo.module.css';

export class OneTodoEdited extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: this.props.title,
            editSubs: this.props.subs,
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubsChange = this.handleSubsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({
            editTitle: event.target.value,
            editSubs: this.state.editSubs,
        });
    }

    handleSubsChange(event) {
        this.setState({
            editTitle: this.state.editTitle,
            editSubs: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({})
    }

    render() {
        const {id, saveTodo,} = this.props;
        return (
            <div className={s.oneTodoContainer}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            <input type="text" value={this.state.editTitle} onClick={(event) => event.target.select()}
                                   onChange={this.handleTitleChange} className={s.editedTitle}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="text" value={this.state.editSubs} onClick={(event) => event.target.select()}
                                   onChange={this.handleSubsChange} className={s.editedSubs}/>
                        </label>
                    </div>
                    <div>
                        <button type='button' className={s.editButtonOneTodo} onClick={saveTodo.bind(this, id, this.state.editTitle, this.state.editSubs)}>
                            Сохранить
                        </button>
                    </div>
                </form>
                <div>
                </div>
            </div>
        )
    }
}