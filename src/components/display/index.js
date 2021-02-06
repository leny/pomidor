/* leny/pomidor
 *
 * /src/components/display/index.js - Display Component
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";
import Cyphers from "./cyphers";

const Display = ({seconds}) => (
    <div className={"timer-display"}>
        <Cyphers value={Math.floor(seconds / 60)} />
        <span>{":"}</span>
        <Cyphers value={seconds % 60} />
    </div>
);

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default Display;
