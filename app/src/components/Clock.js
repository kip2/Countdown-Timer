import React, { useState, useEffect } from "react";
import styles from "../css/Clock.css";
import { formatTime } from "./formatTIme";

export default function Clock({
    hour,
    minutes,
    second,
    // clockTime, 
    // setClockTime,
    // moveTimer = f => f 
}) {

    // useEffect(() => {
    //     if (clockTime <= 0) {
    //         return;
    //     }

    //     const timer = setInterval(() => {
    //         // moveTimer(clockTime - 1);
    //         setClockTime(clockTime - 1);
    //     }, 1000);

    //     return () => {
    //         timer();
    //     };
    // }, clockTime)

    return (
        <div className={styles.clock}>
            <h3>
                {hour === 0 || hour === '' ? '00' : hour < 10 ? '0' + hour : hour}
                :
                {minutes === 0 || minutes === '' ? '00' : minutes < 10 ? '0' + minutes : minutes}
                :
                {second === 0 || second === '' ? '00' : second < 10 ? '0' + second : second}
            </h3>
        </div>
    );
}