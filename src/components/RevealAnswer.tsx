import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visiable, setVisiable] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisiable(!visiable);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visiable && <div>42</div>}
        </div>
    );
}
