import React from "react";
import styles from "../../css/tables/TableHeadings.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import TableHeading from "./TableHeading";

const TableHeadings = ({ headings = [] }) => {
	return (
		<thead className={styles.TableHeadings}>
			<tr className={styles.TableHeadings_row}>
				{!isEmptyArray(headings) &&
					headings.map((col, idx) => (
						<TableHeading key={`ColumnHeading-${col}--${idx}`} heading={col} />
					))}
			</tr>
		</thead>
	);
};

export default TableHeadings;

TableHeadings.defaultProps = {};

TableHeadings.propTypes = {};
