import React, { useState }  from "react";
import InputForm from "./InputForm";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";

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

    const formatTime = (seconds) => {
        let hour = 0;
        let minutes = 0;
        let second = 0;

        // 1時間以上なら
        if (seconds >= 3600) {
            hour = Math.floor(seconds / (60*60));
            seconds -= (hour*60*60);
        }

        // 1分以上なら
        if (seconds >= 60) {
            minutes = Math.floor(seconds / 60);
            seconds -= (minutes*60);
        }

        second = seconds;

		return (`${hour}:${minutes}:${second}`) ;
    }

    // total秒数に変換する
    const transferSeconds = (hour, minutes, second) => {
        let seconds = second;
        if (minutes != 0) seconds += (minutes * 60);
        if (minutes != 0) seconds += (hour * 60 * 60);
        return seconds;
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