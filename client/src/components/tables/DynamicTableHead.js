import React from "react";
import styles from "../../css/tables/DynamicTableHead.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableHead = ({ children, ...rest }) => {
	return (
		<thead className={styles.DynamicTableHead} {...rest}>
			{children}
		</thead>
	);
};

export default DynamicTableHead;

DynamicTableHead.defaultProps = {};

DynamicTableHead.propTypes = {
	children: PropTypes.any,
	rest: PropTypes.any,
};
