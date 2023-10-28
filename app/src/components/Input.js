import React from "react";
import styles from "../css/Input.css";

export default function Input() {
    return (
        <>
            <form action="" className={styles.outer}>
                <input placeholder="時間"/>
                <input placeholder="分"/>
                <input placeholder="秒"/>
                <button submit="">開始</button>
            </form>
        </>
    );
}