export const transferSeconds = (hour, minutes, second) => {

        let seconds = Number(second);
        if (minutes > 0) seconds += (Number(minutes) * 60);
        if (hour > 0) seconds += (Number(hour) * 60 * 60);
        return seconds;
};
