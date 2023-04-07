import {Component} from "react";
import s from './OneTodoDone.module.css';
import {BsFillTrash3Fill, BsArchive} from "react-icons/bs";

export class OneTodoDone extends Component {
    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            completeTodo,
            isComplete,
            archiveTodo,
        } = this.props;

        return (
            <div className={s.container}>
                <div className={s.titleContainer}>
                    <div className={s.checkbox}>
                        <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}
                               className={s.input}/>
                    </div>
                    <div className={s.title}>
                        {title}
                    </div>
                </div>
                <div className={s.buttonsContainer}>
                    <button type='button' onClick={archiveTodo.bind(this, id)} className={s.archiveButton}>
                        <BsArchive size='20px'/>
                    </button>
                    <button type='button' onClick={deleteTodo.bind(this, id)} className={s.deleteButton}>
                        <BsFillTrash3Fill size='20px'/>
                    </button>
                </div>
            </div>
        )
    }
}