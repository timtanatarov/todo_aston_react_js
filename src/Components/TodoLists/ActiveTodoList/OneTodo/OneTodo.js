import {Component} from "react";
import {OneTodoEdited} from "./OneTodoEdited/OneTodoEdited";
import { BsFillTrash3Fill, BsFillPencilFill, BsArchive } from "react-icons/bs";
import s from './OneTodo.module.css';

export class OneTodo extends Component {
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
        } = this.props;

        if (!needToChange){
            return (
                <div className={s.container}>
                    <div className={s.titleContainer}>
                        <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)} className={s.checkbox}/>
                        {title}
                    </div>
                    <div className={s.subs}>
                        {subs}
                    </div>
                    <div className={s.buttonsContainer}>
                        <div>
                                <button type='button' onClick={editTodo.bind(this, id)} className={s.editButton}>
                                <BsFillPencilFill color='white'/>
                            </button>
                        </div>
                        <div>
                            <button type='button' onClick={archiveTodo.bind(this, id)} className={s.archiveButton}>
                                <BsArchive />
                            </button>
                        </div>
                        <div>
                            <button type='button' onClick={deleteTodo.bind(this, id)} className={s.deleteButton}>
                                <BsFillTrash3Fill />
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <OneTodoEdited saveTodo={saveTodo} id={id} title={title} subs={subs}  />
        )
    }
}