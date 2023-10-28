import React, { useState } from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ onStartButton = f => f }) {
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [second, setSecond] = useState(0);

    const submit = e => {
        e.preventDefault();
        onStartButton(hour, minutes, second)
        setHour = 0;
        setMinutes = 0;
        setSecond = 0;
    };

    return (
        <>
            <form onSubmit={{submit}} className={styles.container}>
                <input
                    type="number" 
                    value={hour}
                    onChange={event => setHour(event.target.value)}
                    min="00" 
                    max="24" 
                    placeholder="時間"
                />
                <input 
                    type="number" 
                    value={minutes}
                    onChange={event => setMinutes(event.target.value)}
                    min="00"
                    max="60" 
                    placeholder="分"
                />
                <input 
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