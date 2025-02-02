import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function giveMulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <span>{attempts}</span> attempts left
            <Button
                onClick={() => (setInProgress(true), setAttempts(attempts - 1))}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={giveMulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
