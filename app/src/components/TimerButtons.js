import React from "react";
import styles from "../css/TimerButtons.css";

export default function TimerButtons() {
    return (
        <div className={styles.timerButton}>
            <button >一時停止</button>
            <button >再スタート</button>
            <button >リセット</button>
        </div>
    );
}