import React from "react";
import styles from "../../css/layout/Grid.module.scss";
import { PropTypes } from "prop-types";

const Grid = ({ children, ...rest }) => {
	return (
		<div className={styles.Grid} {...rest}>
			{children}
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default Grid;

Grid.defaultProps = {};

Grid.propTypes = {};
