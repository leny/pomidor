/* leny/pomidor
 *
 * /src/components/display/cyphers.js - Display Component Cyphers
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";

const Cyphers = ({value}) => <span>{String(value).padStart(2, "0")}</span>;

Cyphers.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Cyphers;
