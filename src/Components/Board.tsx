import {Square} from "./Square";
import React from "react";

export interface BoardProps {
    onClick: (i: number) => void;
    squares: (string | null)[];
}


export class Board extends React.Component<BoardProps, {}> {
    renderSquare(i: number): React.ReactNode {
        return (<Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />);
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}