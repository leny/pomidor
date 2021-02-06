/* leny/pomidor
 *
 * /src/containers/pomodoro.js - Pomodoro Container
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import classnames from "classnames";
import Hello from "../components/hello";

const Pomodoro = () => {
    const name = "Pomidor";

    // TODO: add logic!

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half")}>
                <Hello name={name} />
            </div>
        </div>
    );
};

export default Pomodoro;
