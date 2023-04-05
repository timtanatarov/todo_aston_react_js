import {ThemeContext} from "../context/themeContext";
import {Component} from "react";
import Switch from "./Switch/Switch";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

export class ThemeToggler extends Component {
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
        const currentIcon = this.state.value ? <BsFillBrightnessHighFill /> : <BsFillMoonFill/>
        return (
            <div>
                <div>
                    {currentIcon}
                    <Switch
                        isOn={this.state.value}
                        handleToggle={() => {
                            this.setState({ value: !this.state.value })
                            this.handleClick()
                        }}
                    />
                </div>
            </div>
        )
    }
};
