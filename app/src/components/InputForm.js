import React, { useState } from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ onStartButton = f => f }) {
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [second, setSecond] = useState("");

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
                    onChange={event => setHour(event.target.value)}
                    min="00" 
                    max="23" 
                    placeholder="時間"
                />
                <input 
                    name="minutes"
                    type="number" 
                    value={minutes}
                    onChange={event => setMinutes(event.target.value)}
                    min="00"
                    max="60" 
                    placeholder="分"
                />
                <input 
                    name="second"
                    type="number" 
                    value={second}
                    onChange={event => setSecond(event.target.value)}
                    min="00"
                    max="60" 
                    placeholder="秒"
                />
                <button>開始</button>
            </form>
        </>
    );
}