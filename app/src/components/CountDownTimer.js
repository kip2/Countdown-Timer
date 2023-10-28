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
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive && !intervalId) {
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
                    setIsActive(false);
                    setIntervalId(null);
                }
            }, 1000);
            setIntervalId(id);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isActive, intervalId]);

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
        setIsActive(false);
        if (intervalId) {
            clearInterval(intervalId);
        }
    };

    const handleResume = () => {
        setIsActive(true);
        if (intervalId) {
            setIntervalId(intervalId);
        }
    };

    const handleReset = () => {
        setHour("");
        setMinutes("");
        setSecond("");
        if (intervalId) {
            clearInterval(intervalId);
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
                    // clockTime={clockTime} 
                    // setClockTime={setClockTime}
                />
                <TimerButtons 
                    onStop={handlePause}
                    onResume={handleResume}
                    onReset={handleReset}
                />
            </section>
        </div>
    );
}