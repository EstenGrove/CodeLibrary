import React from "react";
import styles from "../../css/tables/DynamicTable.module.scss";
import { PropTypes } from "prop-types";

const DynamicTable = ({ children, ...rest }) => {
	return (
		<table className={styles.DynamicTable} {...rest}>
			{children}
		</table>
	);
};

export default DynamicTable;

DynamicTable.defaultProps = {};

DynamicTable.propTypes = {
	children: PropTypes.any,
};
