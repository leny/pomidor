/* leny/pomidor
 *
 * /src/core/hooks/use-timer.js - Custom useTimer hook
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import {useState, useEffect} from "react";
import useInterval from "use-interval";

// eslint-disable-next-line no-empty-function
const noop = () => {};

export const useTimer = (
    initialSeconds,
    initialRunning = false,
    onFinished = noop,
) => {
    const [running, setRunning] = useState(initialRunning);
    const [seconds, setSeconds] = useState(initialSeconds);

    useInterval(() => running && setSeconds(val => Math.max(val - 1, 0)), 1000);

    useEffect(() => {
        if (seconds === 0) {
            setRunning(false);
            onFinished();
        }
    }, [seconds]);

    return [
        {running, seconds},
        {setRunning, setSeconds},
    ];
};
