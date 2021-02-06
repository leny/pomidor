/* leny/pomidor
 *
 * /src/app.js - Main entry point
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import ReactDOM from "react-dom";
import Pomodoro from "./containers/pomodoro";

import "bulma";
import "./styles/main.scss";

ReactDOM.render(<Pomodoro />, document.querySelector("#app"));
