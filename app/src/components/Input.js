import React from "react";
import styles from "../css/Input.css";

export default function Input() {
    return (
        <>
            <form action="" className={styles.outer}>
                <input type="number" min="00" max="24" placeholder="時間"/>
                <input type="number" min="00" max="60" placeholder="分"/>
                <input type="number" min="00" max="60"  placeholder="秒"/>
                <button submit="">開始</button>
            </form>
        </>
    );
}