import React, { useState, useEffect } from "react";
import styles from "../css/Clock.css";

export default function Clock({ movedTimer, moveTimer = f => f }) {
    const [clockTime] = useState(60);

    useEffect(() => {
        if (clockTime <= 0) {
            return;
        }

        const timer = setInterval(() => {
            moveTimer(clockTime - 1);
        }, 1000);

        return () => {
            timer();
        };
    }, clockTime)

    return (
        <div className={styles.clock}>
            <h3 >{clockTime}</h3>
        </div>
    );
}