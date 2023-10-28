import React from "react";
import styles from "../css/InputForm.css";

export default function InputForm({ onStart = f => f }) {
    return (
        <>
            <form action="" className={styles.container}>
                <input type="number" min="00" max="24" placeholder="時間"/>
                <input type="number" min="00" max="60" placeholder="分"/>
                <input type="number" min="00" max="60"  placeholder="秒"/>
                <button onClick={() => onStart()}>開始</button>
            </form>
        </>
    );
}