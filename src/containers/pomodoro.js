/* leny/pomidor
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import {useCallback} from "react";
import {useTimer} from "../core/hooks/use-timer";

import classnames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";

import {SESSION_DURATION} from "../core/constants";

const Pomodoro = () => {
    const [
        {running, seconds},
        {setRunning, setSeconds},
    ] = useTimer(SESSION_DURATION, false, () =>
        console.log("Timer is finished!"),
    );

    const handleMinus = useCallback(
        () => setSeconds(val => Math.max(val - 60, 0)),
        [setSeconds],
    );
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);
    const handlePlayPause = useCallback(() => setRunning(val => !val), [
        setRunning,
    ]);
    const handlePlus = useCallback(() => setSeconds(val => val + 60), [
        setSeconds,
    ]);

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlayPause={handlePlayPause}
                    onPlus={handlePlus}
                />
            </div>
        </div>
    );
};

export default Pomodoro;
