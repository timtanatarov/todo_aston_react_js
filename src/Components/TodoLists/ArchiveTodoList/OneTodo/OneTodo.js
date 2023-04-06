import {Component} from "react";
import s from "./OneTodo.module.css";
import {BsFillTrash3Fill, BsFillCapslockFill} from "react-icons/bs";

export class OneTodo extends Component {
    render() {
        const {
            title,
            subs,
            id,
            deleteTodo,
            archiveTodo,
            completeTodo,
            isComplete,
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
                <button type='button' onClick={archiveTodo.bind(this, id)} className={s.archiveButton}>
                    <BsFillCapslockFill size='20px'/>
                </button>
                <button type='button' onClick={deleteTodo.bind(this, id)} className={s.deleteButton}>
                    <BsFillTrash3Fill size='20px'/>
                </button>
            </div>
        )
    }
}