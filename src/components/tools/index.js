/* leny/pomidor
 *
 * /src/components/tools/index.js - Tools Component
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";
import Button from "./button";

import {NBSP} from "../../core/constants";

const Tools = ({running = false, onMinus, onReset, onPlayPause, onPlus}) => (
    <div className={"is-flex"}>
        <Button
            label={"-"}
            title={"Remove one minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button label={"reset"} disabled={running} onClick={onReset} />
        {NBSP}
        <Button
            label={running ? "pause" : "start"}
            title={`${running ? "Pause" : "Start"} the timer`}
            onClick={onPlayPause}
        />
        {NBSP}
        <Button
            label={"+"}
            title={"Add one minute"}
            disabled={running}
            onClick={onPlus}
        />
    </div>
);

Tools.propsTypes = {
    running: PropTypes.bool,
    onMinus: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
};

export default Tools;
