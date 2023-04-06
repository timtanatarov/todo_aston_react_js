import {ThemeContext} from "../../context/themeContext";
import {Component} from "react";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import s from './ThemeSwitcher.css';

export class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false,
        }
    }

    static contextType = ThemeContext;

    handleClick = () => {
        this.context.toggleTheme();
    }

    render() {
        return (
            <div>
                <div>
                    <ThemeToggler
                        isOn={this.state.value}
                        handleToggle={() => {
                            this.setState({value: !this.state.value})
                            this.handleClick()
                        }}
                    />
                </div>
            </div>
        )
    }
};
