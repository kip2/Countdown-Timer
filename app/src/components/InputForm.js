import React from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ hour, setHour, minutes , setMinutes, second , setSecond, onStartButton = f => f }) {

    const submit = e => {
        e.preventDefault();
        onStartButton(hour, minutes, second);
    };

    const handleInputChange = e => {
        // 数字以外の入力は""に直す
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        // 00なら0
        if (e.target.value === '00') e.target.value = 0;
    }

    const handleWheel = (e, setter, max) => {
        e.preventDefault();
        const newValue = e.target.value - Math.sign(e.deltaY);
        setter(newValue < 0 ? 0 : newValue > max ? max : newValue);
    }

    return (
        <>
            <form onSubmit={submit} className={styles.container}>
                <input
                    name="hour"
                    type="number" 
                    value={hour}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setHour(
                        event.target.value < 0 ? 0 : event.target.value > 23 ? 23 : event.target.value
                        )}
                    onWheel={e => handleWheel(e, setHour, 23)}
                    min="00" 
                    max="23" 
                    placeholder="時間"
                />
                <input 
                    name="minutes"
                    type="number" 
                    value={minutes}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setMinutes(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    onWheel={e => handleWheel(e, setMinutes, 59)}
                    min="00"
                    max="59" 
                    placeholder="分"
                />
                <input 
                    name="second"
                    type="number" 
                    value={second}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setSecond(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    onWheel={e => handleWheel(e, setSecond, 59)}
                    min="00"
                    max="59" 
                    placeholder="秒"
                />
                <button>開始</button>
            </form>
        </>
    );
}