import * as React from "react";
import '../Styles/App.css';
import {MouseEventHandler} from "react";

export const Square =
    ({value, onClick}: {
        value: string | null,
        onClick: MouseEventHandler<HTMLButtonElement>
    }): JSX.Element =>
    <button
        className="square"
        onClick={onClick}>
        {value}
    </button>

