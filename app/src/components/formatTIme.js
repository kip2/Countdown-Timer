export const formatTime = (seconds) => {
        let hour = 0;
        let minutes = 0;
        let second = 0;

        // 1時間以上なら
        if (seconds >= 3600) {
            hour = Math.floor(seconds / (60*60));
            seconds -= (hour*60*60);
        }

        // 1分以上なら
        if (seconds >= 60) {
            minutes = Math.floor(seconds / 60);
            seconds -= (minutes*60);
        }

        second = seconds;

		return (hour < 10 ? '0' + hour : hour ) + ":" + (minutes < 10 ? '0' + minutes : minutes) + ":" + (second < 10 ? '0' + second  :  second );
}