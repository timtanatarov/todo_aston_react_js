import {Component} from "react";
import s from './OneEditedTodo.module.css';

export class OneEditedTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, subs, id, saveTodo} = this.props;
        return (
            <div className={s.oneTodoContainer}>
                <div className={s.titleOneTodo}>
                    <form>
                        <label>
                            <input type="text" value='Изменить заголовок'/>
                        </label>
                    </form>
                </div>
                <div className={s.subsOneTodo}>
                    <form>
                        <label>
                            <input type="text" value='Изменить описание'/>
                        </label>
                    </form>
                </div>
                <div>
                    <button type='button' className={s.deleteButtonOneTodo} onClick={saveTodo.bind(this, id)}>
                        Сохранить
                    </button>
                </div>
            </div>
        );
    }
}