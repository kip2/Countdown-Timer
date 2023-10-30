import React from "react";
import styles from "../css/TimerButtons.css";

export default function TimerButtons({
    hour, 
    minutes,
    second,
    onStop = f => f,
    onResume = f => f,
    onReset = f => f,
}) {

    return (
        <div className={styles.timerButton}>
            <button 
                onClick={() => onResume(hour, minutes, second)}>
                    スタート
            </button>
            <button 
                onClick={() => onStop()}>
                    ストップ
            </button>
            <button 
                onClick={() => onReset()}>
                    リセット
            </button>
        </div>
    );
}