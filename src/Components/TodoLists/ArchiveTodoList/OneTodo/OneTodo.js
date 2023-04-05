import {Component} from "react";

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
            <div>
                <div>
                    <input type="checkbox" checked={isComplete} onChange={completeTodo.bind(this, id)}/>
                    {title}
                </div>
                <div>
                    {subs}
                </div>
                <div>
                    <button type='button' onClick={archiveTodo.bind(this, id)}>
                        Разархивировать
                    </button>
                    <button type='button' onClick={deleteTodo.bind(this, id)}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
}