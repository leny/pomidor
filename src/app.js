/* leny/pomidor
 *
 * /src/app.js - Main entry point
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import React from "react";
import ReactDOM from "react-dom";

import Hello from "./components/hello";

ReactDOM.render(<Hello name={"Pomidor"} />, document.querySelector("#app"));