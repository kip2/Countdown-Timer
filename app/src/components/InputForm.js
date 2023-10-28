import React, { useState } from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ hour, setHour, minutes , setMinutes, second , setSecond, onStartButton = f => f }) {

    const submit = e => {
        e.preventDefault();
        onStartButton(hour, minutes, second);
        setHour("");
        setMinutes("");
        setSecond("");
    };

    return (
        <>
            <form onSubmit={submit} className={styles.container}>
                <input
                    name="hour"
                    type="number" 
                    value={hour}
                    onChange={event => setHour(
                        event.target.value < 0 ? 0 : event.target.value > 23 ? 23 : event.target.value
                        )}
                    min="00" 
                    max="23" 
                    placeholder="時間"
                />
                <input 
                    name="minutes"
                    type="number" 
                    value={minutes}
                    onChange={event => setMinutes(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    min="00"
                    max="59" 
                    placeholder="分"
                />
                <input 
                    name="second"
                    type="number" 
                    value={second}
                    onChange={event => setSecond(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    min="00"
                    max="59" 
                    placeholder="秒"
                />
                <button>開始</button>
            </form>
        </>
    );
}