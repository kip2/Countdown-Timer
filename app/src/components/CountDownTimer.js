import React from "react";
import InputForm from "./InputForm";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";

export default function CountDownTimer() {
    return (
        <div className={styles.outer}>
            <section>
                <InputForm />
                <Clock />
                <TimerButtons />
            </section>
        </div>
    );
}