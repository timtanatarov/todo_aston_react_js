import {Component} from "react";
import {OneTodoEdited} from "./OneTodoEdited/OneTodoEdited";
import {BsFillTrash3Fill, BsFillPencilFill, BsArchive, BsEyeFill} from "react-icons/bs";

import s from './OneTodo.module.css';
import {Modal} from "../../../Modal/Modal";

export class OneTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalActive: false,
            currentSubs: this.props.subs,
        }
        this.handleChangeSubsMore = this.handleChangeSubsMore.bind(this);
        this.handleChangeSubsLess = this.handleChangeSubsLess.bind(this);
    }

    handleChangeSubsMore() {
        this.setState({currentSubs: this.props.subs});
    }

    handleChangeSubsLess() {
        this.setState({currentSubs: this.props.subs.slice(0, 120)});
    }

    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            editTodo,
            needToChange,
            completeTodo,
            isComplete,
            archiveTodo,
            saveTodo,
            cancelEditTodo,
        } = this.props;

        if (!needToChange) {
            let button = '';
            if (this.state.currentSubs.length > 120) {
                button = <button onClick={this.handleChangeSubsLess} className={s.showAndHideButton}>Скрыть описание</button>;
            }
            if (this.state.currentSubs.length <= 120) {
                button = <button onClick={this.handleChangeSubsMore} className={s.showAndHideButton}>Раскрыть описание</button>;
            }
            return (
                <div className={s.container}>
                    <Modal active={this.state.modalActive} setActive={this.setState.bind(this)}>
                        <div className={s.container}>
                            <div className={s.checkbox}>
                                <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}
                                       className={s.inputButton}/>
                            </div>
                            <div className={s.titleContainer}>
                                <div className={s.titleName}>
                                    Заголовок:
                                </div>
                                <div className={s.title}>
                                    {title}
                                </div>
                            </div>
                            <div className={s.subsContainer}>
                                <div className={s.subsName}>
                                    Описание:
                                </div>
                                <div className={s.subs}>
                                    {this.state.currentSubs.length > 120 ? this.state.currentSubs.slice(0, 120) : this.state.currentSubs}
                                    <div>
                                        {button}
                                    </div>
                                </div>
                            </div>
                            <div className={s.buttonsContainer}>
                                <div>
                                    <button type='button' onClick={editTodo.bind(this, id)} className={s.editButton}>
                                        <div>
                                            <BsFillPencilFill/>
                                        </div>
                                        <div className={s.buttonText}>
                                            Редактировать
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button type='button' onClick={archiveTodo.bind(this, id)}
                                            className={s.archiveButton}>
                                        <div>
                                            <BsArchive/>
                                        </div>
                                        <div className={s.buttonText}>
                                            Архивировать
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button type='button' onClick={deleteTodo.bind(this, id)}
                                            className={s.deleteButton}>
                                        <div>
                                            <BsFillTrash3Fill color='white'/>
                                        </div>
                                        <div className={s.buttonText}>
                                            Удалить
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <div className={s.briefContainer}>
                        <div className={s.briefCheckBox}>
                            <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}
                                   className={s.briefInput}/>
                        </div>
                        <div className={s.briefTitle}>
                            {title}
                        </div>
                    </div>
                    <button onClick={(function () {
                        this.setState({modalActive: true})
                    }).bind(this)} className={s.checkButton}>
                        <BsEyeFill size='25px'/>
                    </button>
                    <button type='button' onClick={archiveTodo.bind(this, id)}
                            className={s.checkButton}>
                        <BsArchive size='20px'/>
                    </button>
                    <button type='button' onClick={deleteTodo.bind(this, id)}
                            className={s.checkButton}>
                        <BsFillTrash3Fill size='20px'/>
                    </button>

                </div>
            )
        }
        return (
            <Modal active={this.state.modalActive} setActive={this.setState.bind(this)}>
                <OneTodoEdited saveTodo={saveTodo} cancelEditTodo={cancelEditTodo} id={id} title={title} subs={subs}/>
            </Modal>
        )
    }
}