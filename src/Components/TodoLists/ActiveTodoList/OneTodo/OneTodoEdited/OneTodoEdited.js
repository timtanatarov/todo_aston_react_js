import {Component} from "react";
import s from './OneTodoEdited.module.css';
import { BsSaveFill } from "react-icons/bs";


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
            <div className={s.container}>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.titleInputContainer}>
                        <label>
                            <input type="text" value={this.state.editTitle} onClick={(event) => event.target.select()}
                                   onChange={this.handleTitleChange} className={s.titleInput}/>
                        </label>
                    </div>
                    <div className={s.subsInputContainer}>
                        <label>
                            <input type="text" value={this.state.editSubs} onClick={(event) => event.target.select()}
                                   onChange={this.handleSubsChange} className={s.subsInput}/>
                        </label>
                    </div>
                    <div className={s.saveButtonContainer}>
                        <button type='button'
                                onClick={saveTodo.bind(this, id, this.state.editTitle, this.state.editSubs)} className={s.saveButton}>
                            <BsSaveFill/>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}