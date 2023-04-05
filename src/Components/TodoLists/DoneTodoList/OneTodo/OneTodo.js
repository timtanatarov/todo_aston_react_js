import {Component} from "react";

export class OneTodo extends Component {
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
                        Архивировать
                    </button>
                    <button type='button' onClick={deleteTodo.bind(this, id)}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
}