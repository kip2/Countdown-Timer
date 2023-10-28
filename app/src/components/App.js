import React from "react";
import styles from "../css/styles.css";
import CountDownTimer from "./CountDownTimer";

export default function App() {

	const onStartButton = (hour, minutes, second) => {
		alert(`${hour}:${minutes}:${second}`);
	};

	return (
		<>
			<h1>Count Down Timer</h1>
			<CountDownTimer onStartButton={onStartButton}/>
		</>
	);
}
