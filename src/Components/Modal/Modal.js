import {Component} from "react";
import './Modal.css';

export class Modal extends Component {
    render() {
        const {active, setActive, children} = this.props;
        return (
            <div className={active ? 'modal active' : 'modal'} onClick={() => {
                setActive({modalActive: false})
            }}>
                <div className={active ? 'modal__content active' : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }
}