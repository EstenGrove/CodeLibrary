import React from "react";
import styles from "../../css/tables/DynamicTableBody.module.scss";
import { PropTypes } from "prop-types";

const DynamicTableBody = ({ children, ...rest }) => {
	return (
		<tbody className={styles.DynamicTableBody} {...rest}>
			{children}
		</tbody>
	);
};

export default DynamicTableBody;

DynamicTableBody.defaultProps = {};

DynamicTableBody.propTypes = {
	children: PropTypes.any,
	rest: PropTypes.any,
};
