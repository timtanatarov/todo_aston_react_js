import {ThemeContext} from "../context/themeContext";
import {Component} from "react";
export class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = ThemeContext;

    handleClick = () => {
        this.context.toggleTheme();
    }

    render() {
        return (
            <div>
                <p>
                    {this.context.value}
                </p>
                <button onClick={this.handleClick}>
                    Toggle theme
                </button>
            </div>
        )
    }
};
