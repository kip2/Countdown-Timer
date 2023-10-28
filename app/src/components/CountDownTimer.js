import React, { useState }  from "react";
import InputForm from "./InputForm";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";
import { formatTime } from "./formatTIme";
import { transferSeconds } from "./transferSeconds";

export default function CountDownTimer() {
    const [movedTimer] = useState(false);

	const onStartButton = (hour, minutes, second) => {
        // 空白文字なら0に初期化する
        if (hour === "") hour = 0;
        if (minutes === "") minutes = 0;
        if (second === "") second = 0;

        let time = transferSeconds(hour, minutes, second);
        alert("time: " + time);
        alert("format time: " + formatTime(time));
	};

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