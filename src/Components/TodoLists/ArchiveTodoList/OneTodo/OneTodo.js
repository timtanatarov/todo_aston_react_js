import {Component} from "react";
import s from "./OneTodo.module.css";
import { BsFillTrash3Fill, BsFillCapslockFill } from "react-icons/bs";

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
                    <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)} className={s.checkbox}/>
                    {title}
                </div>
                <div className={s.subs} >
                    {subs}
                </div>
                <div className={s.buttonsContainer}>
                    <button type='button' onClick={archiveTodo.bind(this, id)} className={s.archiveButton}>
                        <BsFillCapslockFill/>
                    </button>
                    <button type='button' onClick={deleteTodo.bind(this, id)} className={s.deleteButton}>
                        <BsFillTrash3Fill />
                    </button>
                </div>
            </div>
        )
    }
}