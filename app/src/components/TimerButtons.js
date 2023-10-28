import React from "react";
import styles from "../css/TimerButtons.css";

export default function TimerButtons({
    onStop = f => f,
    onResume = f => f,
    onReset = f => f,
}) {

    return (
        <div className={styles.timerButton}>
            <button 
                onClick={() => onStop()}>
                    一時停止
            </button>
            <button 
                onClick={() => onResume()}>
                    再スタート
            </button>
            <button 
                onClick={() => onReset()}>
                    リセット
            </button>
        </div>
    );
}