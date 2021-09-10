import React, { createContext, useReducer } from "react";
import styles from "../../css/tables/Table.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
// components
import TableHeadings from "./TableHeadings";
import TableRow from "./TableRow";

const Table = ({ schema }) => {
	const { headings, data } = schema;

	return (
		<div className={styles.TableWrapper}>
			<table className={styles.TableWrapper_table}>
				<TableHeadings headings={headings} />
				<tbody className={styles.TableWrapper_table_body}>
					{!isEmptyArray(data) &&
						data.map((rowData, idx) => (
							<TableRow key={`Row-${idx}`} rowData={rowData} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;

Table.defaultProps = {};

Table.propTypes = {
	schema: PropTypes.shape({
		headings: PropTypes.arrayOf(PropTypes.string),
		data: PropTypes.arrayOf(PropTypes.object),
	}),
};
