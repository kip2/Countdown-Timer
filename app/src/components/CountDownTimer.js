import React from "react";
import Input from "./Input";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";

export default function CountDownTimer() {
    return (
        <div className={styles.outer}>
            <section>
                <h2>CountDownTimer</h2>
                <Input />
                <Clock />
                <TimerButtons />
            </section>
        </div>
    );
}