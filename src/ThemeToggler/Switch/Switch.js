import React from 'react';
import './Switch.css';
import s from "../ThemeToggler.css";

const Switch = ({ isOn, handleToggle }) => {
    return (
        <div  className={s.toggler}>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && 'rgba(81,90,255,0.9)' }}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};

export default Switch;