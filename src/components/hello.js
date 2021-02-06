/* leny/pomidor
 *
 * /src/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";

const Hello = ({name}) => <p>{`Hello, ${name}!`}</p>;

Hello.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Hello;
