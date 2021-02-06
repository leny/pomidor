/* leny/pomidor
 *
 * /src/components/tools/button.js - Tools Button Component
 *
 * coded by leny@BeCode
 * started at 06/02/2021
 */

import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        className={classnames("button", "is-link", "is-medium", "is-fullwidth")}
        type={"button"}
        title={title || label}
        disabled={disabled}
        onClick={onClick}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;
