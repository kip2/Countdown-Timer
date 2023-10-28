import React from "react";
import styles from "../css/TimerButtons.css";

export default function TimerButtons() {
    return (
        <div className={styles.timerButton}>
            <button onClick={() => onStop()}>
                一時停止
            </button>
            <button onClick={() => onReStart()}>
                再スタート
            </button>
            <button onClick={() => onreset()}>
                リセット
            </button>
        </div>
    );
}