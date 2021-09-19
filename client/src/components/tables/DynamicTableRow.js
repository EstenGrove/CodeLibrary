import React from "react";
import styles from "../../css/tables/DynamicTableRow.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableRow = ({ children, ...rest }) => {
	return (
		<tr className={styles.DynamicTableRow} {...rest}>
			{children}
		</tr>
	);
};

export default DynamicTableRow;

DynamicTableRow.defaultProps = {};

DynamicTableRow.propTypes = {
	children: PropTypes.any,
	rest: PropTypes.any,
};
