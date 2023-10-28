import React, { useState, useEffect } from "react";
import styles from "../css/Clock.css";
import { formatTime } from "./formatTIme";

export default function Clock({ clockTime, setClockTime ,moveTimer = f => f }) {

    useEffect(() => {
        if (clockTime <= 0) {
            return;
        }

        const timer = setInterval(() => {
            // moveTimer(clockTime - 1);
            setClockTime(clockTime - 1);
        }, 1000);

        return () => {
            timer();
        };
    }, clockTime)

    return (
        <div className={styles.clock}>
            <h3>{formatTime(clockTime)}</h3>
        </div>
    );
}