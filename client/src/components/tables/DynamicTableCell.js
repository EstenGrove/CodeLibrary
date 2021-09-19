import React from "react";
import styles from "../../css/tables/DynamicTableCell.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableCell = ({ align = "center", children, ...rest }) => {
	const custom = {
		textAlign: align,
	};
	return (
		<td className={styles.DynamicTableCell} style={custom} {...rest}>
			{children}
		</td>
	);
};

export default DynamicTableCell;

DynamicTableCell.defaultProps = {};

DynamicTableCell.propTypes = {
	align: PropTypes.string,
	children: PropTypes.any,
	rest: PropTypes.any,
};
