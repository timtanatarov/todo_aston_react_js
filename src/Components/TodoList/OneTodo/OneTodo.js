import {Component} from "react";
import s from './OneTodo.module.css';

export class OneTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        const {title, subs, id} = this.props;
        return (
            <div className={s.oneTodo}>
                <div className={s.titleOneTodo}>
                    {id}. {title}
                </div>
                <div className={s.subsOneTodo}>
                    {subs}
                </div>
            </div>
    )
    }
}