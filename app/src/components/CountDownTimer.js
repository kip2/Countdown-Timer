import React, { useState, useEffect }  from "react";
import InputForm from "./InputForm";
import Clock from "./Clock";
import TimerButtons from "./TimerButtons";
import styles from "../css/CountDownTimer.css";
import { formatTime } from "./formatTIme";
import { transferSeconds } from "./transferSeconds";

export default function CountDownTimer() {
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [second, setSecond] = useState(""); 
    const [intervalId, setIntervalId] = useState(null);

	const onStartButton = (hour, minutes, second) => {
        // 空白文字なら0に初期化する
        if (hour === "") hour = 0;
        if (minutes === "") minutes = 0;
        if (second === "") second = 0;

        // setIsActive(true);

        const id = setInterval(() => {
            let time = transferSeconds(hour, minutes, second);
            time = time > 0 ? time - 1 : time;
            [hour, minutes, second] = formatTime(time);
            setHour(hour);
            setMinutes(minutes);
            setSecond(second);

            if (time <= 0) {
                clearInterval(id);
                alert("タイマーアップ！");
                setIntervalId(null);
            }
        }, 1000);
        setIntervalId(id);
	};
    
    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);


    const handlePause = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    };

    const handleReset = () => {
        setHour("");
        setMinutes("");
        setSecond("");
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    return (
        <div className={styles.outer}>
            <section>
                <InputForm 
                    hour={hour}
                    setHour={setHour}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    second={second}
                    setSecond={setSecond}
                    onStartButton={onStartButton}
                />
                <Clock 
                    hour={hour}
                    minutes={minutes}
                    second={second}
                />
                <TimerButtons 
                    hour={hour}
                    minutes={minutes}
                    second={second}
                    onStop={handlePause}
                    onResume={onStartButton}
                    onReset={handleReset}
                />
            </section>
        </div>
    );
}