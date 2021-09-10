import React from "react";
import styles from "../../css/tables/TableRow.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
// components
import TableCell from "./TableCell";

const TableRow = ({ rowData = {} }) => {
	// extract object's keys & iterate thru each to render the rowData to a cell
	const keys = Object.keys(rowData);
	return (
		<tr className={styles.TableRow}>
			{!isEmptyArray(keys) &&
				keys.map((key, idx) => (
					<TableCell key={`Cell-${key}--${idx}`} cellData={rowData[key]} />
				))}
		</tr>
	);
};

export default TableRow;

TableRow.defaultProps = {};

TableRow.propTypes = {
	rowData: PropTypes.object,
};
