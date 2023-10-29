import React from "react";
import styles from "../css/Clock.css";

export default function Clock({
    hour,
    minutes,
    second,
}) {

    return (
        <div className={styles.clock}>
            <h3>
                {hour === 0 || hour === '' ? '00' : hour < 10 ? '0' + hour : hour}
                :
                {minutes === 0 || minutes === '' ? '00' : minutes < 10 ? '0' + minutes : minutes}
                :
                {second === 0 || second === '' ? '00' : second < 10 ? '0' + second : second}
            </h3>
        </div>
    );
}