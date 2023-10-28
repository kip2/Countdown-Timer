import React from "react";
import Input from "./Input";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";

export default function CountDownTimer() {
    return (
        <>
            <h2>CountDownTimer</h2>
            <Input />
            <Clock />
            <TimerButtons />
        </>
    );
}