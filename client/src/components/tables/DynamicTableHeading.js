import React from "react";
import styles from "../../css/tables/DynamicTableHeading.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableHeading = ({ children, ...rest }) => {
	return (
		<th className={styles.DynamicTableHeading} {...rest}>
			{children}
		</th>
	);
};

export default DynamicTableHeading;

DynamicTableHeading.defaultProps = {};

DynamicTableHeading.propTypes = {
	children: PropTypes.any,
	rest: PropTypes.any,
};
