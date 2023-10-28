export const transferSeconds = (hour, minutes, second) => {
        let seconds = second;
        if (minutes != 0) seconds += (minutes * 60);
        if (minutes != 0) seconds += (hour * 60 * 60);
        return seconds;
};
