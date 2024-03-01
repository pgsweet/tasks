import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {type === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
