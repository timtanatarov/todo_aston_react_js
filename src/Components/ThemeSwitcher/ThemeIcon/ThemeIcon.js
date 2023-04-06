import {BsFillBrightnessHighFill, BsFillMoonFill} from "react-icons/bs";

export const ThemeIcon = ({theme}) => {
    const currentIcon = theme === 'light' ? <BsFillBrightnessHighFill size='22px'/> : <BsFillMoonFill size='22px'/>
    return (
        <div>
            {currentIcon}
        </div>
    )

}