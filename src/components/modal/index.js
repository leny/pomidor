/* leny/pomidor
 *
 * /src/components/modal/index.js - Modal Component
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";
import {useCallback} from "react";
import {createPortal} from "react-dom";
import {NBSP, BREAK_DURATION} from "../../core/constants";
import {useTimer} from "../../core/hooks/use-timer";

import Display from "../display";
import Button from "../tools/button";

const Modal = ({onClose, onRestart}) => {
    const [{seconds}, {setRunning}] = useTimer(BREAK_DURATION, true, onRestart);

    const stopThen = useCallback(
        next => () => {
            setRunning(false);
            next();
        },
        [setRunning],
    );

    return createPortal(
        <div className={"modal-overlay"}>
            <div className={"box"}>
                <h4>{"It's over!"}</h4>
                <p>{"Please, take a short break!"}</p>
                <Display seconds={seconds} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
