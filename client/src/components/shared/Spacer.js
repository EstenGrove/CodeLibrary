import React from "react";
import styles from "../../css/shared/Spacer.module.scss";
import { PropTypes } from "prop-types";

const Spacer = ({ width = "auto", height = "2rem" }) => {
	const custom = {
		width,
		height,
	};
	return <div className={styles.Spacer} style={custom}></div>;
};

export default Spacer;

Spacer.defaultProps = {
	width: "auto",
	height: "2rem",
};

Spacer.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
