import React from "react";
import styles from "../../css/layout/Stack.module.scss";
import { PropTypes } from "prop-types";

const Stack = ({ children }) => {
	return (
		<div className={styles.Stack}>
			{children}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default Stack;

Stack.defaultProps = {};

Stack.propTypes = {};
