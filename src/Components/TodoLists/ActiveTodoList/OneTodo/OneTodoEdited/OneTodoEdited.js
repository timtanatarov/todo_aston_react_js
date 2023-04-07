import {Component} from "react";
import s from './OneTodoEdited.module.css';
import { BsSaveFill, BsDashSquareDotted } from "react-icons/bs";


export class OneTodoEdited extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: this.props.title,
            editSubs: this.props.subs,
            // editTitle: '',
            // editSubs: '',
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
        if (event.target.value.length > 1000) {
            alert ('Превышено количество вводимых символов');
            return;
        }
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
        const {id, saveTodo, cancelEditTodo, } = this.props;
        return (
            <div className={s.container}>
                <form onSubmit={this.handleSubmit}>
                    <div className={s.titleInputContainer}>
                        <div className={s.titleInputText}>
                            Введите новый заголовок:
                        </div>
                        <label>
                            <input type="text"  onClick={(event) => event.target.select()}
                                   onChange={this.handleTitleChange} className={s.titleInput} placeholder={this.props.title}/>
                        </label>
                    </div>
                    <div className={s.subsInputContainer}>
                        <div className={s.subsInputText}>
                            Введите новое описание:
                        </div>
                        <label>
                            <textarea type="text" onClick={(event) => event.target.select()}
                                   onChange={this.handleSubsChange} className={s.subsInput} value={this.state.editSubs} placeholder={this.props.subs}/>
                        </label>
                    </div>
                    <div className={s.saveButtonContainer}>
                        <button type='button'
                                onClick={saveTodo.bind(this, id, this.state.editTitle, this.state.editSubs)} className={s.saveButton}>
                            <BsSaveFill/>
                            <div className={s.saveButtonText}>
                                Сохранить
                            </div>
                        </button>
                        <button type='button'
                                onClick={cancelEditTodo.bind(this, id)} className={s.saveButton}>
                            <BsDashSquareDotted/>
                            <div className={s.saveButtonText}>
                                Отменить
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}