import React from "react";
import styles from "../../css/tables/DynamicTableContainer.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableContainer = ({ children, ...rest }) => {
	return (
		<div className={styles.DynamicTableContainer} {...rest}>
			{children}
		</div>
	);
};

export default DynamicTableContainer;

DynamicTableContainer.defaultProps = {};

DynamicTableContainer.propTypes = {};
