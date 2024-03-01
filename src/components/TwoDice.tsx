import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    function rollLeft(): void {
        setLeftDie(d6());
    }

    function rollRight(): void {
        setRightDie(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                Left: <span data-testid="left-die">{leftDie}</span>
                Right: <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {leftDie === 1 && rightDie === 1 ? (
                    <span>You Lose</span>
                ) : rightDie === leftDie ? (
                    <span>You Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
