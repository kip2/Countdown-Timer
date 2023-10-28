import React from "react";
import Input from "./Input";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";

export default function CountDownTimer() {
    return (
        <div className={styles.outer}>
            <section>
                <Input />
                <Clock />
                <TimerButtons />
            </section>
        </div>
    );
}