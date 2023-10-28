import React from "react";
import InputForm from "./InputForm";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";

export default function CountDownTimer({ onStartButton = f => f }) {
    return (
        <div className={styles.outer}>
            <section>
                <InputForm onStartButton={onStartButton}/>
                <Clock />
                <TimerButtons />
            </section>
        </div>
    );
}