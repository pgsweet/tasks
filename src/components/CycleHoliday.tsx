import React, { useState } from "react";
import { Button } from "react-bootstrap";

// 🎃: Halloween, 🎄: Christmas, 🦃: Thanksgiving, ❤️: Valentines Day, 🍀: St. Patricks Day
type Holiday = "🎃" | "🎄" | "🦃" | "❤️" | "🍀";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("❤️");

    function nextAlpha(): void {
        if (holiday === "🎄") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("❤️");
        } else {
            setHoliday("🎄");
        }
    }

    function nextDate(): void {
        if (holiday === "❤️") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("❤️");
        }
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <div>
                <Button onClick={nextAlpha}>Advance by Alphabet</Button>
                <Button onClick={nextDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
