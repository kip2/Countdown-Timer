import React, { useRef, useEffect } from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ hour, setHour, minutes , setMinutes, second , setSecond, onStartButton = f => f }) {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);

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

    useEffect(() => {
        const addEvent = (element, setter, max) => {
            const handle = (e) => handleWheel(e, setter, max);
            element.addEventListener('wheel', handle, { passive: false });
            return () => element.removeEventListener('wheel', handle);
        }
        addEvent(hourRef.current, setHour, 23);
        addEvent(minuteRef.current, setMinutes, 59);
        addEvent(secondRef.current, setSecond, 59);
    }, []);

    return (
        <>
            <form onSubmit={submit} className={styles.container}>
                <input
                    ref={hourRef}
                    name="hour"
                    type="number" 
                    value={hour}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setHour(
                        event.target.value < 0 ? 0 : event.target.value > 23 ? 23 : event.target.value
                        )}
                    min="00" 
                    max="23" 
                    placeholder="時間"
                />
                <input 
                    ref={minuteRef}
                    name="minutes"
                    type="number" 
                    value={minutes}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setMinutes(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    min="00"
                    max="59" 
                    placeholder="分"
                />
                <input 
                    ref={secondRef}
                    name="second"
                    type="number" 
                    value={second}
                    inputMode="numeric"
                    onInput={handleInputChange}
                    onChange={event => setSecond(
                        event.target.value < 0 ? 0 : event.target.value > 59 ? 59 : event.target.value
                        )}
                    min="00"
                    max="59" 
                    placeholder="秒"
                />
            </form>
        </>
    );
}