/* leny/pomidor
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import {useState} from "react";

import classnames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";

const Pomodoro = () => {
    const seconds = 1500;
    const [running, setRunning] = useState(false);

    const handleMinus = () => console.log("minus!");
    const handleReset = () => console.log("reset!");
    const handlePlayPause = () => setRunning(!running);
    const handlePlus = () => console.log("plus!");

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
